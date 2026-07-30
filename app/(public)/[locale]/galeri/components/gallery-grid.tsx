"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
// import { galleryImages, type GalleryImage } from "../data";
import type { Galeri } from "@/db/schema";

interface GalleryGridProps {
  galleryImages: Galeri[];
}

export function GalleryGrid({ galleryImages }: GalleryGridProps) {
  const [selected, setSelected] = useState<Galeri | null>(null);

  return (
    <>
      <div className="group/gallery columns-1 gap-4 px-6 pb-20 sm:columns-2 lg:columns-3 xl:columns-4">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelected(image)}
            className="
                group/item 
                relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-black/0

                transition-all duration-300
                group-hover/gallery:brightness-70
                group-hover/gallery:grayscale-75
                group-hover/gallery:blur-[2.5px]
                

                hover:brightness-100!
                hover:grayscale-0!
                hover:scale:100!
                hover:blur-none
            "
          >
            <img
              src={image.src}
              alt={image.alt ?? "Galeri PDU Bumijo"}
              // width={image.width}
              // height={image.height}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover/item:scale-101"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-dark-primary/0 transition-colors duration-300">
              <Expand
                className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"
                strokeWidth={1.5}
              />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-4xl border-none bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">
            {selected?.alt ?? "Pratinjau galeri"}
          </DialogTitle>
          {selected && (
            <div className="relative overflow-hidden rounded-2xl bg-dark-primary/5">
              <img
                src={selected.src}
                alt={selected.alt ?? "Galeri PDU Bumijo"}
                // width={selected.width}
                // height={selected.height}
                className="h-auto max-h-[85vh] w-full object-contain"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 rounded-full bg-dark-primary/60 p-2 text-white transition-colors hover:bg-dark-primary"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}