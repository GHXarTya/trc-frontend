import Image from 'next/image'

import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import styles from './Biopsy.module.scss'

export default function Biopsy() {
  const { setIsModalOpen } = useStore()

  return (
    <div className={styles.biopsy}>
      <div className={styles.background}>
        <Image
          src='/monitoring/biopsy/background.svg'
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
          color='secondary'
          tKey='Sections.Monitoring.Biopsy.title'
          tRich
        />
        <div>
          <Text
            located='page'
            size='body'
            weight={400}
            color='secondary'
            className={styles.description}
            tKey='Sections.Monitoring.Biopsy.description'
            tRich
          />
          <Text
            located='page'
            size='body'
            weight={500}
            color='secondary'
            underline
            onClick={() => setIsModalOpen({ ['Biopsy']: true })}
            tKey='Sections.Monitoring.Biopsy.action'
          />
        </div>
      </div>
    </div>
  )
}
