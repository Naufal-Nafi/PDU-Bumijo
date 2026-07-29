"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { authService } from "@/services/auth.service";
import type { ActionResponse } from "@/lib/types";

const loginSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
});

export async function loginAction(
  _prevState: ActionResponse<null>,
  formData: FormData
): Promise<ActionResponse<null>> {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Periksa kembali input kamu",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const result = await authService.login(parsed.data);

  if (!result.success) {
    return result;
  }

  redirect("/admin");
}

export async function logoutAction() {
  await authService.logout();
  redirect("/login");
}