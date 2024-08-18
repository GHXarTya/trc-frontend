import type { Locale } from './config.interface'

export interface AdminData {
  locale: Locale
  password: string
  isHashed?: boolean
}

export interface AdminResponse {
  message: string
  password?: string
}

export interface MessagesData {
  locale: Locale
  messages: IntlMessages
  password: string
}

export interface MessagesResponse {
  message: string
}

export interface AppointmentFreeTime {
  start: string
  eventId: string
}

export interface CallData {
  name: string
  phone: string
  email?: string
}

export interface AppointmentData extends CallData {
  eventId: string
}

export interface ImgBBResponse {
  data: {
    url: string
  }
  success: boolean
  status: number
}
