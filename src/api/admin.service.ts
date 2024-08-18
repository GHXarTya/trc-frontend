import type { AdminData, AdminResponse } from '@/types/api.interface'

import { axiosClassic } from './api.config'

export const AdminService = {
  check(data: AdminData) {
    return axiosClassic<AdminResponse>({
      url: `/admin/${data.locale}`,
      method: 'POST',
      data: { password: data.password, isHashed: data.isHashed }
    })
  }
}
