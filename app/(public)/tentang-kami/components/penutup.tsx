import { FadeIn } from "@/components/animation/fade-in";

export function Penutup() {
  return (
    <section className="bg-background px-6 py-20 text-center text-dark-primary md:py-28">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <span className="text-4xl">🌿</span>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Terus Berkembang, Bersama Masyarakat
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-4 text-dark-primary/80 leading-relaxed">
            PDU &quot;Papa Dulang Mami&quot; akan terus berkembang sebagai model
            pengelolaan sampah berbasis masyarakat yang berkelanjutan. Melalui
            kolaborasi, edukasi, dan inovasi, kami berkomitmen menciptakan
            lingkungan yang lebih bersih sekaligus meningkatkan nilai ekonomi
            dari pengelolaan sampah.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
