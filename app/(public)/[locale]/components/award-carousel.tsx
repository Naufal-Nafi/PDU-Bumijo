"use client";

import Image from "next/image";

import { FadeIn } from "@/components/animation/fade-in";

import { SectionHeader } from "./section-header";
import { Dictionary } from "@/lib/dictionary";

type LogoItem = {
  id: number;
  name: string;
  image: string;
};


interface AwardCarouselProps {
  dict: Dictionary["homepage"];
}

const awards: LogoItem[] = [
  { id: 1, name: "Juara 1 Bank Sampah Inovatif Kota Yogyakarta Tahun 2022", image: "/awards/award_1.webp" },
  { id: 2, name: "Juara 2 Bank sampah Reguler Tahun 2021", image: "/awards/award_2.webp" },
  { id: 3, name: "Terbaik 1 HUT RI ke 78 Tahun 2023", image: "/awards/award_3.webp" },
  { id: 4, name: "Award 4", image: "/awards/award_4.webp" },
  { id: 5, name: "Juara 1 Bank Sampah Pembina Wilayah Utara Tahun 2023", image: "/awards/award_5.webp" },
  { id: 6, name: "Juara 1 Lomba Bank Sampah Kategori Inovatif Jetis Expo 2022", image: "/awards/award_6.webp" },
  { id: 7, name: "Juara 2 Lomba Bank Sampah Tingkat Kota Yogyakarta Tahun 2021", image: "/awards/award_7.jpeg" },
  { id: 8, name: "Juara 1 Lomba Bank Sampah Tingkat Kota Yogyakarta Tahun 2022 Kategori Bank Sampah Inovatif", image: "/awards/award_8.jpeg" },
  { id: 9, name: "Juara 1 Lomba Bank Sampah Tingkat Kemantren Jetis Tahun 2022 Kategori Inovatif", image: "/awards/award_9.jpeg" },
];

const partners: LogoItem[] = [
  { id: 1, name: "Universitas Gadjah Mada", image: "/partner/partner_1.png" },
  { id: 2, name: "Universitas Negeri Yogyakarta", image: "/partner/partner_2.png" },
  { id: 3, name: "Universitas Muhammadiyah Yogyakarta", image: "/partner/partner_3.png" },
  { id: 4, name: "Universitas Proklamasi 45", image: "/partner/partner_4.png" },
  { id: 5, name: "Pemerintah Kota Yogyakarta", image: "/partner/partner_5.png" },
  { id: 6, name: "Kemantren Jetis", image: "/partner/partner_6.jpg" },
];

function LogoMarquee({ items, reverse = false }: { items: LogoItem[]; reverse?: boolean }) {
  // Duplikat list biar loop-nya nyambung mulus
  const loopItems = [...items, ...items];

  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max items-center gap-16 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:paused`}
      >
        {loopItems.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="relative h-24 w-32 shrink-0  grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 md:h-36 md:w-40"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="360px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AwardCarousel({ dict }: AwardCarouselProps) {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-16 md:gap-20">
        <FadeIn>
          <SectionHeader
            title={dict.awardCarousel.awardTitle}
            subtitle={dict.awardCarousel.awardSubTitle}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <LogoMarquee items={awards} />
        </FadeIn>

        <FadeIn delay={0.15}>
          <SectionHeader title={dict.awardCarousel.partnerTitle} />
        </FadeIn>

        <FadeIn delay={0.2}>
          <LogoMarquee items={partners} reverse />
        </FadeIn>
      </div>
    </section>
  );
}