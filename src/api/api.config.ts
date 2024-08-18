import axios from 'axios'

import { getContentType } from './api.helper'

const axiosOptions = {
  baseURL: process.env.API_URL,
  headers: getContentType()
}

export const axiosClassic = axios.create(axiosOptions)

const axiosAppointmentOptions = {
  baseURL: process.env.APPOINTMENT_API_URL,
  headers: getContentType()
}

export const axiosAppointment = axios.create(axiosAppointmentOptions)
