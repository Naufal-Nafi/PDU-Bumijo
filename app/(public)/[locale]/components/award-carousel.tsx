"use client";

import Image from "next/image";

import { FadeIn } from "@/components/animation/fade-in";

import { SectionHeader } from "./section-header";

type LogoItem = {
  id: number;
  name: string;
  image: string;
};

const awards: LogoItem[] = [
  { id: 1, name: "Green Tech", image: "/logos/green-tech.png" },
  { id: 2, name: "Hub.id", image: "/logos/hub-id.png" },
  { id: 3, name: "Indigo", image: "/logos/indigo.png" },
  { id: 4, name: "Google", image: "/logos/google.png" },
];

const partners: LogoItem[] = [
  { id: 1, name: "Partner 1", image: "/logos/partner-1.png" },
  { id: 2, name: "Partner 2", image: "/logos/partner-2.png" },
  { id: 3, name: "Partner 3", image: "/logos/partner-3.png" },
  { id: 4, name: "Partner 4", image: "/logos/partner-4.png" },
  { id: 5, name: "Partner 5", image: "/logos/partner-5.png" },
  { id: 6, name: "Partner 6", image: "/logos/partner-6.png" },
  { id: 7, name: "Partner 7", image: "/logos/partner-7.png" },
];

function LogoMarquee({ items, reverse = false }: { items: LogoItem[]; reverse?: boolean }) {
  // Duplikat list biar loop-nya nyambung mulus
  const loopItems = [...items, ...items];

  return (
    <div className="group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max items-center gap-16 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
      >
        {loopItems.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="relative h-12 w-32 shrink-0 grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 md:h-14 md:w-40"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function AwardCarousel() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-16 md:gap-20">
        <FadeIn>
          <SectionHeader
            title="Penghargaan"
            subtitle="Berbagai bentuk apresiasi yang menjadi penyemangat bagi kami untuk terus bertumbuh dan memberikan manfaat bagi lingkungan."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <LogoMarquee items={awards} />
        </FadeIn>

        <FadeIn delay={0.15}>
          <SectionHeader title="Partner Kami" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <LogoMarquee items={partners} reverse />
        </FadeIn>
      </div>
    </section>
  );
}