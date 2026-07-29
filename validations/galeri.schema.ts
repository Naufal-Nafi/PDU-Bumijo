import { z } from "zod";

export const createGaleriSchema = z.object({
  src: z.string().min(1, "Src wajib diisi"),
  alt: z.string().max(255).optional(),
});

export const updateGaleriSchema = createGaleriSchema.partial().extend({
  id: z.coerce.number().int().positive(),
});

export type CreateGaleriInput = z.infer<typeof createGaleriSchema>;
export type UpdateGaleriInput = z.infer<typeof updateGaleriSchema>;