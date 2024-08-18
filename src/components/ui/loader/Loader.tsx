import clsx from 'clsx'
import Image from 'next/image'

import type { LoaderProps } from './loader.interface'

export default function Loader({ variant, isFullscreen }: LoaderProps) {
  return (
    <div
      className={clsx('loader', {
        ['loader_fullscreen']: isFullscreen
      })}
    >
      <Image
        src={`/loader/${variant}.svg`}
        alt=''
        width={100}
        height={100}
        draggable={false}
        quality={100}
        priority
      />
    </div>
  )
}
