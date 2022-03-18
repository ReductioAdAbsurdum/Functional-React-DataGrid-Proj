import { createSlice } from "@reduxjs/toolkit";


const overlaySlice = createSlice({
  name: "overlay",
  initialState: {
    isShown: false,
    render: <div>Nothing to be shown</div>,
  },
  reducers: {
    closeOverlay(state) {
      state.isShown = false;
    },
    showOverlay(state) {
      state.isShown = true;
    },
    setRender(state, action) {
      state.render = action.payload;
    },
  },
});

export default overlaySlice;
