import { ScrollShadow } from '@nextui-org/scroll-shadow'
import clsx from 'clsx'
import Image from 'next/image'

import Button from '@/ui/button/Button'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import styles from './Test.module.scss'

export default function Test() {
  const messages = useIntlMessages()

  const { testData, setTestData, setIsModalOpen } = useStore()

  const { score, step } = testData

  const questions = Object.keys(
    messages.Sections.Test.active.questions
  ) as Array<keyof IntlMessages['Sections']['Test']['active']['questions']>

  const results = messages.Sections.Test.active.results

  const getResult =
    (): keyof IntlMessages['Sections']['Test']['active']['results'] => {
      if (score >= +results.critical.score) return 'critical'
      else if (score >= +results.bad.score) return 'bad'
      else if (score >= +results.medium.score) return 'medium'
      else return 'normal'
    }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div
          className={clsx(styles.content, {
            [styles.content_active]: step
          })}
        >
          {step > questions.length ? (
            <>
              <div className={styles.top}>
                <div className={styles.top_score}>
                  <Text
                    located='page'
                    size='heading'
                    weight={500}
                    color='secondary'
                    translucent
                  >
                    {score + '/' + questions.length}
                  </Text>
                  <Text
                    located='page'
                    size='heading'
                    weight={500}
                    color='secondary'
                    translucent
                    tKey={`Sections.Test.active.results.${getResult()}.title`}
                  />
                </div>
                <Text
                  located='page'
                  size='heading'
                  weight={500}
                  color='secondary'
                  tKey='Sections.Test.active.title.end'
                />
              </div>
              <div className={styles.bottom}>
                <ScrollShadow hideScrollBar>
                  <Text
                    located='page'
                    size='body'
                    weight={400}
                    color='secondary'
                    className={styles.text}
                    tKey={`Sections.Test.active.results.${getResult()}.description`}
                  />
                </ScrollShadow>
                <Button
                  located='page'
                  size='subheading'
                  weight={500}
                  color='secondary'
                  className={styles.button}
                  tKey='Sections.Test.action.end'
                  onClick={() => setIsModalOpen({ ['Appointment']: true })}
                />
              </div>
            </>
          ) : step ? (
            <>
              <div className={styles.top}>
                <div className={styles.top_step}>
                  <Text
                    located='page'
                    size='heading'
                    weight={500}
                    color='secondary'
                  >
                    {step}
                  </Text>
                  <Text
                    located='page'
                    size='heading'
                    weight={500}
                    color='secondary'
                    translucent
                  >
                    {'/' + questions.length}
                  </Text>
                </div>
                <Text
                  located='page'
                  size='heading'
                  weight={500}
                  color='secondary'
                  tKey='Sections.Test.active.title.start'
                />
              </div>
              <div className={styles.bottom}>
                <ScrollShadow hideScrollBar>
                  <Text
                    located='page'
                    size='body'
                    weight={400}
                    color='secondary'
                    className={styles.text}
                    tKey={`Sections.Test.active.questions.${questions[step - 1]}`}
                  />
                </ScrollShadow>
                <div className={styles.answers}>
                  <Button
                    located='page'
                    size='subheading'
                    weight={400}
                    color='secondary'
                    className={styles.button}
                    onClick={() =>
                      setTestData({
                        score: score + 1,
                        step: step + 1
                      })
                    }
                    autoFocus
                    tKey='Sections.Test.active.answers.positive'
                  />
                  <Button
                    located='page'
                    size='subheading'
                    weight={400}
                    color='secondary'
                    className={styles.button}
                    onClick={() =>
                      setTestData({
                        step: step + 1
                      })
                    }
                    tKey='Sections.Test.active.answers.negative'
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <Text
                located='page'
                size='heading'
                weight={500}
                color='secondary'
                tKey='Sections.Test.title'
                tRich
              />
              <ScrollShadow hideScrollBar>
                <Text
                  located='page'
                  size='body'
                  weight={400}
                  color='secondary'
                  className={styles.text}
                  tKey='Sections.Test.description'
                  tRich
                />
              </ScrollShadow>
              <Button
                located='page'
                size='subheading'
                weight={400}
                color='secondary'
                className={styles.button}
                onClick={() =>
                  setTestData({
                    step: step + 1
                  })
                }
                tKey='Sections.Test.action.start'
              />
            </>
          )}
        </div>
        <div className={styles.background}>
          <Image
            src='/test/background.svg'
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
