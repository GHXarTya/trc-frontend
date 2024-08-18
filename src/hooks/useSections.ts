import { useEffect, useState } from 'react'

import { useStore } from '@/store'

import type { SectionHTMLElement } from '@/types/hooks.interface'

export const useSections = () => {
  const [sections, setSections] = useState<SectionHTMLElement[]>([])

  const { mainRef } = useStore()

  useEffect(
    () =>
      setSections(
        Array.from(mainRef?.current?.children || []) as SectionHTMLElement[]
      ),
    [mainRef]
  )

  return { sections }
}
