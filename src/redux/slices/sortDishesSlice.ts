import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   dishCategory: 0,
   sort: {
      name: "цене (возр.)",
      sortProperty: "priceAscending",
   },
};

export type SortPropertyType = typeof initialState.sort;

export const counterSlice = createSlice({
   name: "campus",
   initialState,
   reducers: {
      setSortValue: (state, action: PayloadAction<SortPropertyType>) => {
         state.sort = action.payload;
      },
      setDishCategory: (state, action: PayloadAction<number>) => {
         state.dishCategory = action.payload;
      },
   },
});

export const { setSortValue, setDishCategory } = counterSlice.actions;

export default counterSlice.reducer;
