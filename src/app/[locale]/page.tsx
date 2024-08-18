'use client'

import { useEffect, useRef } from 'react'

import { sections } from '@/config/sections.config'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'

export default function Home() {
  const ref = useRef<HTMLElement>(null)
  const { setMainRef } = useStore()

  useEffect(() => setMainRef(ref), [])

  const messages = useIntlMessages()

  return (
    <main ref={ref} className='main'>
      {(
        Object.keys(messages.Sections) as Array<keyof IntlMessages['Sections']>
      ).map(key => {
        const Component = sections[key]

        if (!Component) return

        return (
          <section key={key} id={key} className='section'>
            <div className='container'>
              <Component />
            </div>
          </section>
        )
      })}
    </main>
  )
}
