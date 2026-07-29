import { db } from "@/db";
import { layanan, kategori, type NewLayanan } from "@/db/schema";
import { eq } from "drizzle-orm";

export const layananRepository = {
  findAll: () =>
    db
      .select({
        id: layanan.id,
        kategoriId: layanan.kategoriId,
        kategoriTitle: kategori.title,
        title: layanan.title,
        title_eng: layanan.title_eng,
        description: layanan.description,
        description_eng: layanan.description_eng,
        image: layanan.image,
      })
      .from(layanan)
      .leftJoin(kategori, eq(layanan.kategoriId, kategori.id))
      .orderBy(layanan.title),

  findById: (id: number) =>
    db.select().from(layanan).where(eq(layanan.id, id)).then((r) => r[0]),

  create: (data: NewLayanan) =>
    db.insert(layanan).values(data).returning().then((r) => r[0]),

  update: (id: number, data: Partial<NewLayanan>) =>
    db.update(layanan).set(data).where(eq(layanan.id, id)).returning().then((r) => r[0]),

  delete: (id: number) =>
    db.delete(layanan).where(eq(layanan.id, id)).returning().then((r) => r[0]),
};