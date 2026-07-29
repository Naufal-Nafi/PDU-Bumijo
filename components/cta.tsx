import Link from "next/link";
import { Button } from "@/components/ui/button";
import { kontakService } from "@/services/kontak.service";
import { FadeIn } from "./animation/fade-in";

interface CTAProps {
  title: string;
  description: string;
}

export async function CTA({ title, description }: CTAProps) {
  const kontak = await kontakService.getKontak();
  const WHATSAPP_URL = `https://wa.me/${kontak.phone}`;
  return (
    <section className="bg-dark-primary px-6 py-16 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <h2 className="font-fraunces text-3xl font-semibold md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-white/80">{description}</p>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="alt">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Hubungi via WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="white">
            <Link href="/kontak">Kunjungi Halaman Kontak</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
