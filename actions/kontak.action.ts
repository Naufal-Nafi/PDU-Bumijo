"use server";

import { revalidatePath } from "next/cache";
import { kontakService } from "@/services/kontak.service";
import { updateKontakSchema } from "@/validations/kontak.schema";
import type { ActionResponse } from "@/lib/types";
import type { Kontak } from "@/db/schema";

export async function updateKontakAction(
  _prevState: ActionResponse<Kontak> | null,
  formData: FormData
): Promise<ActionResponse<Kontak>> {
  const raw = {
    id: formData.get("id"),
    phone: formData.get("phone") || undefined,
    email: formData.get("email") || undefined,
    appUrl: formData.get("appUrl") || undefined, // string kosong -> undefined (field lain tidak berubah)
  };

  const parsed = updateKontakSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message ?? "Data tidak valid" };
  }

  try {
    const data = await kontakService.updateKontak(parsed.data);
    revalidatePath("/admin/kontak");
    return { success: true, data };
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "Gagal update kontak" };
  }
}