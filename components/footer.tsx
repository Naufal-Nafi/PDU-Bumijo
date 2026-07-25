import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Produk", href: "/produk" },
  { label: "Galeri", href: "/galeri" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Youtube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "TikTok", href: "https://tiktok.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-light-primary px-6 py-16 md:px-16 text-dark-primary">
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
              <h3 className="mb-4 font-semibold">Navigation</h3>
              <ul className="space-y-2">
                {navigationLinks.map((item) => (
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
              <h3 className="mb-4 font-semibold">Social</h3>
              <ul className="space-y-2">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location */}
            <div>
              <h3 className="mb-4 font-semibold ">Location</h3>
              <p className="text-sm leading-relaxed">
                Jl. Tentara Zeni Pelajar No.Rt 35/08, Bumijo, Kec. Jetis, Kota
                Yogyakarta, Daerah Istimewa Yogyakarta 55231
              </p>
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