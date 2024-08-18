'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'

import Locale from '@/layout/header/locale/Locale'
import AppointmentButton from '@/layout/header/modals/appointment/appointment-button/AppointmentButton'

import Text from '@/ui/text/Text'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'
import { useScrollTop } from '@/hooks/useScrollTop'
import { useSectionLocation } from '@/hooks/useSectionLocation'
import { useSections } from '@/hooks/useSections'

import styles from './Menu.module.scss'

export default function Menu() {
  const messages = useIntlMessages()

  const { sections } = useSections()

  const { scrollTop } = useScrollTop()

  const { sectionLocation } = useSectionLocation()

  const {
    sectionInView,
    setSectionInView,
    isMenuOpen,
    setIsMenuOpen,
    isModalOpen,
    setIsModalOpen
  } = useStore()

  useEffect(() => {
    if (isMenuOpen && isModalOpen) setIsModalOpen({})
  }, [isMenuOpen])

  useEffect(
    () =>
      sections.forEach(
        ({ id: key, offsetHeight }) =>
          scrollTop >= sectionLocation[key] &&
          scrollTop < sectionLocation[key] + offsetHeight &&
          setSectionInView({ [key]: true })
      ),
    [sections, scrollTop, sectionLocation]
  )

  return (
    <>
      {isMenuOpen && (
        <style jsx global>
          {`
            body {
              overflow-y: hidden;
            }
          `}
        </style>
      )}
      <div
        className={clsx(styles.body, {
          [styles.body_active]: isMenuOpen
        })}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          className={clsx(styles.menu, {
            [styles.menu_active]: isMenuOpen
          })}
          onClick={event => event.stopPropagation()}
        >
          <div className={styles.top}>
            <div className={styles.logo}>
              <Image
                src='/header/logo.svg'
                alt=''
                fill
                draggable={false}
                quality={100}
              />
            </div>
            <div className={styles.close} onClick={() => setIsMenuOpen(false)}>
              <Image
                src='/header/cross.svg'
                alt=''
                fill
                draggable={false}
                quality={100}
              />
            </div>
          </div>
          <ul className={styles.list}>
            {(
              Object.keys(messages.Sections) as Array<
                keyof IntlMessages['Sections']
              >
            ).map(key => (
              <li
                key={key}
                onClick={() => {
                  window.scrollTo(0, sectionLocation[key])
                  setIsMenuOpen(false)
                }}
                className={clsx(styles.item, {
                  [styles.item_active]: sectionInView[key]
                })}
              >
                <Text
                  located='layout'
                  size='body'
                  weight={sectionInView[key] ? 500 : 400}
                  color='primary'
                  translucent={sectionInView[key] ? false : true}
                  clickable
                  className={styles.text}
                  tKey={`Sections.${key}.title`}
                  tRich
                />
              </li>
            ))}
          </ul>
          <Locale id='menu' className={styles.locale} />
          <AppointmentButton className={styles.button} />
        </nav>
      </div>
    </>
  )
}
