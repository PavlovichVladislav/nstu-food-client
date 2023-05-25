import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { restuarantsApi } from "./../../api/RestuarantApi";
import { IMenuItem } from "../../models/menuItem";

// import { IRestuarant } from "./../../models/restuarant";
import { itemsInPage } from "../../utils/constants";

interface fetchMenuParams {
   id: string;
   sort: string;
   dishType: string | null;
   search: string;
   page?: number;
   limit?: number;
}

export const fetchMenu = createAsyncThunk(
   "menu/fetchMenus",
   async ({ id, sort, dishType, search, page, limit }: fetchMenuParams) => {
      const { dishes, restuarantName, count } = await restuarantsApi.getRestuarntMenu(
         id,
         sort,
         dishType,
         search,
         page,
         limit
      );

      return { dishes, restuarantName, count };
   }
);

interface MenuState {
   menuItems: IMenuItem[];
   restuarantName: string;
   pageCount: number;
   loading: "idle" | "loading" | "error";
}

const initialState: MenuState = {
   menuItems: [],
   restuarantName: '',
   pageCount: 1,
   loading: "loading",
};

export const menuSlice = createSlice({
   name: "menu",
   initialState,
   reducers: {
      setMenu: (state, action: PayloadAction<IMenuItem[]>) => {
         state.menuItems = action.payload;
      }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchMenu.pending, (state) => {
            state.loading = "loading";
            state.restuarantName = '';
            state.pageCount = 1;
         })
         .addCase(fetchMenu.fulfilled, (state, action) => {
            const totalPages = Math.ceil(action.payload.count / itemsInPage);
            
            state.menuItems = action.payload.dishes;
            state.restuarantName = action.payload.restuarantName;
            state.pageCount = totalPages;
            state.loading = "idle";
         })
         .addCase(fetchMenu.rejected, (state) => {
            state.loading = "error";
         });
   },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
