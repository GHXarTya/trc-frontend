import clsx from 'clsx'
import Image from 'next/image'

import Text from '@/ui/text/Text'

import styles from './NavArrow.module.scss'
import type { NavArrow } from './nav-arrow.interface'

export default function NavArrow({ isActive }: NavArrow) {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className={clsx(styles.navArrow, {
        [styles.navArrow_active]: isActive
      })}
    >
      <div>
        <div className={styles.arrow}>
          <Image
            src='/header/arrow.svg'
            alt=''
            fill
            draggable={false}
            quality={100}
          />
        </div>
      </div>
      <Text
        located='layout'
        size='small'
        weight={700}
        color='tertiary'
        clickable
        className={styles.text}
        tKey='Header.action'
      />
    </div>
  )
}
