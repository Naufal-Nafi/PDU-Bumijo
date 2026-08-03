import { FadeIn } from "@/components/animation/fade-in";
import { PopIn } from "@/components/animation/pop-in";

import { Dictionary } from "@/lib/dictionary";

interface PerjalananTimelineProps {
  dict: Dictionary["aboutUs"];
}

export function PerjalananTimeline({ dict }: PerjalananTimelineProps) {
  const PERJALANAN = [
    { title: dict.timeline.perjalanan[1].title, desc: dict.timeline.perjalanan[1].desc },
    { title: dict.timeline.perjalanan[2].title, desc: dict.timeline.perjalanan[2].desc },
    { title: dict.timeline.perjalanan[3].title, desc: dict.timeline.perjalanan[3].desc },
    { title: dict.timeline.perjalanan[4].title, desc: dict.timeline.perjalanan[4].desc },
    { title: dict.timeline.perjalanan[5].title, desc: dict.timeline.perjalanan[5].desc },
  ];
  return (
    <section className="bg-background px-6 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            {dict.timeline.header}
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-dark-primary md:text-3xl">
            {dict.timeline.title}
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-dark-primary/15 md:left-1/2" />

          <ol className="flex flex-col gap-10">
            {PERJALANAN.map((item, i) => (
              <li
                key={item.title}
                className={`relative flex items-start gap-5 md:items-center ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <PopIn className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-background ring-4 ring-background md:absolute md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </PopIn>

                <FadeIn
                  className={`w-full rounded-2xl border border-dark-primary/10 bg-secondary/25 p-5 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 1 ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <h3 className="font-semibold text-dark-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-dark-primary/75">{item.desc}</p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}