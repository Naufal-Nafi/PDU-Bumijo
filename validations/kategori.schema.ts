import { z } from "zod";

export const createKategoriSchema = z.object({
  title: z.string().min(1, "Title wajib diisi").max(255),
});

export const updateKategoriSchema = createKategoriSchema.partial().extend({
  id: z.coerce.number().int().positive(),
});

export type CreateKategoriInput = z.infer<typeof createKategoriSchema>;
export type UpdateKategoriInput = z.infer<typeof updateKategoriSchema>;