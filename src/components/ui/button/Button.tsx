import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import type { ButtonProps } from './button.interface'

export default function Button({
  located,
  size,
  weight,
  color,
  isActive,
  className,
  children,
  tKey,
  tValues,
  ...rest
}: ButtonProps) {
  const t = useTranslations()

  return (
    <button
      {...rest}
      className={clsx(
        'button',
        {
          [`typography_fontSize_${located}_subheading`]: size === 'subheading',
          [`typography_fontSize_${located}_body`]: size === 'body',
          ['typography_fontWeight_regular']: weight === 400,
          ['typography_fontWeight_medium']: weight === 500,
          ['typography_color_primary']: color === 'primary',
          ['typography_color_secondary']: color === 'secondary',
          ['button_active']: isActive
        },
        className
      )}
    >
      {tKey && !children ? t(tKey, tValues && tValues) : children}
    </button>
  )
}
