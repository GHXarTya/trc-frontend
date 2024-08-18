export const getContentType = () => ({
  'Content-Type': 'application/json'
})

export const catchErrorMessage = (error: any): string => {
  const message = error?.response?.data?.message

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message
}

export const catchErrorStatus = (error: any): number => {
  const status = error?.response?.status

  return status ? status : error.code === 'ECONNABORTED' ? 408 : 500
}
