import Text from '@/ui/text/Text'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import styles from './ScoreField.module.scss'
import { ScoreFieldProps } from './score-field.interface'

export default function ScoreField({ score, handleChange }: ScoreFieldProps) {
  const messages = useIntlMessages()

  const questionsQuantity = Object.keys(
    messages.Sections.Test.active.questions
  ).length

  return (
    <div className={styles.field}>
      <input
        type='range'
        value={score}
        onChange={event => handleChange(event.target.value)}
        min={1}
        max={questionsQuantity}
        step={1}
      />
      <Text located='page' size='subheading' weight={500} color='secondary'>
        {score}
      </Text>
    </div>
  )
}
