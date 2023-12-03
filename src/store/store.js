import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './PageSlice.js'

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
})