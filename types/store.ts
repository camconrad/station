import { IAuth } from '@/lib/redux/auth/auth'
import { ILayoutType } from '@/lib/redux/slices/layout'
import { IthemeType } from '@/lib/redux/slices/theme'

export interface AppStore {
  auth?: IAuth
  theme?: IthemeType
  layout?: ILayoutType
}
