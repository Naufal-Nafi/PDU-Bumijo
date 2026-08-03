import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt, SESSION_COOKIE_NAME } from "@/lib/session";
import { defaultLocale, locales } from "@/lib/i18n";

const ADMIN_PREFIX = "/admin";
const LOGIN_PATH = "/login";

function getPreferredLocale(): string {
  return defaultLocale;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAdminRoute = pathname.startsWith(ADMIN_PREFIX);
  const isLoginRoute = pathname === LOGIN_PATH;

  // --- (auth) & admin: di luar [locale], gak butuh locale prefix ---
  if (isAdminRoute || isLoginRoute) {
    const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
    const session = await decrypt(token);
    const isAuthenticated = !!session; // decrypt() udah handle exp check via jwtVerify

    if (isAdminRoute && !isAuthenticated) {
      const loginUrl = new URL(LOGIN_PATH, request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (isLoginRoute && isAuthenticated) {
      return NextResponse.redirect(new URL(ADMIN_PREFIX, request.url));
    }

    return NextResponse.next();
  }

  // --- (public)/[locale]: pastikan URL selalu ada prefix locale ---
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (!pathnameHasLocale) {
    const locale = getPreferredLocale();
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  // sekarang harus nangkep SEMUA path (bukan cuma /admin & /login lagi),
  // karena proxy ini juga yang handle locale-redirect buat (public)
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};