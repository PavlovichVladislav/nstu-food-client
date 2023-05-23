import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   isRegOpen: false,
   isAuthOpen: false,
};

export const authModalsSlice = createSlice({
   name: "authModals",
   initialState,
   reducers: {
      setRegOpen: (state, action: PayloadAction<boolean>) => {
         state.isRegOpen = action.payload;
      },
      setAuthOpen: (state, action: PayloadAction<boolean>) => {
         state.isAuthOpen = action.payload;
      },
   },
});

export const { setRegOpen, setAuthOpen } = authModalsSlice.actions;

export default authModalsSlice.reducer;
