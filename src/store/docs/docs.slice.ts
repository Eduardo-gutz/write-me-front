import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from '@/interfaces/services/auth.interface'
import { DocList } from '@/interfaces/services/docs.interface'

const initialState: DocList[] = []

export const docsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDocsList: (state, action: PayloadAction<DocList[]>) => {
      return [...action.payload]
    },
    removeDocsList: (state, action: PayloadAction<DocList[]>) => {
      return []
    },
  },
})

export const { setDocsList, removeDocsList } = docsSlice.actions

export default docsSlice.reducer