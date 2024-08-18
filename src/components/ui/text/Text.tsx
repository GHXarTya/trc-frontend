import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import type { TextProps } from './text.interface'

export default function Text({
  located,
  size,
  weight,
  color,
  underline,
  translucent,
  clickable,
  className,
  children,
  tKey,
  tRich,
  tValues,
  ...rest
}: TextProps) {
  const t = useTranslations()

  return (
    <p
      {...rest}
      className={clsx(
        'typography',
        {
          [`typography_fontSize_${located}_large`]: size === 'large',
          [`typography_fontSize_${located}_heading`]: size === 'heading',
          [`typography_fontSize_${located}_subheading`]: size === 'subheading',
          [`typography_fontSize_${located}_body`]: size === 'body',
          [`typography_fontSize_${located}_small`]: size === 'small',
          ['typography_fontWeight_regular']: weight === 400,
          ['typography_fontWeight_medium']: weight === 500,
          ['typography_fontWeight_bold']: weight === 700,
          ['typography_color_primary']: color === 'primary',
          ['typography_color_secondary']: color === 'secondary',
          ['typography_color_tertiary']: color === 'tertiary',
          ['typography_underline']: underline,
          ['typography_translucent']: translucent,
          ['typography_clickable']: underline || clickable
        },
        className
      )}
    >
      {tKey && !children
        ? tRich
          ? t.rich(tKey, {
              important: chunks => (
                <b className='typography_fontWeight_medium'>{chunks}</b>
              )
            })
          : t(tKey, tValues && tValues)
        : children}
    </p>
  )
}
