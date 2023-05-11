import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice';
import sortDishesReducer from './slices/sortDishesSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dishes: sortDishesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch