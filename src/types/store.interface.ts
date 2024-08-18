import type { CalendarDate } from '@internationalized/date'

import type { AppointmentFreeTime } from './api.interface'
import type { Locale } from './config.interface'

type SectionInView = {
  [Key in keyof IntlMessages['Sections']]?: boolean
}

type IsLocaleDropdownOpen = {
  [Key in 'header' | 'menu']?: boolean
}

type IsModalOpen = {
  [Key in
    | keyof IntlMessages['Sections']
    | keyof Pick<
        IntlMessages['Sections']['Monitoring'],
        'Ultrasound' | 'Biopsy' | 'Oncoscreening'
      >
    | 'Appointment']?: boolean
}

type AppointmentData = {
  isBooking: boolean
  name: string
  isNameValid: boolean
  phone: string
  isPhoneValid: boolean
  email: string
  isEmailValid: boolean
  minDate: CalendarDate
  selectedDate: CalendarDate
  freeTimes: AppointmentFreeTime[]
  selectedTime: string
  eventId: string
  isNotFirstFreeDay: boolean
  isLoading: boolean
  error: 'schedule' | 'appointment' | 'occupied' | 'call' | null
  result: 'appointment' | 'call' | null
}

type TestData = {
  score: number
  step: number
}

type IsMessagesUpdated = {
  [Key in Locale]?: boolean
}

export interface Store {
  mainRef: React.RefObject<HTMLElement> | null
  sectionInView: SectionInView
  isMenuOpen: boolean
  isLocaleDropdownOpen: IsLocaleDropdownOpen
  isLocaleDropdownDisabled: boolean
  isModalOpen: IsModalOpen
  newsActiveModalKey: string | undefined
  appointmentData: AppointmentData
  testData: TestData
  isFooterInView: boolean | undefined
  isMessagesUpdated: IsMessagesUpdated
  scopePaths: string[]
  setMainRef: (value: React.RefObject<HTMLElement>) => void
  setSectionInView: (value: SectionInView) => void
  setIsMenuOpen: (value: boolean) => void
  setIsLocaleDropdownOpen: (value: IsLocaleDropdownOpen) => void
  setIsLocaleDropdownDisabled: (value: boolean) => void
  setIsModalOpen: (value: IsModalOpen) => void
  setNewsActiveModalKey: (value: string) => void
  setAppointmentData: (value: Partial<AppointmentData>) => void
  setTestData: (value: Partial<TestData>) => void
  setIsFooterInView: (value: boolean) => void
  setIsMessagesUpdated: (value: IsMessagesUpdated) => void
  setScopePaths: (value: string[]) => void
}
