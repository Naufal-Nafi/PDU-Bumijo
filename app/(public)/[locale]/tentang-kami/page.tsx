import { Hero } from "./components/hero";
import { SiapaKami } from "./components/siapa-kami";
import { LatarBelakang } from "./components/latar-belakang";
import { PerjalananTimeline } from "./components/perjalanan-timeline";
import { VisiMisi } from "./components/visi-misi";
import { Penutup } from "./components/penutup";

export default function TentangKamiPage() {
  return (
    <main className="flex flex-col">
      <div className="relative isolate overflow-hidden bg-background">
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-light-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-16 -z-10 h-64 w-64 rounded-full bg-secondary/50 blur-3xl" />
        <Hero />
        <SiapaKami />
      </div>
      
      <LatarBelakang />
      <PerjalananTimeline />
      <VisiMisi />
      <Penutup />
    </main>
  );
}
