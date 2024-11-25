import { createSlice } from "@reduxjs/toolkit";
import { CategorySlice } from "../../../types/category";
import { getCategories, getCategoryById } from "./thunk";

// Define the initial state using that type
const initialState: CategorySlice = {
  categories: [],
};

export const categoryReducer = createSlice({
  name: "category",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getCategoryById.fulfilled, (state, action) => {
      state.categories.find((category) => category.id === action.payload.id);
    });
  },
});

export default categoryReducer.reducer;
