import type { Pathnames } from 'next-intl/navigation'

import type { Locale } from '@/types/config.interface'

import { ADMIN_PAGE, HOME_PAGE } from './routes.config'

export const locales: Locale[] = ['uk-UA', 'en-US']
export const defaultLocale: Locale = 'uk-UA'
export const localeDetection = false

export const pathnames: Pathnames<typeof locales> = {
  '/': HOME_PAGE,
  '/admin': ADMIN_PAGE
}
