import Link from "next/link";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/6288232515824"; 

interface CTAProps {
    title: string;
    description: string;
}

export function CTA({ title, description}: CTAProps) {
  return (
    <section className="bg-dark-primary px-6 py-16 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-fraunces text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-white/80">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            variant="alt"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Hubungi via WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="white"
          >
            <Link href="/contact">Kunjungi Halaman Kontak</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}