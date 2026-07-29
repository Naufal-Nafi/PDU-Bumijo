"use server";

import { revalidatePath } from "next/cache";
import { kategoriService } from "@/services/kategori.service";
import { createKategoriSchema, updateKategoriSchema } from "@/validations/kategori.schema";
import type { ActionResponse } from "@/lib/types";
import type { Kategori } from "@/db/schema";

export async function createKategoriAction(
  _prevState: unknown,
  formData: FormData
): Promise<ActionResponse<Kategori | null>> {
  const parsed = createKategoriSchema.safeParse({ title: formData.get("title") });

  if (!parsed.success) {
    return { success: false, message: "Data tidak valid", errors: parsed.error.flatten().fieldErrors };
  }

  try {
    const data = await kategoriService.create(parsed.data);
    revalidatePath("/layanan");
    return { success: true, data, message: "Kategori berhasil ditambahkan" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menambahkan kategori" };
  }
}

export async function updateKategoriAction(
  _prevState: unknown,
  formData: FormData
): Promise<ActionResponse<Kategori | null>> {
  const parsed = updateKategoriSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
  });

  if (!parsed.success) {
    return { success: false, message: "Data tidak valid", errors: parsed.error.flatten().fieldErrors };
  }

  try {
    const data = await kategoriService.update(parsed.data);
    revalidatePath("/layanan");
    return { success: true, data, message: "Kategori berhasil diperbarui" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal memperbarui kategori" };
  }
}

export async function deleteKategoriAction(id: number): Promise<ActionResponse<null>> {
  try {
    await kategoriService.delete(id);
    revalidatePath("/layanan");
    return { success: true, data: null, message: "Kategori berhasil dihapus" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menghapus kategori" };
  }
}