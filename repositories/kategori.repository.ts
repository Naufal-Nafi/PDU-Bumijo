import { db } from "@/db";
import { kategori, type NewKategori } from "@/db/schema";
import { eq } from "drizzle-orm";

export const kategoriRepository = {
  findAll: () => db.select().from(kategori).orderBy(kategori.title),

  findById: (id: number) =>
    db.select().from(kategori).where(eq(kategori.id, id)).then((r) => r[0]),

  create: (data: NewKategori) =>
    db.insert(kategori).values(data).returning().then((r) => r[0]),

  update: (id: number, data: Partial<NewKategori>) =>
    db.update(kategori).set(data).where(eq(kategori.id, id)).returning().then((r) => r[0]),

  delete: (id: number) =>
    db.delete(kategori).where(eq(kategori.id, id)).returning().then((r) => r[0]),
};