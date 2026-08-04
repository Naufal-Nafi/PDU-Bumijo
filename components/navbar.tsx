"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import LocaleSwitcher from "./locale-switcher";

interface NavbarProps {
  app_url: string;
  dict: Dictionary["nav"];
  locale: Locale;
}

export default function Navbar({ app_url, dict, locale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const NAV_ITEMS = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}/tentang-kami`, label: dict.about },
    { href: `/${locale}/layanan`, label: dict.service },
    { href: `/${locale}/produk`, label: dict.product },
    { href: `/${locale}/galeri`, label: dict.gallery },
    { href: `/${locale}/kontak`, label: dict.contact },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed md:top-4 top-0 z-50 bg-background md:bg-background/85 md:w-4/5 w-full md:rounded-2xl md:border-1 md:border-dark-primary">
      <nav className="sticky top-0 left-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-xl font-extrabold tracking-tight text-dark-primary md:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          PDU Bumijo
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === `/${locale}`
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-dark-primary",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-dark-primary after:rounded-2xl after:transition-all",
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA + Locale switcher */}
        <div className="hidden items-center gap-4 md:flex">
          <LocaleSwitcher locale={locale} />
          <Link href={app_url} target="_blank">
            <Button>{dict.cta}</Button>
          </Link>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          aria-label={isOpen ? dict.closeMenu : dict.openMenu}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1f3d2b] md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu overlay - overrides the page while open */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-50 flex h-[calc(100vh-var(--navbar-h,64px))] flex-col bg-[#eef8ef] md:hidden">
          <ul className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-[#26402f]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pb-14">
            <LocaleSwitcher locale={locale}/>
            <Link
              href={app_url}
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#cfe666] px-8 py-3 text-base font-bold text-[#1f3d2b]"
            >
              {dict.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}