import { Fragment } from 'react'

import Modal from '@/ui/modal/Modal'
import Text from '@/ui/text/Text'

import { useIntlMessages } from '@/hooks/useIntlMessages'

export default function UltrasoundModal() {
  const messages = useIntlMessages()

  return (
    <Modal id='Ultrasound'>
      <Text
        located='page'
        size='heading'
        weight={500}
        color='secondary'
        tKey='Sections.Monitoring.Ultrasound.title'
        tRich
      />
      <Text
        located='page'
        size='body'
        weight={400}
        color='secondary'
        tKey='Sections.Monitoring.Ultrasound.description'
        tRich
      />
      {(
        Object.keys(messages.Sections.Monitoring.Ultrasound.more) as Array<
          keyof IntlMessages['Sections']['Monitoring']['Ultrasound']['more']
        >
      ).map(key => (
        <Fragment key={key}>
          {messages.Sections.Monitoring.Ultrasound.more[key].title && (
            <Text
              located='page'
              size='subheading'
              weight={500}
              color='secondary'
              tKey={`Sections.Monitoring.Ultrasound.more.${key}.title`}
            />
          )}
          {(
            Object.keys(
              messages.Sections.Monitoring.Ultrasound.more[key].description
            ) as Array<
              keyof IntlMessages['Sections']['Monitoring']['Ultrasound']['more'][typeof key]['description']
            >
          ).map(descriptionKey => (
            <Fragment key={descriptionKey}>
              {messages.Sections.Monitoring.Ultrasound.more[key].description[
                descriptionKey
              ] && (
                <Text
                  located='page'
                  size='body'
                  weight={400}
                  color='secondary'
                  tKey={`Sections.Monitoring.Ultrasound.more.${key}.description.${descriptionKey}`}
                />
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
      <a
        href={messages.Sections.Monitoring.Ultrasound.source.link}
        target='_blank'
      >
        <Text
          located='page'
          size='body'
          weight={500}
          color='secondary'
          underline
          tKey='Sections.Monitoring.Ultrasound.source.text'
        />
      </a>
    </Modal>
  )
}
