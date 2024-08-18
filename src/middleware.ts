import createIntlMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

import {
  defaultLocale,
  localeDetection,
  locales,
  pathnames
} from './config/locale.config'
import { HOME_PAGE } from './config/routes.config'

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localeDetection,
  pathnames
})

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameWithLocale = new RegExp(`^/(${locales.join('|')})(/.*)?$`)

  const shouldHandle =
    pathname === HOME_PAGE || pathnameWithLocale.test(request.nextUrl.pathname)

  if (!shouldHandle) return

  return intlMiddleware(request)
}
