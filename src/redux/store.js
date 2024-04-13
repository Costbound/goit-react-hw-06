import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
// All this imports to avoid error
// https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
}

const persistedContactsReducer= persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersReducer
    },
    // Set ignore all redux-presist actions
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)


