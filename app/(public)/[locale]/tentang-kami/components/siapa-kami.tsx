import Image from "next/image";
import { FadeIn } from "@/components/animation/fade-in";
import { Dictionary } from "@/lib/dictionary";

interface SiapaKamiProps {
  dict: Dictionary["aboutUs"];
}

export function SiapaKami({ dict }: SiapaKamiProps) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <FadeIn className="relative w-full max-w-sm shrink-0 md:w-2/5">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-light-primary/50" />
          <Image
            src="https://placehold.net/600x400.png"
            alt="Tentang PDU Bumijo"
            width={600}
            height={450}
            className="h-auto w-full rounded-3xl border-2 border-dark-primary object-cover"
          />
        </FadeIn>

        <FadeIn className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            {dict.siapaKami.header}
          </span>
          <h2 className="text-2xl font-semibold text-dark-primary md:text-3xl">
            {dict.siapaKami.title}
          </h2>
          <p className="text-dark-primary/85 leading-relaxed">
            {dict.siapaKami.subTitle}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}