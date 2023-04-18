import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  sort: {
    name: 'цене (возр.)',
    sortProperty: 'priceAscending'
  },
}

export type SortPropertyType = typeof initialState.sort;

export const counterSlice = createSlice({
  name: 'campus',
  initialState,
  reducers: {
    setSortValue: (state, action: PayloadAction<SortPropertyType>) => {
      state.sort = action.payload
    },
  },
})

export const { setSortValue } = counterSlice.actions

export default counterSlice.reducer