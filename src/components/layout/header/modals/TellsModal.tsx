import { Fragment } from 'react'

import Modal from '@/ui/modal/Modal'
import Text from '@/ui/text/Text'

import { useIntlMessages } from '@/hooks/useIntlMessages'

export default function TellsModal() {
  const messages = useIntlMessages()

  return (
    <Modal id='Tells'>
      <Text
        located='page'
        size='heading'
        weight={500}
        color='secondary'
        tKey='Sections.Tells.title'
        tRich
      />
      <Text
        located='page'
        size='body'
        weight={400}
        color='secondary'
        tKey='Sections.Tells.description'
        tRich
      />
      {(
        Object.keys(messages.Sections.Tells.more) as Array<
          keyof IntlMessages['Sections']['Tells']['more']
        >
      ).map(key => (
        <Fragment key={key}>
          {messages.Sections.Tells.more[key].title && (
            <Text
              located='page'
              size='subheading'
              weight={500}
              color='secondary'
              tKey={`Sections.Tells.more.${key}.title`}
            />
          )}
          {(
            Object.keys(messages.Sections.Tells.more[key].description) as Array<
              keyof IntlMessages['Sections']['Tells']['more'][typeof key]['description']
            >
          ).map(descriptionKey => (
            <Fragment key={descriptionKey}>
              {messages.Sections.Tells.more[key].description[
                descriptionKey
              ] && (
                <Text
                  located='page'
                  size='body'
                  weight={400}
                  color='secondary'
                  tKey={`Sections.Tells.more.${key}.description.${descriptionKey}`}
                />
              )}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </Modal>
  )
}
