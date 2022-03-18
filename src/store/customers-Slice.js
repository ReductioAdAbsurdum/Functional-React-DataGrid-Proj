import { createSlice } from "@reduxjs/toolkit";
import { createRandomId, findAvaliableId } from "../utils";

const initialData = [
  {
    id: createRandomId(),
    fullName: "Marko Markovic",
    address: "Safarikova 1 Novi Sad",
    phone: "060 49 89 884",
    email: "sergio@gmail.com",
  },
  {
    id: createRandomId(),
    fullName: "Srdjan Stankovic",
    address: "Gagarinova 4 Novi Sad",
    phone: "062 39 89 884",
    email: "mile@gmail.com",
  },
  {
    id: createRandomId(),
    fullName: "Darko Simic",
    address: "Pupinova 4 Novi Sad",
    phone: "061 49 83 822",
    email: "lepika@gmail.com",
  },
  {
    id: createRandomId(),
    fullName: "Nebojsa Markovic",
    address: "Vase Ladackog BB Novi Sad",
    phone: "064 42 83 8832",
    email: "lude@gmail.com",
  },
];

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    data: initialData,
  },
  reducers: {
    addCustomer(state, action) {
      const newCustomer = action.payload;
      state.data.push({ id: findAvaliableId(state.data), ...newCustomer });
    },
    removeCustomer(state, action) {
      const index = state.data.findIndex(
        (customer) => customer.id === action.payload
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }
    },
    editCustomer(state, action){
      const index = state.data.findIndex(
        (customer) => customer.id === action.payload.id
      );
      if (index > -1) {
        state.data.splice(index, 1);
      }

      const newCustomer = action.payload.data;
      state.data.push({ id: action.payload.id, ...newCustomer });
    }
  },
});

export default customersSlice;
