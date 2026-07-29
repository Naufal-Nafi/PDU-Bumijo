import { z } from "zod";

export const createProdukSchema = z.object({
  name: z.string().min(1, "Name wajib diisi").max(255),
  name_eng: z.string().max(255).optional(),
  price: z.coerce.number().int().nonnegative("Price tidak boleh negatif"),
  description: z.string(),
  description_eng: z.string().optional(),
  image: z.string().optional(),
});

export const updateProdukSchema = createProdukSchema.partial().extend({
  id: z.coerce.number().int().positive(),
});

export type CreateProdukInput = z.infer<typeof createProdukSchema>;
export type UpdateProdukInput = z.infer<typeof updateProdukSchema>;