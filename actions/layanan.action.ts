"use server";

import { revalidatePath } from "next/cache";
import { layananService } from "@/services/layanan.service";
import { createLayananSchema, updateLayananSchema } from "@/validations/layanan.schema";
import type { ActionResponse } from "@/lib/types";
import type { Layanan } from "@/db/schema";
import { MAX_IMAGE_SIZE } from "@/lib/constants";

function parseFormFields(formData: FormData) {
  return {
    kategoriId: formData.get("kategoriId"),
    title: formData.get("title"),
    title_eng: formData.get("title_eng") || undefined,
    description: formData.get("description"),
    description_eng: formData.get("description_eng") || undefined,
  };
}

export async function createLayananAction(
  _prevState: unknown,
  formData: FormData
): Promise<ActionResponse<Layanan | null>> {
  const imageFile = formData.get("image") as File | null;
  if (imageFile && imageFile.size > MAX_IMAGE_SIZE) {
    return { success: false, message: "Ukuran gambar maksimal 5MB" };
  }

  const parsed = createLayananSchema.safeParse(parseFormFields(formData));

  if (!parsed.success) {
    return { success: false, message: "Data tidak valid", errors: parsed.error.flatten().fieldErrors };
  }


  try {
    const data = await layananService.create(parsed.data, imageFile);
    revalidatePath("/layanan");
    return { success: true, data, message: "Layanan berhasil ditambahkan" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menambahkan layanan" };
  }
}

export async function updateLayananAction(
  _prevState: unknown,
  formData: FormData
): Promise<ActionResponse<Layanan | null>> {
  const imageFile = formData.get("image") as File | null;
  if (imageFile && imageFile.size > MAX_IMAGE_SIZE) {
    return { success: false, message: "Ukuran gambar maksimal 5MB" };
  }

  const parsed = updateLayananSchema.safeParse({
    id: formData.get("id"),
    ...parseFormFields(formData),
  });

  if (!parsed.success) {
    return { success: false, message: "Data tidak valid", errors: parsed.error.flatten().fieldErrors };
  }

  try {
    const data = await layananService.update(parsed.data, imageFile);
    revalidatePath("/layanan");
    return { success: true, data, message: "Layanan berhasil diperbarui" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal memperbarui layanan" };
  }
}

export async function deleteLayananAction(id: number): Promise<ActionResponse<null>> {
  try {
    await layananService.delete(id);
    revalidatePath("/layanan");
    return { success: true, data: null, message: "Layanan berhasil dihapus" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menghapus layanan" };
  }
}