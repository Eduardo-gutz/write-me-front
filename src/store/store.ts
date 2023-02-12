import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth.slice'
import docsReducer from './docs/docs.slice'
import currentReducer from './currentDocs/currentDocs.slice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  authReducer,
  docsReducer,
  currentReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch