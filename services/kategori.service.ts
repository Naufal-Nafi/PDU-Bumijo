import { kategoriRepository } from "@/repositories/kategori.repository";
import type { CreateKategoriInput, UpdateKategoriInput } from "@/validations/kategori.schema";

export const kategoriService = {
  getAll: () => kategoriRepository.findAll(),
  getById: (id: number) => kategoriRepository.findById(id),
  create: (data: CreateKategoriInput) => kategoriRepository.create(data),
  update: ({ id, ...data }: UpdateKategoriInput) => kategoriRepository.update(id, data),
  delete: (id: number) => kategoriRepository.delete(id),
};

export type KategoriListItem = Awaited<ReturnType<typeof kategoriService.getAll>>[number];