import { useEffect, useState } from 'react'

import { debounce } from '@/utils/debounce'

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handle = () => setScrollTop(document.documentElement.scrollTop)

    const debouncedHandle = debounce(handle, 15)

    window.addEventListener('scroll', debouncedHandle)

    return () => window.removeEventListener('scroll', debouncedHandle)
  }, [])

  return { scrollTop }
}
