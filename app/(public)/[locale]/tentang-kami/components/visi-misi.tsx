import { FadeIn } from "@/components/animation/fade-in";
import { Dictionary } from "@/lib/dictionary";

interface VisiMisiProps {
  dict: Dictionary["aboutUs"];
}


export function VisiMisi({ dict }: VisiMisiProps) {
  const MISI = dict.visiMisi.misi.value;
  return (
    <section className="bg-secondary/30 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-5">
        <FadeIn className="flex flex-col justify-center gap-4 rounded-3xl bg-dark-primary p-8 text-background md:col-span-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-light-primary">
            {dict.visiMisi.visi.header}
          </span>
          <p className="text-xl leading-snug italic md:text-2xl">
            &ldquo;{dict.visiMisi.visi.value}&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="rounded-3xl bg-background p-8 md:col-span-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            {dict.visiMisi.misi.header}
          </span>
          <ol className="mt-4 flex flex-col gap-4">
            {MISI.map((item, i) => (
              <li key={item} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-light-primary/60 text-sm font-semibold text-dark-primary">
                  {i + 1}
                </span>
                <p className="text-dark-primary/85">{item}</p>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}