import { configureStore } from "@reduxjs/toolkit";
import purchasesSlice from "./purchases-Slice";
import customersSlice from "./customers-Slice";
import overlaySlice from "./overlay-Slice";
import itemsSlice from "./items-Slice";

const store = configureStore({
  reducer: {
    customers: customersSlice.reducer,
    purchases: purchasesSlice.reducer,
    overlay: overlaySlice.reducer,
    items: itemsSlice.reducer,
  },
});

export const customersActions = customersSlice.actions;
export const purchasesActions = purchasesSlice.actions;
export const overlayActions = overlaySlice.actions;
export const itemsActions = itemsSlice.actions;

export default store;
