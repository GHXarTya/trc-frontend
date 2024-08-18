import type { Store } from '@/types/store.interface'

export interface ModalProps {
  id: keyof Store['isModalOpen']
  isDisabled?: boolean
  children: React.ReactNode
}
