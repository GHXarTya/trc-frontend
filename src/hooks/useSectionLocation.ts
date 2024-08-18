import { useEffect, useState } from 'react'

import type { SectionLocation } from '@/types/hooks.interface'

import { useSections } from './useSections'
import { useViewportSize } from './useViewportSize'

export const useSectionLocation = () => {
  const [sectionLocation, setSectionLocation] = useState<SectionLocation>(
    {} as SectionLocation
  )

  const { sections } = useSections()

  const { viewportWidth, viewportHeight } = useViewportSize()

  useEffect(() => {
    const headerHeight = viewportWidth && viewportWidth <= 991 ? 72 : 90

    sections.forEach(({ id: key, offsetTop }) =>
      setSectionLocation(previousState => ({
        ...previousState,
        [key]: offsetTop - headerHeight
      }))
    )
  }, [sections, viewportWidth, viewportHeight])

  return { sectionLocation }
}
