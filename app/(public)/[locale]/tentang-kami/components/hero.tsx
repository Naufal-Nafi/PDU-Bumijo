import { Badge } from "@/components/ui/badge";
import { Dictionary } from "@/lib/dictionary";

interface HeroProps {
  dict: Dictionary["aboutUs"];
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="px-6 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Badge variant="eco" className="px-4 py-4 text-sm">
            Kelurahan Bumijo &middot; RT 35 / RW 08
        </Badge>
        <h1
          className="font-fraunces text-4xl font-semibold leading-tight text-dark-primary md:text-5xl"
        >
          {dict.hero.title}
          {/* <br className="hidden md:block" /> Menjadi Berkah Bersama */}
        </h1>
        <p className="max-w-xl text-base text-dark-primary/80 md:text-lg font-sans">
          {dict.hero.Subtitles}
        </p>
      </div>
    </section>
  );
}