import type { MessageKeys, TranslationValues } from 'next-intl'
import type { HTMLAttributes } from 'react'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  located: 'layout' | 'page'
  size: 'large' | 'heading' | 'subheading' | 'body' | 'small'
  weight: 400 | 500 | 700
  color: 'primary' | 'secondary' | 'tertiary'
  underline?: boolean
  translucent?: boolean
  clickable?: boolean
  tKey?: MessageKeys<IntlMessages, IntlMessageKeys<IntlMessages>>
  tRich?: boolean
  tValues?: TranslationValues
}
