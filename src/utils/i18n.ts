import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { locales } from '@/config/locale.config'

import type { Locale } from '@/types/config.interface'

import { MessagesService } from '@/api/messages.service'

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound()

  try {
    const { data: messages } = await MessagesService.get(locale as Locale)

    return {
      messages
    }
  } catch (error) {
    console.error(error)
    notFound()
  }
})
