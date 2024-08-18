import type { UseMutateFunction } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'

import type {
  AppointmentData,
  AppointmentFreeTime,
  CallData
} from '@/types/api.interface'

export interface AppointmentErrorProps {
  getFirstFreeDay: UseMutateFunction<
    AxiosResponse<AppointmentFreeTime[], any>,
    Error,
    void,
    void
  >
  getDay: UseMutateFunction<
    AxiosResponse<AppointmentFreeTime[], any>,
    Error,
    string,
    void
  >
  scheduleAppointment: UseMutateFunction<
    AxiosResponse<any, any>,
    Error,
    AppointmentData,
    void
  >
  requestCall: UseMutateFunction<AxiosResponse<any, any>, Error, CallData, void>
}
