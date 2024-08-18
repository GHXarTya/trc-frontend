import { convertToKyivTime } from '@/layout/header/modals/appointment/appointment-modal.helper'

import Button from '@/ui/button/Button'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import styles from './AppointmentFreeTimes.module.scss'
import type { AppointmentFreeTimesProps } from './appointment-free-times.interface'

export default function AppointmentFreeTimes({
  scheduleAppointment
}: AppointmentFreeTimesProps) {
  const { appointmentData, setAppointmentData } = useStore()

  const { name, phone, email, freeTimes, selectedTime } = appointmentData

  return freeTimes.length ? (
    <div className={styles.buttons}>
      {freeTimes.map(({ eventId, start }) => {
        const time = convertToKyivTime(start)
        const isActive = selectedTime === time

        return (
          <Button
            key={eventId}
            located='layout'
            size='body'
            weight={500}
            color='primary'
            isActive={isActive}
            onClick={() =>
              isActive
                ? scheduleAppointment({
                    name,
                    phone,
                    email,
                    eventId
                  })
                : setAppointmentData({
                    selectedTime: time,
                    eventId
                  })
            }
            tKey='Header.appointment.action.book.time'
            tValues={{ time }}
          >
            {!isActive && time}
          </Button>
        )
      })}
    </div>
  ) : (
    <Text
      located='layout'
      size='body'
      weight={400}
      color='primary'
      className={styles.text}
      tKey='Header.appointment.warning.schedule'
    />
  )
}
