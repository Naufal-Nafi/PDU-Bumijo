import { Hero } from "@/components/hero";
import { ContactInfo } from "./components/contact-info";
import { ContactForm } from "./components/contact-form";
import { kontakService } from "@/services/kontak.service";

export default async function KontakPage() {
    const kontak = await kontakService.getKontak();
    return (
        <main className="my-12">
            <Hero
                title="Hubungi Kami"
                description="Siap membantu kebutuhan pengelolaan sampah organik maupun anorganik."
            />

            <section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:gap-12">
                <ContactInfo wa_no={kontak.phone} email={kontak.email}/>
                <ContactForm WHATSAPP_NUMBER={kontak.phone}/>
            </section>
        </main>
    );
}