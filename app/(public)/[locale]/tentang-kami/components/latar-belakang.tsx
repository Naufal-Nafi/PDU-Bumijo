import { FadeIn } from "@/components/animation/fade-in";
import { Dictionary } from "@/lib/dictionary";

interface LatarBelakangProps {
  dict: Dictionary["aboutUs"];
}

export function LatarBelakang({ dict }: LatarBelakangProps) {
  const ALASAN = [
    {
      icon: "♻️",
      title: dict.latarBelakang.alasan[1].title,
      desc: dict.latarBelakang.alasan[1].desc,
    },
    {
      icon: "🏡",
      title: dict.latarBelakang.alasan[2].title,
      desc: dict.latarBelakang.alasan[2].desc,
    },
    {
      icon: "🌱",
      title: dict.latarBelakang.alasan[3].title,
      desc: dict.latarBelakang.alasan[3].desc,
    },
    {
      icon: "🤝",
      title: dict.latarBelakang.alasan[4].title,
      desc: dict.latarBelakang.alasan[4].desc,
    },
  ];
  return (
    <section className="bg-secondary/30 px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {dict.latarBelakang.header}
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-dark-primary md:text-3xl">
              {dict.latarBelakang.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ALASAN.map((item, i) => (
            <FadeIn
              key={item.title}
              delay={i * 0.1}
              className="flex gap-4 rounded-2xl border border-dark-primary/10 bg-background p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light-primary/60 text-xl">
                {item.icon}
              </span>
              <div>
                <h3 className="font-semibold text-dark-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-dark-primary/75">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
