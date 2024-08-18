import { getLocalizedDateWithTime } from '@/layout/header/modals/appointment/appointment-modal.helper'

import Button from '@/ui/button/Button'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useIntlLocale } from '@/hooks/useIntlLocale'

import styles from './AppointmentResult.module.scss'

export default function AppointmentResult() {
  const locale = useIntlLocale()
  const { appointmentData, setIsModalOpen, setAppointmentData } = useStore()

  const { selectedDate, selectedTime, result } = appointmentData

  if (!result) return

  return (
    <>
      <Text
        located='layout'
        size='heading'
        weight={400}
        color='primary'
        className={styles.text}
        tKey='Header.appointment.result.title'
      />
      <div>
        {result === 'appointment' && selectedDate && selectedTime && (
          <Text
            located='layout'
            size='body'
            weight={400}
            color='primary'
            className={styles.text}
            tKey='Header.appointment.result.description.appointment'
            tValues={{
              date: getLocalizedDateWithTime(selectedDate, selectedTime, locale)
            }}
          />
        )}
        <Text
          located='layout'
          size='body'
          weight={400}
          color='primary'
          className={styles.text}
          tKey='Header.appointment.result.description.call'
        />
      </div>
      <Button
        located='layout'
        size='body'
        weight={500}
        color='primary'
        isActive
        onClick={() => {
          setIsModalOpen({ ['Appointment']: false })
          setAppointmentData({
            name: '',
            phone: '',
            email: ''
          })
          setTimeout(() => setAppointmentData({ result: null }), 400)
        }}
        tKey='Header.appointment.result.action'
      />
    </>
  )
}
