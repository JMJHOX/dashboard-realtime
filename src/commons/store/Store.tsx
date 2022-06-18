import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducers/DataReducer';


export const store = configureStore({
  reducer: {
    dataState : dataReducer
  }
})

export type RootState = ReturnType<typeof store.getState>