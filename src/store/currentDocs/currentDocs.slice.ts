import { DocDTO, DocStored } from "@/interfaces/services/docs.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: DocStored[] = [];

const currentDocsSlice = createSlice({
  name: "currentDocs",
  initialState,
  reducers: {
    addDoc: (state, action: PayloadAction<DocStored>) => {
      return [...state, action.payload];
    },
    setCurrentDocsList: (state, action: PayloadAction<DocStored[]>) => {
      return [...action.payload]
    },
    removeDoc: (state, action: PayloadAction<DocStored>) => {
      const stateDocs = state.filter((doc) => doc.id !== action.payload.id);
      return [...stateDocs];
    },
  },
});

export const { addDoc, setCurrentDocsList, removeDoc } = currentDocsSlice.actions

export default currentDocsSlice.reducer