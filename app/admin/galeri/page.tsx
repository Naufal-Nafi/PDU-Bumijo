import { galeriService } from "@/services/galeri.service";
import { GaleriDeleteDialog } from "./components/galeri-delete-dialog";
import { GaleriFormDialog } from "./components/galeri-form-dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Image from "next/image";

export default async function AdminGaleriPage() {
  const galeriList = await galeriService.getAll();
  return (
    <div className="space-y-8 p-6">
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Galeri</h2>
          <GaleriFormDialog mode="create" />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeriList.map((item) => (
            <div key={item.id} className="rounded border p-4">
              {item.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <Image
                  src={item.src}
                  alt={item.alt ?? ""}
                  className="mb-2 h-32 w-full rounded object-cover"
                />
              )}

              <div className="mt-2 flex gap-2">
                <GaleriFormDialog
                  mode="edit"
                  galeri={item}
                  trigger={
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  }
                />
                <GaleriDeleteDialog id={item.id} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
