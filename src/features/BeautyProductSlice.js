import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  beautyProductsData: [],
  loading: false,
  error: null,
};

const BeautyProductSlice = createSlice({
  name: "beautyProduct",
  initialState,
  reducers: {
    fetchBeautyDataLoading:(state)=> {
      state.loading = true;
      state.error = null;
    },
    fetchBeautyDataSuccess:(state, action)=> {
      state.loading = false;
      state.beautyProductsData = action.payload;
    },
    fetchBeautyDataFailure:(state, action)=> {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  fetchBeautyDataLoading,
  fetchBeautyDataSuccess,
  fetchBeautyDataFailure,
} = BeautyProductSlice.actions;

export default BeautyProductSlice.reducer;
