import clsx from 'clsx'

import { useStore } from '@/store'

import type { ModalProps } from './modal.interface'

export default function Modal({ id, isDisabled, children }: ModalProps) {
  const { isModalOpen, setIsModalOpen } = useStore()

  const isActive = isDisabled ? false : isModalOpen[id]

  return (
    <>
      {isActive && (
        <style jsx global>
          {`
            body {
              overflow-y: hidden;
            }
          `}
        </style>
      )}
      <div
        className={clsx('modal_body', {
          ['modal_body_active']: isActive
        })}
        onClick={() => setIsModalOpen({ [id]: false })}
      >
        <div
          className={clsx('modal', 'container', {
            ['modal_appointment']: id === 'Appointment'
          })}
        >
          <div
            className={clsx('modal_content', {
              ['modal_content_active']: isActive,
              ['modal_content_appointment']: id === 'Appointment'
            })}
            onClick={event => event.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
