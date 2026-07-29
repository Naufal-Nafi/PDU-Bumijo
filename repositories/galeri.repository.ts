import { db } from "@/db";
import { galeri, type NewGaleri } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export const galeriRepository = {
  findAll: () =>
    db
      .select({
        id: galeri.id,
        src: galeri.src,
        alt: galeri.alt,
      })
      .from(galeri)
      .orderBy(desc(galeri.id)),

  findById: (id: number) =>
    db
      .select()
      .from(galeri)
      .where(eq(galeri.id, id))
      .then((r) => r[0]),

  create: (data: NewGaleri) =>
    db
      .insert(galeri)
      .values(data)
      .returning()
      .then((r) => r[0]),

  update: (id: number, data: Partial<NewGaleri>) =>
    db
      .update(galeri)
      .set(data)
      .where(eq(galeri.id, id))
      .returning()
      .then((r) => r[0]),

  delete: (id: number) =>
    db
      .delete(galeri)
      .where(eq(galeri.id, id))
      .returning()
      .then((r) => r[0]),
};
