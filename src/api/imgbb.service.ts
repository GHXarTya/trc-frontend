import axios from 'axios'

import type { ImgBBResponse } from '@/types/api.interface'

export const ImgBBService = {
  upload(image: File) {
    const data = new FormData()
    data.append('image', image)

    return axios<ImgBBResponse>({
      url: `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
      method: 'POST',
      data
    })
  }
}
