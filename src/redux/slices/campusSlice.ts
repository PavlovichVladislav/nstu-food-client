import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  campus: 0,
}

export const counterSlice = createSlice({
  name: 'campus',
  initialState,
  reducers: {
    setCampus: (state, action: PayloadAction<number>) => {
      state.campus = action.payload
    },
  },
})

export const { setCampus } = counterSlice.actions

export default counterSlice.reducer