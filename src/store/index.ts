import { getLocalTimeZone, today } from '@internationalized/date'
import { create } from 'zustand'

import type { Store } from '@/types/store.interface'

export const useStore = create<Store>(set => ({
  mainRef: null,
  sectionInView: {},
  isMenuOpen: false,
  isLocaleDropdownOpen: {},
  isLocaleDropdownDisabled: false,
  isModalOpen: {},
  newsActiveModalKey: undefined,
  appointmentData: {
    isBooking: false,
    name: '',
    isNameValid: false,
    phone: '',
    isPhoneValid: false,
    email: '',
    isEmailValid: false,
    minDate: today(getLocalTimeZone()),
    selectedDate: today(getLocalTimeZone()),
    freeTimes: [],
    selectedTime: '',
    eventId: '',
    isNotFirstFreeDay: false,
    isLoading: false,
    error: null,
    result: null
  },
  testData: {
    score: 0,
    step: 0
  },
  isFooterInView: undefined,
  isMessagesUpdated: {},
  scopePaths: [],
  setMainRef: value => set({ mainRef: value }),
  setSectionInView: value => set({ sectionInView: value }),
  setIsMenuOpen: value => set({ isMenuOpen: value }),
  setIsLocaleDropdownOpen: value => set({ isLocaleDropdownOpen: value }),
  setIsLocaleDropdownDisabled: value =>
    set({ isLocaleDropdownDisabled: value }),
  setIsModalOpen: value => set({ isModalOpen: value }),
  setNewsActiveModalKey: value => set({ newsActiveModalKey: value }),
  setAppointmentData: value =>
    set(({ appointmentData }) => ({
      appointmentData: {
        ...appointmentData,
        ...value
      }
    })),
  setTestData: value =>
    set(({ testData }) => ({
      testData: {
        ...testData,
        ...value
      }
    })),
  setIsFooterInView: value => set({ isFooterInView: value }),
  setIsMessagesUpdated: value => set({ isMessagesUpdated: value }),
  setScopePaths: value => set({ scopePaths: value })
}))
