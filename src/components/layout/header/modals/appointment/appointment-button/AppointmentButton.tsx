import clsx from 'clsx'

import Button from '@/ui/button/Button'

import { useStore } from '@/store'

import styles from './AppointmentButton.module.scss'
import type { AppointmentButtonProps } from './appointment-button.interface'

export default function AppointmentButton({
  className
}: AppointmentButtonProps) {
  const { isMenuOpen, setIsMenuOpen, isModalOpen, setIsModalOpen } = useStore()

  return (
    <Button
      located='layout'
      size='body'
      weight={500}
      color='primary'
      className={clsx(styles.button, className)}
      disabled={isModalOpen['Appointment']}
      onClick={() => {
        isMenuOpen && setIsMenuOpen(false)
        setIsModalOpen({ ['Appointment']: true })
      }}
      tKey='Header.appointment.action.book.default'
    />
  )
}
