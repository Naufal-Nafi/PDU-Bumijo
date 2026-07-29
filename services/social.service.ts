import { socialRepository } from "@/repositories/social.repository";
import type { CreateSocialInput, UpdateSocialInput } from "@/validations/social.schema";

export const socialService = {
  async getAllSocial() {
    return socialRepository.findAll();
  },

  async createSocial(input: CreateSocialInput) {
    return socialRepository.create(input);
  },

  async updateSocial(input: UpdateSocialInput) {
    const { id, ...data } = input;
    const existing = await socialRepository.findById(id);
    if (!existing) throw new Error("Data social media tidak ditemukan");
    return socialRepository.update(id, data);
  },

  async deleteSocial(id: number) {
    const existing = await socialRepository.findById(id);
    if (!existing) throw new Error("Data social media tidak ditemukan");
    await socialRepository.delete(id);
  },
};