'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Login from '@/ui/admin/login/Login'
import Panel from '@/ui/admin/panel/Panel'

import { useStore } from '@/store'

export default function Admin() {
  const { isModalOpen, setIsModalOpen } = useStore()

  useEffect(() => isModalOpen && setIsModalOpen({}), [])

  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <main
      className={clsx('main', 'admin', {
        ['login']: !isAdmin
      })}
    >
      {isAdmin ? <Panel /> : <Login setIsAdmin={setIsAdmin} />}
    </main>
  )
}
