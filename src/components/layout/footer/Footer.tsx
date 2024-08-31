'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import Text from '@/ui/text/Text'

import { usePathname } from '@/config/helpers/locale.helper'
import { ADMIN_PAGE } from '@/config/routes.config'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import styles from './Footer.module.scss'

export default function Footer() {
  const pathname = usePathname()
  const isAdmin = pathname === ADMIN_PAGE

  const { ref, inView } = useInView({
    threshold: 0
  })

  const { setIsFooterInView } = useStore()

  useEffect(() => setIsFooterInView(inView), [inView])

  const messages = useIntlMessages()

  const tel =
    'tel:' + messages.Footer.contact.description.replace(/[\s()]+/g, '')

  if (isAdmin) return

  return (
    <footer className={styles.footer}>
      <div ref={ref} className={styles.observer} />
      <div className='container'>
        <div className={styles.top}>
          <div className={styles.about}>
            <Text
              located='layout'
              size='heading'
              weight={700}
              color='primary'
              className={styles.about_title}
              tKey='Footer.about.title'
            />
            <div className={styles.about_description}>
              <Text
                located='layout'
                size='subheading'
                weight={400}
                color='primary'
                tKey='Footer.about.description'
              />
              <Text
                located='layout'
                size='subheading'
                weight={400}
                color='primary'
                tKey='Footer.about.goal'
              />
            </div>
          </div>
          <div className={styles.schedule}>
            <Text
              located='layout'
              size='heading'
              weight={700}
              color='primary'
              className={styles.schedule_title}
              tKey='Footer.schedule.title'
            />
            <div className={styles.schedule_description}>
              {(
                Object.keys(messages.Footer.schedule.description) as Array<
                  keyof IntlMessages['Footer']['schedule']['description']
                >
              ).map(key => (
                <div key={key} className={styles.schedule_description_item}>
                  <Text
                    located='layout'
                    size='subheading'
                    weight={400}
                    color='primary'
                    tKey={`Footer.schedule.description.${key}.title`}
                  />
                  <Text
                    located='layout'
                    size='subheading'
                    weight={400}
                    color='primary'
                    tKey={`Footer.schedule.description.${key}.description`}
                  />
                </div>
              ))}
            </div>
          </div>
          <a
            href='https://maps.app.goo.gl/V8r3AWrFcBmmgLVU7'
            target='_blank'
            className={styles.map}
          >
            {messages.Footer.map && (
              <Image
                src={messages.Footer.map}
                alt=''
                fill
                draggable={false}
                quality={100}
              />
            )}
          </a>
        </div>
        <div className={styles.bottom}>
          <div>
            <Text
              located='layout'
              size='subheading'
              weight={400}
              color='primary'
              className={styles.copyright}
              tKey='Footer.copyright'
              tRich
            />
            <div className={styles.contact}>
              <Text
                located='layout'
                size='subheading'
                weight={700}
                color='primary'
                className={styles.contact_title}
                tKey='Footer.contact.title'
              />
              <a href={tel}>
                <Text
                  located='layout'
                  size='subheading'
                  weight={400}
                  color='primary'
                  className={styles.contact_description}
                  tKey='Footer.contact.description'
                />
              </a>
            </div>
          </div>
          <div className={styles.address}>
            <Text
              located='layout'
              size='subheading'
              weight={700}
              color='primary'
              className={styles.address_title}
              tKey='Footer.address.title'
            />
            <Text
              located='layout'
              size='subheading'
              weight={400}
              color='primary'
              tKey='Footer.address.description'
            />
          </div>
          <div className={styles.text}>
            <Text
              located='layout'
              size='subheading'
              weight={400}
              color='primary'
              underline
              onClick={() => window.scrollTo(0, 0)}
              tKey='Footer.action'
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
