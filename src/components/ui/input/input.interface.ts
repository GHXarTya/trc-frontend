import type { MessageKeys } from 'next-intl'
import type { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  located: 'layout' | 'page'
  color: 'primary' | 'secondary'
  tKey?: MessageKeys<IntlMessages, IntlMessageKeys<IntlMessages>>
}
