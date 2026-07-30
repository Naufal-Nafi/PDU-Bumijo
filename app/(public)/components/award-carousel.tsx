"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Award } from "lucide-react";

import { FadeIn } from "@/components/animation/fade-in";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SectionHeader } from "./section-header";

const awards = [
  {
    id: 1,
    title: "Apresiasi Pengelolaan Lingkungan",
    description:
      "Penghargaan atas kontribusi dalam mendorong pengelolaan sampah berbasis masyarakat.",
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Penggerak Masyarakat Peduli Sampah",
    description:
      "Apresiasi terhadap upaya membangun kesadaran dan partisipasi masyarakat.",
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Inovasi Pengolahan Sampah",
    description:
      "Pengakuan terhadap inovasi pengolahan sampah menjadi produk yang bermanfaat.",
    image:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Kolaborasi Lingkungan Berkelanjutan",
    description:
      "Penghargaan atas kolaborasi bersama masyarakat dan berbagai pemangku kepentingan.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
];

export function AwardCarousel() {
  return (
    <section className="w-full bg-secondary py-20 md:py-28">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col gap-12 md:gap-16">
        <FadeIn>
          <SectionHeader
            title="Apresiasi dan Penghargaan"
            subtitle="Berbagai bentuk apresiasi yang menjadi penyemangat bagi kami untuk terus bertumbuh dan memberikan manfaat bagi lingkungan."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {awards.map((award) => (
                <CarouselItem
                  key={award.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <article className="group h-full overflow-hidden rounded-3xl border-2 border-dark-primary bg-background">
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 30vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-dark-primary/50 to-transparent" />

                      <div className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full border border-background/50 bg-background/90 text-primary backdrop-blur-sm">
                        <Award className="size-6" />
                      </div>
                    </div>

                    <div className="space-y-3 p-6">
                      <h3 className="font-fraunces text-xl text-dark-primary md:text-2xl">
                        {award.title}
                      </h3>

                      <p className="text-sm leading-7 text-dark-primary/75">
                        {award.description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-3 border-dark-primary bg-background text-dark-primary md:-left-5" />
            <CarouselNext className="right-3 border-dark-primary bg-background text-dark-primary md:-right-5" />
          </Carousel>
        </FadeIn>
      </div>
    </section>
  );
}