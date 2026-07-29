import "server-only";
import bcrypt from "bcryptjs";
import { userRepository } from "@/repositories/user.repository";
import { createSession, deleteSession } from "@/lib/session";
import type { ActionResponse } from "@/lib/types";

type LoginInput = {
  email: string;
  password: string;
};

export const authService = {
  async login(input: LoginInput): Promise<ActionResponse<null>> {
    const user = await userRepository.findByEmail(
      input.email
    );

    // pesan error digeneralisir biar gak bocorin email terdaftar atau nggak
    const invalidCredentials: ActionResponse<null> = {
      success: false,
      message: "Email atau password salah",
    };

    if (!user) return invalidCredentials;


    const isPasswordValid = await bcrypt.compare(
      input.password,
      user.passwordHash
    );
    if (!isPasswordValid) return invalidCredentials;

    await createSession({
      userId: user.id,
      email: user.email,
    });

    return { success: true, data: null };
  },

  async logout() {
    await deleteSession();
  },
};