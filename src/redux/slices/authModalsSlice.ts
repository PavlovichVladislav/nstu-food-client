import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   isRegOpen: false,
};

export const authModalsSlice = createSlice({
   name: "authModals",
   initialState,
   reducers: {
      setRegOpen: (state, action: PayloadAction<boolean>) => {
         state.isRegOpen = action.payload;
      },
   },
});

export const { setRegOpen } = authModalsSlice.actions;

export default authModalsSlice.reducer;
