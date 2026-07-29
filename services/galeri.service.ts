import { galeriRepository } from "@/repositories/galeri.repository";
import { uploadImage, deleteImage } from "@/lib/cloudinary-helper";
import type {
  CreateGaleriInput,
  UpdateGaleriInput,
} from "@/validations/galeri.schema";

export const galeriService = {
  getAll: () => galeriRepository.findAll(),
  getById: (id: number) => galeriRepository.findById(id),

  create: async (data: CreateGaleriInput, imageFile?: File | null) => {
    if (!imageFile || imageFile.size === 0) throw new Error("Gambar tidak boleh kosong");

    const imageUrl = await uploadImage(imageFile);

    return galeriRepository.create({ ...data, src: imageUrl });
  },

  update: async (
    { id, ...data }: UpdateGaleriInput,
    imageFile?: File | null,
  ) => {
    const existing = await galeriRepository.findById(id);
    if (!existing) throw new Error("Galeri tidak ditemukan");

    let imageUrl = existing.src;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile);
      // upload dulu baru hapus yang lama, biar kalau upload gagal gambar lama gak hilang
      if (existing.src) await deleteImage(existing.src);
    }

    return galeriRepository.update(id, { ...data, src: imageUrl });
  },

  delete: async (id: number) => {
    const existing = await galeriRepository.findById(id);
    if (existing?.src) await deleteImage(existing.src);
    return galeriRepository.delete(id);
  },
};

export type GaleriListItem = Awaited<ReturnType<typeof galeriService.getAll>>[number];