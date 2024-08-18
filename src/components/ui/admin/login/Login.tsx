import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import Button from '@/ui/button/Button'
import Input from '@/ui/input/Input'
import Text from '@/ui/text/Text'

import { PASSWORD } from '@/config/admin.config'

import { useIntlLocale } from '@/hooks/useIntlLocale'

import { AdminService } from '@/api/admin.service'
import { catchErrorMessage } from '@/api/api.helper'

import styles from './Login.module.scss'
import { LoginProps } from './login.interface'

export default function Login({ setIsAdmin }: LoginProps) {
  const locale = useIntlLocale()
  const [password, setPassword] = useState('')

  const { mutate: check, isPending } = useMutation({
    mutationFn: AdminService.check,
    onSuccess: ({ data }) => {
      toast.success(data.message)
      if (data.password) localStorage.setItem(PASSWORD, data.password)
      setIsAdmin(true)
    },
    onError: error => toast.error(catchErrorMessage(error))
  })

  useEffect(() => {
    const password = localStorage.getItem(PASSWORD)

    if (password) check({ locale, password, isHashed: true })
  }, [])

  return (
    <>
      <Text
        located='page'
        size='subheading'
        weight={500}
        color='secondary'
        className={styles.text}
        tKey='Admin.login.title'
      />
      <Input
        located='page'
        value={password}
        onChange={event => setPassword(event.target.value)}
        color='secondary'
        className={styles.content}
        type='password'
        onKeyDown={event =>
          event.key === 'Enter' && check({ locale, password })
        }
        tKey='Admin.login.password'
      />
      <Button
        located='page'
        size='body'
        weight={500}
        color='secondary'
        disabled={isPending}
        className={styles.content}
        onClick={() => check({ locale, password })}
        tKey={`Admin.login.action.confirm.${isPending ? 'pending' : 'default'}`}
      />
    </>
  )
}
