import clsx from 'clsx'
import { useEffect, useRef, useTransition } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import Text from '@/ui/text/Text'

import {
  getLocaleCountryCode,
  getLocaleLanguageCode,
  usePathname,
  useRouter
} from '@/config/helpers/locale.helper'
import { locales } from '@/config/locale.config'

import { useStore } from '@/store'

import { useIntlLocale } from '@/hooks/useIntlLocale'

import styles from './Locale.module.scss'
import type { LocaleProps } from './locale.interface'

export default function Locale({ id, className }: LocaleProps) {
  const {
    isLocaleDropdownOpen,
    setIsLocaleDropdownOpen,
    isLocaleDropdownDisabled,
    setIsLocaleDropdownDisabled,
    isMenuOpen,
    setIsMenuOpen
  } = useStore()

  const isLocaleDropdownOpenById = isLocaleDropdownOpen[id]
  const setIsLocaleDropdownOpenById = (value: boolean) =>
    setIsLocaleDropdownOpen({ ...isLocaleDropdownOpen, [id]: value })

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(
    ref,
    () =>
      isLocaleDropdownOpenById &&
      !isLocaleDropdownDisabled &&
      setIsLocaleDropdownOpenById(false)
  )

  const [isPending, startTransition] = useTransition()
  const { replace } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isLocaleDropdownOpenById) setIsLocaleDropdownOpenById(false)

    setTimeout(() => {
      if (isMenuOpen) setIsMenuOpen(false)
      if (isLocaleDropdownDisabled) setIsLocaleDropdownDisabled(false)
    }, 600)
  }, [])

  const activeLocale = useIntlLocale()

  return (
    <div
      ref={ref}
      className={clsx(
        styles.locale,
        {
          [styles.locale_active]: isLocaleDropdownOpenById,
          [styles.locale_pending]: isPending,
          [styles.locale_disabled]: isLocaleDropdownDisabled
        },
        className
      )}
    >
      <span
        id='active-locale'
        onClick={() => setIsLocaleDropdownOpenById(!isLocaleDropdownOpenById)}
      >
        <style jsx>{`
          #active-locale::before {
            background: center / contain no-repeat
              url('/country/${getLocaleCountryCode(activeLocale)}.svg');
          }
        `}</style>
        <Text
          located='layout'
          size='body'
          weight={400}
          color='primary'
          clickable
        >
          {getLocaleLanguageCode(activeLocale)}
        </Text>
      </span>
      <ul className={styles.list}>
        {locales.map(locale => (
          <li
            id='locale'
            key={locale}
            onClick={() =>
              startTransition(() => {
                setIsLocaleDropdownDisabled(true)
                replace(pathname, { locale })
              })
            }
            className={clsx(styles.item, {
              [styles.item_active]: locale === activeLocale
            })}
          >
            <style jsx>{`
              #locale::before {
                background: center / contain no-repeat
                  url('/country/${getLocaleCountryCode(locale)}.svg');
              }
            `}</style>
            <Text
              located='layout'
              size='body'
              weight={400}
              color='primary'
              clickable
            >
              {getLocaleLanguageCode(locale)}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}
