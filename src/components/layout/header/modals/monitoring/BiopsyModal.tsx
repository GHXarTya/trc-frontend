import { Fragment } from 'react'

import Modal from '@/ui/modal/Modal'
import Text from '@/ui/text/Text'

import { Link } from '@/config/helpers/locale.helper'

import { useIntlMessages } from '@/hooks/useIntlMessages'

export default function BiopsyModal() {
  const messages = useIntlMessages()

  return (
    <Modal id='Biopsy'>
      <Text
        located='page'
        size='heading'
        weight={500}
        color='secondary'
        tKey='Sections.Monitoring.Biopsy.title'
        tRich
      />
      <Text
        located='page'
        size='body'
        weight={400}
        color='secondary'
        tKey='Sections.Monitoring.Biopsy.description'
        tRich
      />
      {(
        Object.keys(messages.Sections.Monitoring.Biopsy.more) as Array<
          keyof IntlMessages['Sections']['Monitoring']['Biopsy']['more']
        >
      ).map(key => (
        <Fragment key={key}>
          {messages.Sections.Monitoring.Biopsy.more[key].title && (
            <Text
              located='page'
              size='subheading'
              weight={500}
              color='secondary'
              tKey={`Sections.Monitoring.Biopsy.more.${key}.title`}
            />
          )}
          {(
            Object.keys(
              messages.Sections.Monitoring.Biopsy.more[key].description
            ) as Array<
              keyof IntlMessages['Sections']['Monitoring']['Biopsy']['more'][typeof key]['description']
            >
          ).map(descriptionKey => (
            <Fragment key={descriptionKey}>
              {messages.Sections.Monitoring.Biopsy.more[key].description[
                descriptionKey
              ] && (
                <Text
                  located='page'
                  size='body'
                  weight={400}
                  color='secondary'
                  tKey={`Sections.Monitoring.Biopsy.more.${key}.description.${descriptionKey}`}
                />
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Link
        href={messages.Sections.Monitoring.Biopsy.source.link}
        target='_blank'
      >
        <Text
          located='page'
          size='body'
          weight={500}
          color='secondary'
          underline
          tKey='Sections.Monitoring.Biopsy.source.text'
        />
      </Link>
    </Modal>
  )
}
