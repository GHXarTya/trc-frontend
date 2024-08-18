import clsx from 'clsx'
import { useTranslations } from 'next-intl'

import { InputProps } from './input.interface'

export default function Input({
  located,
  value,
  onChange,
  color,
  className,
  placeholder,
  tKey,
  ...rest
}: InputProps) {
  const t = useTranslations()

  return (
    <input
      {...rest}
      value={value}
      onChange={onChange}
      className={clsx(
        'input',
        `typography_fontSize_${located}_body`,
        'typography_fontWeight_regular',
        {
          ['typography_color_primary']: color === 'primary',
          ['typography_color_secondary']: color === 'secondary'
        },
        className
      )}
      placeholder={tKey && !placeholder ? t(tKey) : placeholder}
    />
  )
}
