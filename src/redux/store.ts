import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './slices/searchSlice';
import sortDishesReducer from './slices/sortDishesSlice';
import authModalsReducer from './slices/authModalsSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dishes: sortDishesReducer,
    authModals: authModalsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch