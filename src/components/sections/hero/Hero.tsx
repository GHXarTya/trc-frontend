import Image from 'next/image'

import Text from '@/ui/text/Text'

import { useSectionLocation } from '@/hooks/useSectionLocation'

import styles from './Hero.module.scss'

export default function Hero() {
  const { sectionLocation } = useSectionLocation()

  return (
    <>
      <div className={styles.background}>
        <Image
          src='/hero/background.jpg'
          alt=''
          fill
          draggable={false}
          quality={100}
          priority
        />
      </div>
      <div className={styles.container}>
        <div>
          <Text
            located='page'
            size='large'
            weight={500}
            color='primary'
            className={styles.title}
            tKey='Sections.Hero.title'
            tRich
          />
          <Text
            located='page'
            size='body'
            weight={400}
            color='primary'
            className={styles.description}
            tKey='Sections.Hero.description'
            tRich
          />
          <Text
            located='page'
            size='body'
            weight={400}
            color='primary'
            underline
            onClick={() => window.scrollTo(0, sectionLocation['Hyper'])}
            tKey='Sections.Hero.action'
          />
        </div>
        <Text
          located='page'
          size='body'
          weight={400}
          color='primary'
          className={styles.description}
          tKey='Sections.Hero.description'
          tRich
        />
      </div>
    </>
  )
}
