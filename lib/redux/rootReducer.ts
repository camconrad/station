import authReducer from './auth/auth'
import themeReducer from './slices/theme'
import layoutReducer from './slices/layout'

const rootReducer = {
  auth: authReducer,
  theme: themeReducer,
  layout: layoutReducer,
}

export default rootReducer
