import { createSlice } from "@reduxjs/toolkit";
import { findAvaliableId } from "../utils";

const initialData = [];

const purchasesSlice = createSlice({
  name: "purchases",
  initialState: {
    data: initialData,
  },
  reducers: {
    addPurchase(state, action) {
      const newPurchase = action.payload;
      state.data.push({ id: findAvaliableId(state.data), ...newPurchase });
    },
    removePurchase(state, action) {
      const index = state.data.findIndex(
        (purchase) => purchase.id === action.payload
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }
    },
    editPurchase(state, action) {
      const index = state.data.findIndex(
        (purchase) => purchase.id === action.payload.id
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }

      const newPurchase = action.payload.data;
      state.data.push({ id: action.payload.id, ...newPurchase });
    },
  },
});

export default purchasesSlice;
