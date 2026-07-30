"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { Galeri } from "@/db/schema";

// interface GalleryItem {
//   id: number | string;
//   image: string;
//   title?: string | null;
//   description?: string | null;
// }

interface GalleryCarouselProps {
  gallery: Galeri[];
}

export function GalleryCarousel({ gallery }: GalleryCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: gallery.length > 3,
      }}
      plugins={[
        Autoplay({
          delay: 3500,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {gallery.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-[88%] pl-4 sm:basis-2/3 lg:basis-1/2"
          >
            <Link
              href="/galeri"
              className="group relative block aspect-4/3 overflow-hidden rounded-3xl border-2 border-dark-primary bg-secondary"
            >
              <Image
                src={item.src}
                alt={item.alt ?? "Kegiatan PDU Bumijo"}
                fill
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 66vw, 40vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-dark-primary/80 via-dark-primary/10 to-transparent" />

              {/* <div className="absolute inset-x-0 bottom-0 p-5 text-background md:p-7">
                <p className="font-fraunces text-xl md:text-2xl">
                  {item.title ?? "Kegiatan PDU Bumijo"}
                </p>

                {item.description && (
                  <p className="mt-2 line-clamp-2 max-w-xl text-sm text-background/80">
                    {item.description}
                  </p>
                )}
              </div> */}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      {gallery.length > 1 && (
        <>
          <CarouselPrevious className="left-3 border-dark-primary bg-background text-dark-primary md:-left-5" />
          <CarouselNext className="right-3 border-dark-primary bg-background text-dark-primary md:-right-5" />
        </>
      )}
    </Carousel>
  );
}