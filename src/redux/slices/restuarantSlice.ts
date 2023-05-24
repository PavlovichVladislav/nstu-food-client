import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { restuarantsApi } from "./../../api/RestuarantApi";

import { IRestuarant } from "./../../models/restuarant";
import { itemsInPage } from "../../utils/constants";

interface fetchRestParams {
   campus?: number;
   page: number;
   limit: number;
   searchValue?: string;
}

export const fetchRestuarants = createAsyncThunk(
   "restuarant/fetchRestuarants",
   async ({ campus, page, limit, searchValue }: fetchRestParams) => {
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
   loading: "loading",
};

export const restuarantSlice = createSlice({
   name: "restuarant",
   initialState,
   reducers: {
      setRestuarants: (state, action: PayloadAction<IRestuarant[]>) => {
         state.restuarants = action.payload;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchRestuarants.pending, (state) => {
            state.loading = "loading";
         })
         .addCase(fetchRestuarants.fulfilled, (state, action) => {
            const totalPages = Math.ceil(action.payload.count / itemsInPage);

            state.pageCount = totalPages;
            state.restuarants = action.payload.restuarants;
            state.loading = "idle";
         })
         .addCase(fetchRestuarants.rejected, (state) => {
            state.loading = "error";
         })
   },
});

export const { setRestuarants } = restuarantSlice.actions;

export default restuarantSlice.reducer;
