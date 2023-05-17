import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { restuarantsApi } from "./../../api/RestuarantApi";

import { IRestuarant } from "./../../models/restuarant";
import { itemsInPage } from "../../utils/constants";

interface params {
   campus?: number;
   page: number;
   limit: number;
   searchValue?: string;
}

export const fetchRestuarants = createAsyncThunk(
   "restuarant/fetchRestuarants",
   async ({ campus, page, limit, searchValue }: params) => {
      const { count, rows: restuarants } = await restuarantsApi.getRestuarants(
         campus,
         page,
         limit,
         searchValue
      );

      return { count, restuarants };
   }
);

interface RestuarantState {
   restuarants: IRestuarant[];
   pageCount: number;
   loading: "idle" | "loading" | "error";
}

const initialState: RestuarantState = {
   restuarants: [],
   pageCount: 1,
   loading: "idle",
};

export const restuarantSlice = createSlice({
   name: "restuarant",
   initialState,
   reducers: {
      setRestuarants: (state, action: PayloadAction<IRestuarant[]>) => {
         state.restuarants = action.payload;
      },
      setPageCount: (state, action: PayloadAction<number>) => {
         state.pageCount = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchRestuarants.pending, (state, action) => {
            state.loading = "loading";
         })
         .addCase(fetchRestuarants.fulfilled, (state, action) => {
            state.restuarants = action.payload.restuarants;

            const totalPages = Math.ceil(action.payload.count / itemsInPage);

            state.pageCount = totalPages;
            state.loading = "idle";
         })
         .addCase(fetchRestuarants.rejected, (state, action) => {
            state.loading = "error";
         })
   },
});

export const { setRestuarants } = restuarantSlice.actions;

export default restuarantSlice.reducer;
