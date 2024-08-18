import clsx from 'clsx'
import Image from 'next/image'

import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useViewportSize } from '@/hooks/useViewportSize'

import styles from './Tells.module.scss'

export default function Tells() {
  const { setIsModalOpen } = useStore()

  const { viewportWidth } = useViewportSize()

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <Text
            located='page'
            size='heading'
            weight={500}
            color='secondary'
            tKey='Sections.Tells.title'
            tRich
          />
          <div>
            <Text
              located='page'
              size='body'
              weight={400}
              color='secondary'
              className={styles.description}
              tKey='Sections.Tells.description'
              tRich
            />
            <Text
              located='page'
              size='body'
              weight={500}
              color='secondary'
              underline
              onClick={() => setIsModalOpen({ ['Tells']: true })}
              tKey='Sections.Tells.action'
            />
          </div>
        </div>
        <div
          className={clsx(styles.background, {
            [styles.background_loading]: !viewportWidth
          })}
        >
          <Image
            src={
              viewportWidth && viewportWidth <= 991
                ? '/tells/background-mobile.svg'
                : '/tells/background.svg'
            }
            alt=''
            fill
            draggable={false}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
