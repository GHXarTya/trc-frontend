import { Fragment } from 'react'

import Modal from '@/ui/modal/Modal'
import Text from '@/ui/text/Text'

import { Link } from '@/config/helpers/locale.helper'

import { useIntlMessages } from '@/hooks/useIntlMessages'

export default function OncoscreeningModal() {
  const messages = useIntlMessages()

  return (
    <Modal id='Oncoscreening'>
      <Text
        located='page'
        size='heading'
        weight={500}
        color='secondary'
        tKey='Sections.Monitoring.Oncoscreening.title'
        tRich
      />
      <Text
        located='page'
        size='body'
        weight={400}
        color='secondary'
        tKey='Sections.Monitoring.Oncoscreening.description'
        tRich
      />
      {(
        Object.keys(messages.Sections.Monitoring.Oncoscreening.more) as Array<
          keyof IntlMessages['Sections']['Monitoring']['Oncoscreening']['more']
        >
      ).map(key => (
        <Fragment key={key}>
          {messages.Sections.Monitoring.Oncoscreening.more[key].title && (
            <Text
              located='page'
              size='subheading'
              weight={500}
              color='secondary'
              tKey={`Sections.Monitoring.Oncoscreening.more.${key}.title`}
            />
          )}
          {(
            Object.keys(
              messages.Sections.Monitoring.Oncoscreening.more[key].description
            ) as Array<
              keyof IntlMessages['Sections']['Monitoring']['Oncoscreening']['more'][typeof key]['description']
            >
          ).map(descriptionKey => (
            <Fragment key={descriptionKey}>
              {messages.Sections.Monitoring.Oncoscreening.more[key].description[
                descriptionKey
              ] && (
                <Text
                  located='page'
                  size='body'
                  weight={400}
                  color='secondary'
                  tKey={`Sections.Monitoring.Oncoscreening.more.${key}.description.${descriptionKey}`}
                />
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Link
        href={messages.Sections.Monitoring.Oncoscreening.source.link}
        target='_blank'
      >
        <Text
          located='page'
          size='body'
          weight={500}
          color='secondary'
          underline
          tKey='Sections.Monitoring.Oncoscreening.source.text'
        />
      </Link>
    </Modal>
  )
}
