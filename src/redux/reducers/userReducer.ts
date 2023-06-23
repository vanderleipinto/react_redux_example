import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    name: "Vanderlei",
    age: 90,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

// As ações são automaticamente geradas pelo createSlice
export const { setName, setAge } = slice.actions;

// O reducer é gerado automaticamente pelo createSlice
export default slice.reducer;
