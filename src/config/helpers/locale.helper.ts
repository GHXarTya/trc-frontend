import { createLocalizedPathnamesNavigation } from 'next-intl/navigation'

import { locales, pathnames } from '@/config/locale.config'

import type { Locale } from '@/types/config.interface'

export const getLocaleLanguageCode = (locale: Locale) => locale.split('-')[0]

export const getLocaleCountryCode = (locale: Locale) =>
  locale.split('-')[1].toLowerCase()

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames
  })
