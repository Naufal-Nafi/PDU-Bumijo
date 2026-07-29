import { kontakService } from "@/services/kontak.service";
import { socialService } from "@/services/social.service";
import { KontakCards } from "./components/kontak-cards";
import { SocialTable } from "./components/social-table";

export default async function KontakPage() {
  const [kontak, socials] = await Promise.all([
    kontakService.getKontak(),
    socialService.getAllSocial(),
  ]);

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Kontak</h1>
        <p className="text-sm text-muted-foreground">
          Kelola informasi kontak dan tautan sosial media PDU Bumijo
        </p>
      </div>

      <KontakCards kontak={kontak} />
      <SocialTable socials={socials} />
    </div>
  );
}