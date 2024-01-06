import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BeautyProductReducer from "../features/BeautyProductSlice";

const rootReducer = combineReducers({
  //   clothingProducts: clothingProductsReducer,
  BeautyProductReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
