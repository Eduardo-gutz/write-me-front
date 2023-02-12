import { DocDTO } from "@/interfaces/services/docs.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: DocDTO[] = [];

const currentDocsSlice = createSlice({
  name: "currentDocs",
  initialState,
  reducers: {
    addDoc: (state, action: PayloadAction<DocDTO>) => {
      return [...state, action.payload];
    },
    setCurrentDocsList: (state, action: PayloadAction<DocDTO[]>) => {
      return [...action.payload]
    },
    removeDoc: (state, action: PayloadAction<DocDTO>) => {
      const stateDocs = state.filter((doc) => doc.id !== action.payload.id);
      return [...stateDocs];
    },
  },
});

export const { addDoc, setCurrentDocsList, removeDoc } = currentDocsSlice.actions

export default currentDocsSlice.reducer