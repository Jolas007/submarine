import z from "zod";

export const itemSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  size: z.enum(["XS", "S", "M", "L", "XL"]),
  description: z.string(),
  categoryId: z.number(),
  image: z.string(),
});

export type Item = z.infer<typeof itemSchema>;
