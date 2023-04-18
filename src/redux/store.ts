import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './slices/campusSlice';
import sortDishesReducer from './slices/sortDishesSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    dishes: sortDishesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch