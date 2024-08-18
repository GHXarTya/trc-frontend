import type { MessagesData, MessagesResponse } from '@/types/api.interface'
import type { Locale } from '@/types/config.interface'

import { axiosClassic } from './api.config'

export const MessagesService = {
  get(locale: Locale) {
    return axiosClassic<IntlMessages>({
      url: `/messages/${locale}`,
      method: 'GET'
    })
  },

  save(data: MessagesData) {
    return axiosClassic<MessagesResponse>({
      url: `/messages/${data.locale}`,
      method: 'POST',
      data: { messages: data.messages, password: data.password }
    })
  }
}
