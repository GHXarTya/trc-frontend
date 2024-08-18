import type {
  AppointmentData,
  AppointmentFreeTime,
  CallData
} from '@/types/api.interface'

import { axiosAppointment } from './api.config'

export const AppointmentService = {
  getFirstFreeDay() {
    return axiosAppointment<AppointmentFreeTime[]>({
      url: '/GetFirstFreeDay',
      method: 'GET'
    })
  },

  getDay(date: string) {
    return axiosAppointment<AppointmentFreeTime[]>({
      url: `/GetDay/${date}`,
      method: 'GET'
    })
  },

  scheduleAppointment(data: AppointmentData) {
    return axiosAppointment({
      url: '/ScheduleAppointment',
      method: 'POST',
      data
    })
  },

  requestCall(data: CallData) {
    return axiosAppointment({
      url: '/RequestCall',
      method: 'POST',
      data
    })
  }
}
