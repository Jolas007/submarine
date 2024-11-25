import { createAsyncThunk } from "@reduxjs/toolkit";
import categoryService from "../../../services/categoryService";
import type { CategoryT } from "../../../types/category";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async () => {
    return categoryService.getAllCategories();
  }
);

export const getCategoryById = createAsyncThunk(
  "category/getCategoryById",
  async (id: CategoryT["id"]) => {
    return categoryService.getCategoryById(id);
  }
);
