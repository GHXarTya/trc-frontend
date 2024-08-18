'use client'

import { useEffect } from 'react'

import Loader from '@/ui/loader/Loader'

import { useRouter } from '@/config/helpers/locale.helper'
import { HOME_PAGE } from '@/config/routes.config'

export default function NotFound() {
  const { replace } = useRouter()

  useEffect(() => replace(HOME_PAGE), [])

  return (
    <main className='main'>
      <Loader variant='dark' isFullscreen />
    </main>
  )
}
