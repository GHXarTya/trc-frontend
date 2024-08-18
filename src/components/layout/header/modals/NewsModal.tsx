import { Fragment } from 'react'

import Modal from '@/ui/modal/Modal'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'

export default function NewsModal() {
  const messages = useIntlMessages()

  const { newsActiveModalKey } = useStore()

  return (
    <>
      {(
        Object.keys(messages.Sections.News.newsfeed) as Array<
          keyof IntlMessages['Sections']['News']['newsfeed']
        >
      ).map(key => (
        <Modal key={key} id='News' isDisabled={newsActiveModalKey !== key}>
          <Text
            located='page'
            size='heading'
            weight={500}
            color='secondary'
            tKey={`Sections.News.newsfeed.${key}.title`}
            tRich
          />
          {(
            Object.keys(messages.Sections.News.newsfeed[key].more) as Array<
              keyof IntlMessages['Sections']['News']['newsfeed'][typeof key]['more']
            >
          ).map(moreKey => (
            <Fragment key={moreKey}>
              {messages.Sections.News.newsfeed[key].more[moreKey].title && (
                <Text
                  located='page'
                  size='subheading'
                  weight={500}
                  color='secondary'
                  tKey={`Sections.News.newsfeed.${key}.more.${moreKey}.title`}
                />
              )}
              {(
                Object.keys(
                  messages.Sections.News.newsfeed[key].more[moreKey].description
                ) as Array<
                  keyof IntlMessages['Sections']['News']['newsfeed'][typeof key]['more'][typeof moreKey]['description']
                >
              ).map(descriptionKey => (
                <Fragment key={descriptionKey}>
                  {messages.Sections.News.newsfeed[key].more[moreKey]
                    .description[descriptionKey] && (
                    <Text
                      located='page'
                      size='body'
                      weight={400}
                      color='secondary'
                      tKey={`Sections.News.newsfeed.${key}.more.${moreKey}.description.${descriptionKey}`}
                    />
                  )}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Modal>
      ))}
    </>
  )
}
