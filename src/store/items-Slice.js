import { createSlice } from "@reduxjs/toolkit";
import { createRandomId, findAvaliableId } from "../utils";

const initialData = [
  {
    id: createRandomId(),
    name: "Pencil",
    description: "Good for writeing and some other things",
    price: 100,
    inStock: true,
  },
  {
    id: createRandomId(),
    name: "Ball",
    description: "Good for playing ball",
    price: 10,
    inStock: true,
  },
  {
    id: createRandomId(),
    name: "Secret Item",
    description: "Good for who know what",
    price: 420,
    inStock: false,
  },
];

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    data: initialData,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;   
      state.data.push({ id: findAvaliableId(state.data), ...newItem });
    },
    removeItem(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }
    },
    editItem(state, action){
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }

      const newItem = action.payload.data;
      state.data.push({ id: action.payload.id, ...newItem });
    },
  },
});

export default itemsSlice;
