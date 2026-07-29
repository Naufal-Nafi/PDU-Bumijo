import { db } from "@/db";
import { social, type Social, type NewSocial } from "@/db/schema";
import { eq } from "drizzle-orm";

export const socialRepository = {
  async findAll(): Promise<Social[]> {
    return db.select().from(social).orderBy(social.id);
  },

  async findById(id: number): Promise<Social | undefined> {
    const [row] = await db.select().from(social).where(eq(social.id, id));
    return row;
  },

  async create(data: NewSocial): Promise<Social> {
    const [created] = await db.insert(social).values(data).returning();
    return created;
  },

  async update(id: number, data: Partial<NewSocial>): Promise<Social> {
    const [updated] = await db
      .update(social)
      .set(data)
      .where(eq(social.id, id))
      .returning();
    return updated;
  },

  async delete(id: number): Promise<void> {
    await db.delete(social).where(eq(social.id, id));
  },
};