import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './slices/searchSlice';
import sortDishesReducer from './slices/sortDishesSlice';
import authModalsReducer from './slices/authModalsSlice';
import restuarantReducer from './slices/restuarantSlice';
import menuReducer from './slices/menuSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    dishes: sortDishesReducer,
    authModals: authModalsReducer,
    restuarants: restuarantReducer,
    menu: menuReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch