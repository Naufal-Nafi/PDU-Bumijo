"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  locale: Locale;
  className?: string;
}

export default function LocaleSwitcher({ locale, className }: LocaleSwitcherProps) {
  const pathname = usePathname();

  // Ganti segmen locale di pathname, sisanya (rest of path) dipertahankan
  const getPathForLocale = (targetLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = targetLocale; // segments[0] selalu "" karena leading slash
    return segments.join("/") || "/";
  };

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-dark-primary/30 p-0.5 text-xs font-semibold",
        className
      )}
    >
      {locales.map((loc) => (
        <Link
          key={loc}
          href={getPathForLocale(loc)}
          aria-current={loc === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            loc === locale
              ? "bg-dark-primary text-white"
              : "text-dark-primary/60 hover:text-dark-primary"
          )}
        >
          {loc}
        </Link>
      ))}
    </div>
  );
}