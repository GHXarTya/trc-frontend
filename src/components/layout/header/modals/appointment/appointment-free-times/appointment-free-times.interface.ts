import type { UseMutateFunction } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'

import type { AppointmentData } from '@/types/api.interface'

export interface AppointmentFreeTimesProps {
  scheduleAppointment: UseMutateFunction<
    AxiosResponse<any, any>,
    Error,
    AppointmentData,
    void
  >
}
