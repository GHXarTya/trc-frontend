import { useLocale } from 'next-intl'

import type { Locale } from '@/types/config.interface'

export const useIntlLocale = () => useLocale() as Locale
