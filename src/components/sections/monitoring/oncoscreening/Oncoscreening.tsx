import clsx from 'clsx'
import Image from 'next/image'

import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useViewportSize } from '@/hooks/useViewportSize'

import styles from './Oncoscreening.module.scss'

export default function Oncoscreening() {
  const { viewportWidth } = useViewportSize()

  const { setIsModalOpen } = useStore()

  return (
    <div className={styles.oncoscreening}>
      <div
        className={clsx(styles.background, {
          [styles.background_loading]: !viewportWidth
        })}
      >
        <Image
          src={
            viewportWidth && viewportWidth <= 991
              ? '/monitoring/oncoscreening/background-mobile.svg'
              : '/monitoring/oncoscreening/background.svg'
          }
          alt=''
          fill
          draggable={false}
          quality={100}
        />
      </div>
      <div className={styles.content}>
        <Text
          located='page'
          size='heading'
          weight={500}
          color='primary'
          tKey='Sections.Monitoring.Oncoscreening.title'
          tRich
        />
        <div>
          <Text
            located='page'
            size='body'
            weight={400}
            color='primary'
            className={styles.description}
            tKey='Sections.Monitoring.Oncoscreening.description'
            tRich
          />
          <Text
            located='page'
            size='body'
            weight={500}
            color='primary'
            underline
            onClick={() => setIsModalOpen({ ['Oncoscreening']: true })}
            tKey='Sections.Monitoring.Oncoscreening.action'
          />
        </div>
      </div>
    </div>
  )
}
