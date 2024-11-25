import { z } from "zod";
export const categorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type CategoryT = z.infer<typeof categorySchema>;

export type CategorySlice = {
  categories: CategoryT[];
};
