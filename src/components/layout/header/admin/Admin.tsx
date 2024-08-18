import Image from 'next/image'
import { useEffect, useState } from 'react'

import { PASSWORD } from '@/config/admin.config'
import { useRouter } from '@/config/helpers/locale.helper'
import { ADMIN_PAGE } from '@/config/routes.config'

import styles from './Admin.module.scss'

export default function Admin() {
  const { push } = useRouter()
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    const password = localStorage.getItem(PASSWORD)

    if (password) setIsShown(true)
  }, [])

  if (!isShown) return

  return (
    <div onClick={() => push(ADMIN_PAGE)} className={styles.admin}>
      <Image
        src='/admin/settings.svg'
        alt=''
        fill
        draggable={false}
        quality={100}
      />
    </div>
  )
}
