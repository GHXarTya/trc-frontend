'use client'

import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { useState } from 'react'
import { toast } from 'sonner'

import Field from '@/ui/admin/field/Field'
import Scope from '@/ui/admin/scope/Scope'
import Button from '@/ui/button/Button'

import { PASSWORD } from '@/config/admin.config'

import { useStore } from '@/store'

import { useIntlLocale } from '@/hooks/useIntlLocale'
import { useIntlMessages } from '@/hooks/useIntlMessages'

import { catchErrorMessage } from '@/api/api.helper'
import { MessagesService } from '@/api/messages.service'

import styles from './Panel.module.scss'

export default function Panel() {
  const intlMessages = useIntlMessages()
  const locale = useIntlLocale()
  const [messages, setMessages] = useState<IntlMessages>(intlMessages)

  const { isMessagesUpdated, setIsMessagesUpdated } = useStore()

  const isMessagesUpdatedByLocale = isMessagesUpdated[locale]
  const setIsMessagesUpdatedByLocale = (value: boolean) =>
    setIsMessagesUpdated({ ...isMessagesUpdated, [locale]: value })

  const configureMessages = (
    currentPath: string,
    action:
      | 'updateField'
      | 'addField'
      | 'addMoreElement'
      | 'addNewsfeedElement'
      | 'deleteNumberedElement',
    value?: string
  ) => {
    const updatedData = { ...messages }

    let temp: any = updatedData
    const keys = currentPath.split('.')

    keys.forEach((key, index) => {
      if (index === keys.length - 1) {
        if (action === 'updateField' && value !== undefined) temp[key] = value

        if (action.includes('add')) {
          const subKeys = Object.keys(temp[key])
          const lastSubKey = parseInt(subKeys[subKeys.length - 1])
          const newKey = `${isNaN(lastSubKey) ? 1 : lastSubKey + 1}`

          if (action === 'addField') temp[key][newKey] = ''
          if (action === 'addMoreElement')
            temp[key][newKey] = {
              title: '',
              description: {
                '1': ''
              }
            }
          if (action === 'addNewsfeedElement')
            temp[key][newKey] = {
              image: '',
              date: '',
              title: '',
              action: '',
              more: {
                '1': {
                  title: '',
                  description: {
                    '1': ''
                  }
                }
              }
            }
        }

        if (action === 'deleteNumberedElement') {
          delete temp[key]

          const keys = Object.keys(temp)

          keys.forEach((key, index) => {
            const newKey = `${index + 1}`

            if (newKey !== key) {
              temp[newKey] = temp[key]
              delete temp[key]
            }
          })
        }
      } else temp = temp[key]
    })

    setMessages(updatedData)
    setIsMessagesUpdatedByLocale(true)
  }

  function render(data: any, path = '') {
    return Object.keys(data).map(key => {
      const currentPath = path ? path + '.' + key : key
      const isNumberedElement = /^\d+$/.test(key)

      if (typeof data[key] === 'object') {
        return (
          <Scope
            key={currentPath}
            data={data}
            dataKey={key}
            currentPath={currentPath}
            isNumberedElement={isNumberedElement}
            render={render}
            configureMessages={configureMessages}
          />
        )
      }

      return (
        <Field
          key={currentPath}
          data={data}
          dataKey={key}
          currentPath={currentPath}
          isNumberedElement={isNumberedElement}
          configureMessages={configureMessages}
        />
      )
    })
  }

  const {
    mutate: save,
    isPending,
    isSuccess
  } = useMutation({
    mutationFn: MessagesService.save,
    onSuccess: ({ data }) => {
      toast.success(data.message)
      setIsMessagesUpdatedByLocale(false)
    },
    onError: error => toast.error(catchErrorMessage(error))
  })

  return (
    <>
      {render(messages)}
      <Button
        located='page'
        size='body'
        weight={500}
        color='secondary'
        disabled={
          isPending ||
          (!isMessagesUpdatedByLocale && isSuccess) ||
          !isMessagesUpdatedByLocale
        }
        className={clsx(styles.button, {
          [styles.button_success]: !isMessagesUpdatedByLocale && isSuccess
        })}
        onClick={() =>
          save({
            locale,
            messages,
            password: localStorage.getItem(PASSWORD) ?? ''
          })
        }
        tKey={`Admin.action.save.${isPending ? 'pending' : !isMessagesUpdatedByLocale && isSuccess ? 'completed' : 'default'}`}
      />
    </>
  )
}
