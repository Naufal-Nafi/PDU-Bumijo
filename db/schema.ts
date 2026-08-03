import { pgTable, serial, varchar, integer, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ================= kategori =================
export const kategori = pgTable("kategori", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  title_eng: varchar("title_eng", { length: 255}),
});

// ================= layanan =================
export const layanan = pgTable("layanan", {
  id: serial("id").primaryKey(),
  kategoriId: integer("kategori_id")
    .notNull()
    .references(() => kategori.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  title_eng: varchar("title_eng", { length: 255 }),
  description: text("description").notNull(),
  description_eng: text("description_eng"),
  image: text("image"),
});

// ================= produk =================
export const produk = pgTable("produk", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  name_eng: varchar("name_eng", { length: 255 }),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  description_eng: text("description_eng"),
  image: text("image"),
});

// ================= kontak =================
export const kontak = pgTable("kontak", {
  id: serial("id").primaryKey(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  appUrl: varchar("app_url", { length: 255 }),
});

// ================= social =================
export const social = pgTable("social", {
  id: serial("id").primaryKey(),
  app: varchar("app", { length: 100 }).notNull(),
  url: varchar("url", { length: 255 }).notNull(),
});

// ================= galeri =================
export const galeri = pgTable("galeri", {
  id: serial("id").primaryKey(),
  src: text("src").notNull(),
  alt: varchar("alt", { length: 255 }),
});

// ================= user =================
// Password di-hash manual pake scripts/hash-password.ts sebelum di-insert.
export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: text("password_hash").notNull(),
});

// ================= relations (opsional, enak buat query .with()) =================
export const kategoriRelations = relations(kategori, ({ many }) => ({
  layanan: many(layanan),
}));

export const layananRelations = relations(layanan, ({ one }) => ({
  kategori: one(kategori, {
    fields: [layanan.kategoriId],
    references: [kategori.id],
  }),
}));

// ================= types =================
export type Kategori = typeof kategori.$inferSelect;
export type NewKategori = typeof kategori.$inferInsert;

export type Layanan = typeof layanan.$inferSelect;
export type NewLayanan = typeof layanan.$inferInsert;

export type Produk = typeof produk.$inferSelect;
export type NewProduk = typeof produk.$inferInsert;

export type Kontak = typeof kontak.$inferSelect;
export type NewKontak = typeof kontak.$inferInsert;

export type Social = typeof social.$inferSelect;
export type NewSocial = typeof social.$inferInsert;

export type Galeri = typeof galeri.$inferSelect;
export type NewGaleri = typeof galeri.$inferInsert;

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;