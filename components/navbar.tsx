"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface NavbarProps {
  app_url: string;
}

export default function Navbar({ app_url }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    // <header className="fixed left-0 right-0 top-0 z-50 border-b-4 border-[#0f1f14] bg-[#eef8ef]">
    <header className="fixed md:top-4 top-0 z-50 bg-background md:bg-background/85 md:w-4/5 w-full md:rounded-2xl md:border-1 md:border-dark-primary">
      <nav className="sticky top-0 left-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-dark-primary md:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          PDU Bumijo
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
                <li key={item.label}>
                <Link
                    href={item.href}
                    // className="text-sm font-semibold text-[#26402f] hover:translate-y-4 duration-300 transition-colors hover:text-[#0f1f14]"
                    className={cn(
                        "relative text-sm font-medium text-dark-primary",
                        "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-dark-primary after:rounded-2xl after:transition-all",
                        isActive
                            ? "after:w-full"
                            : "after:w-0 hover:after:w-full",
                        )}
                >
                    {item.label}
                </Link>
                </li>
            )
        })}
        </ul>

        {/* Desktop CTA */}
        <Link
          className="hidden md:block"
          href={app_url}
          target="_blank"
        >
          <Button >App Siap Berkah</Button>
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
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
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-[#26402f]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center pb-10">
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-[#cfe666] px-8 py-3 text-base font-bold text-[#1f3d2b]"
            >
              App Siap Berkah
            </a>
          </div>
        </div>
      )}
    </header>
  );
}