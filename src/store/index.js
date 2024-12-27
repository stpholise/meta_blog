import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage/session'

import AppSlice from './AppSlice'

const persistConfig = {
    key: 'meta_blogs',
    storage,
}

const rootReducer = combineReducers({
    app: AppSlice,
})

export const store =  configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck:  {
                ignoredActions:['persist/PERSIST', 'persist/REHYDRATE']
            }
        })
    }
})

export const persistor = persistStore(store)
