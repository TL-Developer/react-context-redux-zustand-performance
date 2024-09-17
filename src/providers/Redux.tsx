import { configureStore, createSlice } from "@reduxjs/toolkit";
import { INITIAL_VALUE } from "./Context";

const storeSlice = createSlice({
  name: 'store',
  initialState: INITIAL_VALUE,
  reducers: {
    increment: (state) => {
      state.count.value += 1;
    },
  },
});

export const { increment } = storeSlice.actions;

const store = configureStore({
  reducer: storeSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;