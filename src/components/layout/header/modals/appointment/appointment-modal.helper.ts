import type { CalendarDate } from '@internationalized/date'
import { DateTime } from 'luxon'

import type { Locale } from '@/types/config.interface'

export const convertToKyivTime = (utcDateTime: string) =>
  DateTime.fromISO(utcDateTime, { zone: 'utc' })
    .setZone('Europe/Kyiv')
    .toFormat('HH:mm')

export const getLocalizedDateWithTime = (
  selectedDate: CalendarDate,
  selectedTime: string,
  locale: Locale
) => {
  const date = selectedDate.toDate('Europe/Kyiv')

  const time = selectedTime.split(':').map(value => +value)
  date.setHours(time[0])
  date.setMinutes(time[1])

  return date.toLocaleString(locale, {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h24'
  })
}
