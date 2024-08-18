import clsx from 'clsx'

import Text from '@/ui/text/Text'

import styles from './Field.module.scss'
import DateField from './date-field/DateField'
import type { FieldProps } from './field.interface'
import ImageField from './image-field/ImageField'
import ScoreField from './score-field/ScoreField'

export default function Field({
  data,
  dataKey,
  currentPath,
  isNumberedElement,
  configureMessages
}: FieldProps) {
  const isImageField = dataKey === 'image'
  const isDateField = dataKey === 'date'
  const isScoreField = dataKey === 'score'
  const isDescriptionField =
    dataKey === 'description' ||
    (currentPath.includes('description') && isNumberedElement)

  const handleChange = (value: string) =>
    configureMessages(currentPath, 'updateField', value)

  return (
    <div className={styles.field}>
      <div className={styles.top}>
        <Text located='page' size='body' weight={500} color='secondary'>
          {dataKey}
        </Text>
        {isNumberedElement && (
          <Text
            located='page'
            size='body'
            weight={400}
            color='secondary'
            clickable
            onClick={() =>
              configureMessages(currentPath, 'deleteNumberedElement')
            }
            tKey='Admin.action.delete'
          />
        )}
      </div>
      {isImageField ? (
        <ImageField image={data[dataKey]} handleChange={handleChange} />
      ) : isDateField ? (
        <DateField date={data[dataKey]} handleChange={handleChange} />
      ) : isScoreField ? (
        <ScoreField score={data[dataKey]} handleChange={handleChange} />
      ) : (
        <textarea
          value={data[dataKey]}
          onChange={event => handleChange(event.target.value)}
          className={clsx(
            styles.textarea,
            {
              [styles.textarea_description]: isDescriptionField
            },
            'typography_fontSize_page_body',
            'typography_fontWeight_regular',
            'typography_color_secondary'
          )}
        />
      )}
    </div>
  )
}
