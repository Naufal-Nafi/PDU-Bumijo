"use server";

import { revalidatePath } from "next/cache";
import { produkService } from "@/services/produk.service";
import {
  createProdukSchema,
  updateProdukSchema,
} from "@/validations/produk.schema";
import type { ActionResponse } from "@/lib/types";
import type { Produk } from "@/db/schema";
import { MAX_IMAGE_SIZE } from "@/lib/constants";

function parseFormFields(formData: FormData) {
  return {
    kategoriId: formData.get("kategoriId"),
    name: formData.get("name"),
    name_eng: formData.get("name_eng") || undefined,
    price: formData.get("price"),
    description: formData.get("description"),
    description_eng: formData.get("description_eng") || undefined,
  };
}

export async function createProdukAction(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResponse<Produk | null>> {
  const imageFile = formData.get("image") as File | null;
  if (imageFile && imageFile.size > MAX_IMAGE_SIZE) {
    return { success: false, message: "Ukuran gambar maksimal 5MB" };
  }

  const parsed = createProdukSchema.safeParse(parseFormFields(formData));

  if (!parsed.success) {
    return {
      success: false,
      message: "Data tidak valid",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const data = await produkService.create(parsed.data, imageFile);
    revalidatePath("/admin/produk");
    return { success: true, data, message: "Produk berhasil ditambahkan" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menambahkan produk" };
  }
}

export async function updateProdukAction(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResponse<Produk | null>> {
  const imageFile = formData.get("image") as File | null;
  if (imageFile && imageFile.size > MAX_IMAGE_SIZE) {
    return { success: false, message: "Ukuran gambar maksimal 5MB" };
  }
  
  const parsed = updateProdukSchema.safeParse({
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
    const data = await produkService.update(parsed.data, imageFile);
    revalidatePath("/admin/produk");
    return { success: true, data, message: "Produk berhasil diperbarui" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal memperbarui produk" };
  }
}

export async function deleteProdukAction(
  id: number,
): Promise<ActionResponse<null>> {
  try {
    await produkService.delete(id);
    revalidatePath("/produk");
    return { success: true, data: null, message: "Produk berhasil dihapus" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal menghapus produk" };
  }
}
