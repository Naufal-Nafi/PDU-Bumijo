import { FadeIn } from "@/components/animation/fade-in";

const MISI = [
  "Mengurangi sampah melalui pemilahan dan daur ulang, terutama daur ulang plastik.",
  "Mengolah sampah organik menjadi kompos dan pakan maggot.",
  "Mengembangkan pertanian organik berbasis pupuk kompos.",
  "Mengembangkan peternakan yang memanfaatkan hasil pengolahan limbah.",
  "Menjadi pusat edukasi pengelolaan sampah bagi masyarakat.",
];

export function VisiMisi() {
  return (
    <section className="bg-secondary/30 px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-5">
        <FadeIn className="flex flex-col justify-center gap-4 rounded-3xl bg-dark-primary p-8 text-background md:col-span-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-light-primary">
            Visi
          </span>
          <p className="text-xl leading-snug italic md:text-2xl">
            &ldquo;Mewujudkan Kelurahan Bumijo, khususnya kawasan RT 35/RW
            08, menjadi salah satu tempat pengelolaan sampah terpadu yang
            ramah lingkungan, produktif, dan menjadi pusat edukasi ekonomi
            sirkular berbasis masyarakat.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="rounded-3xl bg-background p-8 md:col-span-3">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Misi
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