import Text from '@/ui/text/Text'

import { useSectionLocation } from '@/hooks/useSectionLocation'

import styles from './Hyper.module.scss'

export default function Hyper() {
  const { sectionLocation } = useSectionLocation()

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Text
          located='page'
          size='subheading'
          weight={500}
          color='secondary'
          className={styles.title}
          tKey='Sections.Test.title'
          tRich
        />
        <Text
          located='page'
          size='body'
          weight={700}
          color='secondary'
          underline
          onClick={() => window.scrollTo(0, sectionLocation['Test'])}
          tKey='Sections.Test.action.start'
        />
      </div>
      <div className={styles.section}>
        <Text
          located='page'
          size='subheading'
          weight={500}
          color='secondary'
          className={styles.title}
          tKey='Sections.Monitoring.title'
          tRich
        />
        <Text
          located='page'
          size='body'
          weight={700}
          color='secondary'
          underline
          onClick={() => window.scrollTo(0, sectionLocation['Monitoring'])}
          tKey='Sections.Monitoring.action'
        />
      </div>
      <div className={styles.section}>
        <Text
          located='page'
          size='subheading'
          weight={500}
          color='secondary'
          className={styles.title}
          tKey='Sections.Tells.title'
          tRich
        />
        <Text
          located='page'
          size='body'
          weight={700}
          color='secondary'
          underline
          onClick={() => window.scrollTo(0, sectionLocation['Tells'])}
          tKey='Sections.Tells.action'
        />
      </div>
    </div>
  )
}
