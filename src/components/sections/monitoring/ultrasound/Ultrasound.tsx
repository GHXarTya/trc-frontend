import Image from 'next/image'

import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import styles from './Ultrasound.module.scss'

export default function Ultrasound() {
  const { setIsModalOpen } = useStore()

  return (
    <div className={styles.ultrasound}>
      <div className={styles.background}>
        <Image
          src='/monitoring/ultrasound/background.svg'
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
          tKey='Sections.Monitoring.Ultrasound.title'
          tRich
        />
        <div>
          <Text
            located='page'
            size='body'
            weight={400}
            color='secondary'
            className={styles.description}
            tKey='Sections.Monitoring.Ultrasound.description'
            tRich
          />
          <Text
            located='page'
            size='body'
            weight={500}
            color='secondary'
            underline
            onClick={() => setIsModalOpen({ ['Ultrasound']: true })}
            tKey='Sections.Monitoring.Ultrasound.action'
          />
        </div>
      </div>
    </div>
  )
}
