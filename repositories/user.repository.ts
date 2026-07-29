import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";

export const userRepository = {
  async findByEmail(email: string) {
    const [result] = await db
      .select()
      .from(user)
      .where(eq(user.email, email))
      .limit(1);

    return result ?? null;
  },
};
