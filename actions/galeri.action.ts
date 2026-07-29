"use server";

import { revalidatePath } from "next/cache";
import { galeriService } from "@/services/galeri.service";
import {
  createGaleriSchema,
  updateGaleriSchema,
} from "@/validations/galeri.schema";
import type { ActionResponse } from "@/lib/types";
import type { Galeri } from "@/db/schema";
import { MAX_IMAGE_SIZE } from "@/lib/constants";

function parseFormFields(formData: FormData) {
  return {
    alt: formData.get("alt"),
  };
}

export async function createGaleriAction(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResponse<Galeri | null>> {
  const imageFile = formData.get("image") as File | null;
  if (imageFile && imageFile.size > MAX_IMAGE_SIZE) {
    return { success: false, message: "Ukuran gambar maksimal 5MB" };
  }

  const parsed = createGaleriSchema.safeParse(parseFormFields(formData));

  if (!parsed.success) {
    return {
      success: false,
      message: "Data tidak valid",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const data = await galeriService.create(parsed.data, imageFile);
    revalidatePath("/admin/galeri");
    return { success: true, data, message: "Galeri berhasil ditambahkan" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menambahkan galeri" };
  }
}

export async function updateGaleriAction(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResponse<Galeri | null>> {
  const imageFile = formData.get("image") as File | null;
  if (imageFile && imageFile.size > MAX_IMAGE_SIZE) {
    return { success: false, message: "Ukuran gambar maksimal 5MB" };
  }
  
  const parsed = updateGaleriSchema.safeParse({
    id: formData.get("id"),
    ...parseFormFields(formData),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Data tidak valid",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const data = await galeriService.update(parsed.data, imageFile);
    revalidatePath("/admin/galeri");
    return { success: true, data, message: "Galeri berhasil diperbarui" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal memperbarui galeri" };
  }
}

export async function deleteGaleriAction(
  id: number,
): Promise<ActionResponse<null>> {
  try {
    await galeriService.delete(id);
    revalidatePath("/galeri");
    return { success: true, data: null, message: "Galeri berhasil dihapus" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menghapus galeri" };
  }
}
