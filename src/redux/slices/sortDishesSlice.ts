import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   sort: {
      id: 1,
      name: "не выбрано",
      sortProperty: "",
   },
};

export type SortPropertyType = typeof initialState.sort;

export const sortDishesSlice = createSlice({
   name: "campus",
   initialState,
   reducers: {
      setSortValue: (state, action: PayloadAction<SortPropertyType>) => {
         state.sort = action.payload;
      },
   },
});

export const { setSortValue } = sortDishesSlice.actions;

export default sortDishesSlice.reducer;
