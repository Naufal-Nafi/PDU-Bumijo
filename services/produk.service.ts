import { produkRepository } from "@/repositories/produk.repository";
import { uploadImage, deleteImage } from "@/lib/cloudinary-helper";
import type { CreateProdukInput, UpdateProdukInput } from "@/validations/produk.schema";

export const produkService = {
  getAll: () => produkRepository.findAll(),
  getById: (id: number) => produkRepository.findById(id),

  create: async (data: CreateProdukInput, imageFile?: File | null) => {
    let imageUrl: string | undefined;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile);
    }

    return produkRepository.create({ ...data, image: imageUrl });
  },

  update: async ({ id, ...data }: UpdateProdukInput, imageFile?: File | null) => {
    const existing = await produkRepository.findById(id);
    if (!existing) throw new Error("Produk tidak ditemukan");

    let imageUrl = existing.image;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile);
      // upload dulu baru hapus yang lama, biar kalau upload gagal gambar lama gak hilang
      if (existing.image) await deleteImage(existing.image);
    }

    return produkRepository.update(id, { ...data, image: imageUrl });
  },

  delete: async (id: number) => {
    const existing = await produkRepository.findById(id);
    if (existing?.image) await deleteImage(existing.image);
    return produkRepository.delete(id);
  },
};

export type ProdukListItem = Awaited<ReturnType<typeof produkService.getAll>>[number];