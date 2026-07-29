import { z } from "zod";

export const createKontakSchema = z.object({
  phone: z.string().min(1, "Phone wajib diisi").max(20),
  email: z.string().email("Email tidak valid").max(255),
  appUrl: z.string().url("URL tidak valid").optional(),
});

export const updateKontakSchema = createKontakSchema.partial().extend({
  id: z.coerce.number().int().positive(),
});

export type CreateKontakInput = z.infer<typeof createKontakSchema>;
export type UpdateKontakInput = z.infer<typeof updateKontakSchema>;