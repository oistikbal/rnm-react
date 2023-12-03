import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './PageSlice.js'
import rnmReducer from './RnMSlice.js'

export const store = configureStore({
  reducer: {
    page: pageReducer,
    rnm: rnmReducer
  },
})