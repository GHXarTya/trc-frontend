import { useEffect, useState } from 'react'

import type { ViewportSize } from '@/types/hooks.interface'

import { debounce } from '@/utils/debounce'

export const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    viewportWidth: undefined,
    viewportHeight: undefined
  })

  useEffect(() => {
    const handle = () =>
      setViewportSize({
        viewportWidth: window.innerWidth,
        viewportHeight: window.innerHeight
      })

    handle()

    const debouncedHandle = debounce(handle, 150)

    window.addEventListener('resize', debouncedHandle)

    return () => window.removeEventListener('resize', debouncedHandle)
  }, [])

  return viewportSize
}
