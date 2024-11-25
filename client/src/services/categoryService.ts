import type { AxiosInstance } from "axios";
import { ZodError } from "zod";
import axiosInstance from "./client";
import { categorySchema } from "../types/category";

class CategoryService {
  constructor(private client: AxiosInstance) {}

  async getAllCategories() {
    try {
      const res = await this.client.get("/categories");
      if (res.status !== 200) throw new Error("Error fetching posts");
      return categorySchema.array().parse(res.data);
    } catch (e) {
      if (e instanceof ZodError) {
        console.log("ZodError issues:", e.issues);
      } else {
        console.error(e);
      }
      return Promise.reject(new Error("Error fetching posts"));
    }
  }

  async getCategoryById(id: number) {
    try {
      const res = await this.client.get(`/categories/${id}`);
      if (res.status !== 200) throw new Error("Error fetching posts");
      return categorySchema.parse(res.data);
    } catch (e) {
      if (e instanceof ZodError) {
        console.log("ZodError issues:", e.issues);
      } else {
        console.error(e);
      }
      return Promise.reject(new Error("Error fetching posts"));
    }
  }
}

const categoryService = new CategoryService(axiosInstance);

export default categoryService;
