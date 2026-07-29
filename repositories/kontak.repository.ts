import { db } from "@/db";
import { kontak, type Kontak } from "@/db/schema";
import { eq } from "drizzle-orm";

export const kontakRepository = {
  async findFirst(): Promise<Kontak | undefined> {
    const [row] = await db.select().from(kontak).limit(1);
    return row;
  },

  async update(id: number, data: Partial<typeof kontak.$inferInsert>): Promise<Kontak> {
    const [updated] = await db
      .update(kontak)
      .set(data)
      .where(eq(kontak.id, id))
      .returning();
    return updated;
  },
};