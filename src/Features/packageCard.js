/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const packCardSlice = createSlice({
  name: "packCard",
  initialState: {
    packCard: null,
  },
  reducers: {
    setItemCard: (state, action) => {
      state.packCard = action.payload;
    },
    removeItemCard: (state) => {
      state.packCard = null;
    },
  },
});

export const { setItemCard, removeItemCard } = packCardSlice.actions;

export const selectItem = (state) => state.item.packCard;

export default packCardSlice.reducer;
