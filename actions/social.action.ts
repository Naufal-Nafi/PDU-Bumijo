"use server";

import { revalidatePath } from "next/cache";
import { socialService } from "@/services/social.service";
import { createSocialSchema, updateSocialSchema } from "@/validations/social.schema";
import type { ActionResponse } from "@/lib/types";
import type { Social } from "@/db/schema";


export async function createSocialAction(
  _prevState: ActionResponse<Social> | null,
  formData: FormData
): Promise<ActionResponse<Social>> {
  const parsed = createSocialSchema.safeParse({
    app: formData.get("app"),
    url: formData.get("url"),
  });
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message ?? "Data tidak valid" };
  }

  try {
    const data = await socialService.createSocial(parsed.data);
    revalidatePath("/admin/kontak");
    revalidatePath('/[locale]/kontak', 'page');
    return { success: true, data };
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "Gagal tambah social media" };
  }
}

export async function updateSocialAction(
  _prevState: ActionResponse<Social> | null,
  formData: FormData
): Promise<ActionResponse<Social>> {
  const parsed = updateSocialSchema.safeParse({
    id: formData.get("id"),
    app: formData.get("app"),
    url: formData.get("url"),
  });
  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message ?? "Data tidak valid" };
  }

  try {
    const data = await socialService.updateSocial(parsed.data);
    revalidatePath("/admin/kontak");
    revalidatePath('/[locale]/kontak', 'page');
    return { success: true, data };
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "Gagal update social media" };
  }
}

export async function deleteSocialAction(id: number): Promise<ActionResponse<null>> {
  try {
    await socialService.deleteSocial(id);
    revalidatePath("/admin/kontak");
    revalidatePath('/[locale]/kontak', 'page');
    return { success: true, data: null };
  } catch (err) {
    return { success: false, message: err instanceof Error ? err.message : "Gagal hapus social media" };
  }
}