import { layananRepository } from "@/repositories/layanan.repository";
import { uploadImage, deleteImage } from "@/lib/cloudinary-helper";
import type { CreateLayananInput, UpdateLayananInput } from "@/validations/layanan.schema";

export const layananService = {
  getAll: () => layananRepository.findAll(),
  getById: (id: number) => layananRepository.findById(id),

  create: async (data: CreateLayananInput, imageFile?: File | null) => {
    let imageUrl: string | undefined;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile);
    }

    return layananRepository.create({ ...data, image: imageUrl });
  },

  update: async ({ id, ...data }: UpdateLayananInput, imageFile?: File | null) => {
    const existing = await layananRepository.findById(id);
    if (!existing) throw new Error("Layanan tidak ditemukan");

    let imageUrl = existing.image;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile);
      // upload dulu baru hapus yang lama, biar kalau upload gagal gambar lama gak hilang
      if (existing.image) await deleteImage(existing.image);
    }

    return layananRepository.update(id, { ...data, image: imageUrl });
  },

  delete: async (id: number) => {
    const existing = await layananRepository.findById(id);
    if (existing?.image) await deleteImage(existing.image);
    return layananRepository.delete(id);
  },
};

export type LayananListItem = Awaited<ReturnType<typeof layananService.getAll>>[number];