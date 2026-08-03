import { Hero } from "@/components/hero";
import { ContactInfo } from "./components/contact-info";
import { ContactForm } from "./components/contact-form";
import { kontakService } from "@/services/kontak.service";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function KontakPage({ params }: { params: Promise<{ locale: string}>}) {
    const kontak = await kontakService.getKontak();
    const { locale } = await params;
    const dict = await getDictionary(locale as Locale);
    return (
        <main className="my-12">
            <Hero
                title={dict.contact.title}
                description={dict.contact.subTitle}
            />

            <section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:gap-12">
                <ContactInfo dict={dict.contact} wa_no={kontak.phone} email={kontak.email}/>
                <ContactForm dict={dict.contact} WHATSAPP_NUMBER={kontak.phone}/>
            </section>
        </main>
    );
}