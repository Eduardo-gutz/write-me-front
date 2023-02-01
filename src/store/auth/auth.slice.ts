import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/interfaces/services/auth.interface'

const initialState: AuthState = {
  username: '',
  id: '',
  email: '',
  accessToken: '',
  refreshToken: '',
  isLogged: false
}

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRedux: (state, action: PayloadAction<AuthState>) => {
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

export const { loginRedux, logoutRedux } = counterSlice.actions

export default counterSlice.reducer