import { z } from "zod";

export const createLayananSchema = z.object({
  kategoriId: z.coerce.number().int().positive("Kategori wajib dipilih"),
  title: z.string().min(1, "Title wajib diisi").max(255),
  title_eng: z.string().max(255).optional(),
  description: z.string(),
  description_eng: z.string().optional(),
  image: z.string().optional(),
});

export const updateLayananSchema = createLayananSchema.partial().extend({
  id: z.coerce.number().int().positive(),
});

export type CreateLayananInput = z.infer<typeof createLayananSchema>;
export type UpdateLayananInput = z.infer<typeof updateLayananSchema>;