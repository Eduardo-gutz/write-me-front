import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DocListStored } from '@/interfaces/services/docs.interface'

const initialState: DocListStored[] = []

export const docsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDocsList: (state, action: PayloadAction<DocListStored[]>) => {
      return [...action.payload]
    },
    removeDocsList: (state, action: PayloadAction<DocListStored[]>) => {
      return []
    },
  },
})

export const { setDocsList, removeDocsList } = docsSlice.actions

export default docsSlice.reducer