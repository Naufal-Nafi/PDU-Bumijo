import { kontakRepository } from "@/repositories/kontak.repository";
import type { UpdateKontakInput } from "@/validations/kontak.schema";

export const kontakService = {
  async getKontak() {
    const data = await kontakRepository.findFirst();
    if (!data) {
      throw new Error("Data kontak belum tersedia, pastikan sudah di-seed");
    }
    return data;
  },

  async updateKontak(input: UpdateKontakInput) {
    const { id, ...data } = input;
    return kontakRepository.update(id, data);
  },
};