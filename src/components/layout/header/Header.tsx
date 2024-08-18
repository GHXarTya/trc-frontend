'use client'

import clsx from 'clsx'
import Image from 'next/image'

import { usePathname, useRouter } from '@/config/helpers/locale.helper'
import { ADMIN_PAGE, HOME_PAGE } from '@/config/routes.config'

import { useStore } from '@/store'

import { useScrollTop } from '@/hooks/useScrollTop'

import styles from './Header.module.scss'
import Admin from './admin/Admin'
import Locale from './locale/Locale'
import Menu from './menu/Menu'
import Modals from './modals'
import AppointmentButton from './modals/appointment/appointment-button/AppointmentButton'
import NavArrow from './nav-arrow/NavArrow'

export default function Header() {
  const { push } = useRouter()
  const pathname = usePathname()
  const isAdmin = pathname === ADMIN_PAGE

  const { setIsMenuOpen, isFooterInView } = useStore()

  const { scrollTop } = useScrollTop()

  return (
    <>
      <Menu />
      <header
        className={clsx(styles.header, {
          [styles.header_scroll]: scrollTop > 50,
          [styles.header_admin]: isAdmin
        })}
      >
        <div className='container'>
          <div className={styles.inner}>
            <div className={styles.left}>
              {!isAdmin && (
                <div
                  className={styles.burger}
                  onClick={() => setIsMenuOpen(true)}
                >
                  <div />
                  <div />
                  <div />
                </div>
              )}
              <div onClick={() => push(HOME_PAGE)} className={styles.logo}>
                <Image
                  src='/header/logo.svg'
                  alt=''
                  fill
                  draggable={false}
                  quality={100}
                />
              </div>
              {!isAdmin && <Admin />}
            </div>
            <div className={styles.right}>
              <Locale id='header' className={styles.locale} />
              {!isAdmin && <AppointmentButton />}
            </div>
            <Modals />
          </div>
        </div>
      </header>
      <NavArrow isActive={scrollTop > 50 && !isFooterInView} />
    </>
  )
}
