import Link from "next/link";
import { ALAMAT } from "@/lib/constants";
import { socialService } from "@/services/social.service";
import { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

interface FooterProps {
  dict: Dictionary["nav"];
  locale: Locale;
}

export default async function Footer({ dict, locale }: FooterProps) {
  const socialLinks = await socialService.getAllSocial();
  const NAV_ITEMS = [
    { href: `/${locale}`, label: dict.home },
    { href: `/${locale}/tentang-kami`, label: dict.about },
    { href: `/${locale}/layanan`, label: dict.service },
    { href: `/${locale}/produk`, label: dict.product },
    { href: `/${locale}/galeri`, label: dict.gallery },
    { href: `/${locale}/kontak`, label: dict.contact },
  ];
  return (
    <footer className="bg-linear-to-b from-background to-light-primary px-6 py-16 md:px-16 text-dark-primary">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 lg:gap-100 md:flex-row">
          {/* Logo */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight  md:text-4xl">
              PDU
              <br />
              Bumijo
            </h2>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-16">
            {/* Navigation */}
            <div>
              <h3 className="mb-4 font-semibold">{dict.navigation}</h3>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm  transition-colors hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 font-semibold">{dict.social}</h3>
              <ul className="space-y-2">
                {socialLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors hover:text-black"
                    >
                      {item.app}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-4 font-semibold ">{dict.location}</h3>
              <p className="text-sm leading-relaxed">{ALAMAT}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-dark-primary" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
          <p>© Copyright 2026 PDU Bumijo</p>
          <p>
            Made with <span className="text-white">💚</span> by KKN-PPM UGM 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
