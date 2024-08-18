import type { Store } from '@/types/store.interface'

export interface LocaleProps {
  id: keyof Store['isLocaleDropdownOpen']
  className: string
}
