import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/interfaces/services/auth.interface'

const initialState: AuthState = {
  username: '',
  id: '',
  email: '',
  lastName: '',
  name: '',
  accessToken: '',
  refreshToken: '',
  isLogged: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRedux: (state, action: PayloadAction<AuthState>) => {
      localStorage.setItem('access_token', action.payload.accessToken)
      localStorage.setItem('refresh_token', action.payload.refreshToken)
      return {
        ...action.payload
      }
    },
    logoutRedux: (state) => {
      return {
        ...initialState
      }
    },
  },
})

export const { loginRedux, logoutRedux } = authSlice.actions

export default authSlice.reducer