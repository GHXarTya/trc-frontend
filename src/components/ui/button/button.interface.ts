import type { MessageKeys, TranslationValues } from 'next-intl'
import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  located: 'layout' | 'page'
  size: 'subheading' | 'body'
  weight: 400 | 500
  color: 'primary' | 'secondary'
  isActive?: boolean
  tKey?: MessageKeys<IntlMessages, IntlMessageKeys<IntlMessages>>
  tValues?: TranslationValues
}
