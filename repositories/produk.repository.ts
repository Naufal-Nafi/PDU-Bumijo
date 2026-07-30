import { db } from "@/db";
import { produk, type NewProduk } from "@/db/schema";
import { eq } from "drizzle-orm";

export const produkRepository = {
  findAll: () =>
    db
      .select({
        id: produk.id,
        name: produk.name,
        name_eng: produk.name_eng,
        price: produk.price,
        description: produk.description,
        description_eng: produk.description_eng,
        image: produk.image,
      })
      .from(produk)
      .orderBy(produk.name),
  
  findSome: (limit: number) =>
    db
      .select({
        id: produk.id,
        name: produk.name,
        name_eng: produk.name_eng,
        price: produk.price,
        description: produk.description,
        description_eng: produk.description_eng,
        image: produk.image,
      })
      .from(produk)
      .orderBy(produk.name)
      .limit(limit),

  findById: (id: number) =>
    db.select().from(produk).where(eq(produk.id, id)).then((r) => r[0]),

  create: (data: NewProduk) =>
    db.insert(produk).values(data).returning().then((r) => r[0]),

  update: (id: number, data: Partial<NewProduk>) =>
    db.update(produk).set(data).where(eq(produk.id, id)).returning().then((r) => r[0]),

  delete: (id: number) =>
    db.delete(produk).where(eq(produk.id, id)).returning().then((r) => r[0]),
};