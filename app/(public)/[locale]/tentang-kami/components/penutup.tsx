import { FadeIn } from "@/components/animation/fade-in";
import { Dictionary } from "@/lib/dictionary";

interface PenutupProps {
  dict: Dictionary["aboutUs"];
}

export function Penutup({ dict }: PenutupProps) {
  return (
    <section className="bg-background px-6 py-20 text-center text-dark-primary md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <span className="text-4xl">🌿</span>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            {dict.penutup.title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-dark-primary/80 leading-relaxed">
            {dict.penutup.desc}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
