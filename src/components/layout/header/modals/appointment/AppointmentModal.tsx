import { parseDate } from '@internationalized/date'
import { Calendar } from '@nextui-org/calendar'
import { useMutation } from '@tanstack/react-query'
import clsx from 'clsx'
import { validate } from 'email-validator'
import { CountryCode, isValidNumber } from 'libphonenumber-js'
import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

import Button from '@/ui/button/Button'
import Input from '@/ui/input/Input'
import Loader from '@/ui/loader/Loader'
import Modal from '@/ui/modal/Modal'
import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useIntlLocale } from '@/hooks/useIntlLocale'

import { catchErrorMessage, catchErrorStatus } from '@/api/api.helper'
import { AppointmentService } from '@/api/appointment.service'

import styles from './AppointmentModal.module.scss'
import AppointmentError from './appointment-error/AppointmentError'
import AppointmentFreeTimes from './appointment-free-times/AppointmentFreeTimes'
import AppointmentResult from './appointment-result/AppointmentResult'

export default function AppointmentModal() {
  const locale = useIntlLocale()
  const { appointmentData, setAppointmentData } = useStore()

  const {
    isBooking,
    name,
    isNameValid,
    phone,
    isPhoneValid,
    email,
    isEmailValid,
    minDate,
    selectedDate,
    freeTimes,
    selectedTime,
    eventId,
    isNotFirstFreeDay,
    isLoading,
    error,
    result
  } = appointmentData

  const { mutate: getFirstFreeDay } = useMutation({
    mutationFn: AppointmentService.getFirstFreeDay,
    onMutate: () =>
      setAppointmentData({
        isNotFirstFreeDay: false,
        isLoading: true,
        error: null
      }),
    onSuccess: ({ data }) => {
      const date = parseDate(data[0].start.split('T')[0])

      setAppointmentData({
        minDate: date,
        selectedDate: date,
        freeTimes: data,
        isLoading: false
      })
    },
    onError: error => {
      toast.error(catchErrorMessage(error))

      setAppointmentData({
        isLoading: false,
        error: 'schedule'
      })
    }
  })

  const { mutate: getDay } = useMutation({
    mutationFn: AppointmentService.getDay,
    onMutate: () =>
      setAppointmentData({
        isNotFirstFreeDay: true,
        isLoading: true,
        error: null
      }),
    onSuccess: ({ data }) => {
      setAppointmentData({
        freeTimes: data,
        isLoading: false
      })
    },
    onError: error => {
      toast.error(catchErrorMessage(error))

      setAppointmentData({
        isLoading: false,
        error: 'schedule'
      })
    }
  })

  const { mutate: scheduleAppointment } = useMutation({
    mutationFn: AppointmentService.scheduleAppointment,
    onMutate: () =>
      setAppointmentData({
        isLoading: true,
        error: null
      }),
    onSuccess: () => {
      setAppointmentData({
        isBooking: false,
        result: 'appointment',
        isLoading: false
      })
    },
    onError: error => {
      toast.error(catchErrorMessage(error))

      setAppointmentData({
        isLoading: false,
        error: catchErrorStatus(error) === 409 ? 'occupied' : 'appointment'
      })
    }
  })

  const { mutate: requestCall } = useMutation({
    mutationFn: AppointmentService.requestCall,
    onMutate: () =>
      setAppointmentData({
        isLoading: true,
        error: null
      }),
    onSuccess: () => {
      setAppointmentData({
        result: 'call',
        isLoading: false
      })
    },
    onError: error => {
      toast.error(catchErrorMessage(error))

      setAppointmentData({
        isLoading: false,
        error: 'call'
      })
    }
  })

  const isInfoInvalid =
    !isNameValid || !isPhoneValid || !!(email && !isEmailValid)
  const previousSelectedDateRef = useRef(selectedDate)

  useEffect(
    () =>
      setAppointmentData({
        isNameValid:
          name.length > 1 &&
          name.length < 30 &&
          /^[\p{L}\p{M}'-]+$/u.test(name),
        isPhoneValid: isValidNumber(phone, locale.split('-')[1] as CountryCode),
        isEmailValid: validate(email)
      }),
    [name, phone, email]
  )

  useEffect(() => {
    const previousSelectedDate = previousSelectedDateRef.current

    const isSelectedDateChanged =
      selectedDate.toString() !== previousSelectedDate.toString()

    if (selectedTime && eventId && isSelectedDateChanged)
      setAppointmentData({ selectedTime: '', eventId: '' })

    const isFirstFreeDay = selectedDate.toString() === minDate.toString()

    if ((!isFirstFreeDay || isNotFirstFreeDay) && isSelectedDateChanged)
      getDay(selectedDate.toString())

    previousSelectedDateRef.current = selectedDate
  }, [selectedDate])

  return (
    <Modal id='Appointment'>
      {result ? (
        <AppointmentResult />
      ) : isBooking ? (
        <>
          <Calendar
            showMonthAndYearPickers
            weekdayStyle='short'
            color={error ? 'danger' : !freeTimes.length ? 'warning' : 'success'}
            minValue={minDate}
            value={selectedDate}
            onChange={value => setAppointmentData({ selectedDate: value })}
            isDisabled={isLoading}
            calendarWidth='100%'
            className={styles.calendar}
          />
          {isLoading ? (
            <Loader variant='light' />
          ) : error ? (
            <AppointmentError
              getFirstFreeDay={getFirstFreeDay}
              getDay={getDay}
              scheduleAppointment={scheduleAppointment}
              requestCall={requestCall}
            />
          ) : (
            <AppointmentFreeTimes scheduleAppointment={scheduleAppointment} />
          )}
        </>
      ) : (
        <>
          <Input
            located='layout'
            value={name}
            onChange={event =>
              setAppointmentData({
                name:
                  event.target.value.length === 1
                    ? event.target.value.replace(/\s+/g, '').toUpperCase()
                    : event.target.value.replace(/\s+/g, '')
              })
            }
            color='primary'
            className={clsx({
              [styles.error]: name && !isNameValid
            })}
            tKey='Header.appointment.name'
          />
          <Input
            located='layout'
            value={phone}
            onChange={event =>
              setAppointmentData({
                phone: event.target.value.replace(/\s+/g, '')
              })
            }
            color='primary'
            className={clsx({
              [styles.error]: phone && !isPhoneValid
            })}
            tKey='Header.appointment.phone'
          />
          <Input
            located='layout'
            value={email}
            onChange={event =>
              setAppointmentData({
                email: event.target.value.replace(/\s+/g, '')
              })
            }
            color='primary'
            className={clsx({
              [styles.error]: email && !isEmailValid
            })}
            tKey='Header.appointment.email'
          />
          <div className={styles.buttons}>
            <Button
              located='layout'
              size='body'
              weight={500}
              color='primary'
              disabled={isInfoInvalid}
              isActive={!isInfoInvalid}
              onClick={() => {
                setAppointmentData({ isBooking: true })
                getFirstFreeDay()
              }}
              tKey='Header.appointment.action.continue'
            />
            {isLoading ? (
              <Loader variant='light' />
            ) : error ? (
              <AppointmentError
                getFirstFreeDay={getFirstFreeDay}
                getDay={getDay}
                scheduleAppointment={scheduleAppointment}
                requestCall={requestCall}
              />
            ) : (
              <Button
                located='layout'
                size='body'
                weight={500}
                color='primary'
                disabled={isInfoInvalid}
                onClick={() => requestCall({ name, phone, email })}
                tKey='Header.appointment.action.call'
              />
            )}
          </div>
          {(!name || !phone) && (
            <Text
              located='layout'
              size='body'
              weight={400}
              color='primary'
              tKey='Header.appointment.hint'
            />
          )}
        </>
      )}
    </Modal>
  )
}
