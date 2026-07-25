import { CTA } from "@/components/cta";
import { Hero } from "@/components/hero";
import { ServiceTabs } from "./components/service-tabs";

export default function LayananPage() {
    return (
        <main className="my-12">
            <Hero title="Layanan PDU Bumijo" description="Kami menyediakan berbagai layanan edukasi dan pengelolaan sampah
          untuk masyarakat, sekolah, instansi, maupun komunitas."/>
            <ServiceTabs />
            <CTA title="Tertarik menggunakan layanan kami?" description="Masih memiliki pertanyaan atau ingin melakukan reservasi?"/>
        </main>
    );
}