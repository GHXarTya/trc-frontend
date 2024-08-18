import Button from '@/ui/button/Button'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import styles from './AppointmentError.module.scss'
import type { AppointmentErrorProps } from './appointment-error.interface'

export default function AppointmentError({
  getFirstFreeDay,
  getDay,
  scheduleAppointment,
  requestCall
}: AppointmentErrorProps) {
  const { appointmentData } = useStore()

  const {
    name,
    phone,
    email,
    selectedDate,
    eventId,
    isNotFirstFreeDay,
    error
  } = appointmentData

  const repeat = () => {
    switch (true) {
      case error === 'schedule' && !isNotFirstFreeDay:
        getFirstFreeDay()
        break
      case error === 'schedule' || error === 'occupied':
        getDay(selectedDate.toString())
        break
      case error === 'appointment':
        scheduleAppointment({
          name,
          phone,
          email,
          eventId
        })
        break
      case error === 'call':
        requestCall({ name, phone, email })
        break
      default:
        break
    }
  }

  if (!error) return

  return (
    <div className={styles.error}>
      <Text
        located='layout'
        size='body'
        weight={400}
        color='primary'
        className={styles.text}
        tKey={`Header.appointment.error.${error}`}
      />
      <Button
        located='layout'
        size='body'
        weight={500}
        color='primary'
        tKey='Header.appointment.action.repeat'
        onClick={() => repeat()}
      />
    </div>
  )
}
