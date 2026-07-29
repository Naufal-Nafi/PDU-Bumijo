import { z } from "zod";

export const createSocialSchema = z.object({
  app: z.string().min(1, "App wajib diisi").max(100),
  url: z.string().url("URL tidak valid").max(255),
});

export const updateSocialSchema = createSocialSchema.partial().extend({
  id: z.coerce.number().int().positive(),
});

export type CreateSocialInput = z.infer<typeof createSocialSchema>;
export type UpdateSocialInput = z.infer<typeof updateSocialSchema>;