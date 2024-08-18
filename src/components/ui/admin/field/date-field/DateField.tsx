import styles from './DateField.module.scss'
import { DateFieldProps } from './date-field.interface'

export default function DateField({ date, handleChange }: DateFieldProps) {
  return (
    <div className={styles.field}>
      <input
        type='date'
        value={date}
        onChange={event => handleChange(event.target.value)}
      />
    </div>
  )
}
