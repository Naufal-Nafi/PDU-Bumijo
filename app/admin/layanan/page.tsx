import { kategoriService } from "@/services/kategori.service";
import { layananService } from "@/services/layanan.service";
import { KategoriFormDialog } from "./components/kategori/kategori-form-dialog";
import { KategoriDeleteDialog } from "./components/kategori/kategori-delete-dialog";
import { LayananFormDialog } from "./components/layanan/layanan-form-dialog";
import { LayananDeleteDialog } from "./components/layanan/layanan-delete-dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default async function AdminLayananPage() {
  const [kategoriList, layananList] = await Promise.all([
    kategoriService.getAll(),
    layananService.getAll(),
  ]);

  return (
    <div className="space-y-8 p-6">
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Kategori</h2>
          <KategoriFormDialog mode="create" />
        </div>
        <table className="mt-4 w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Title</th>
              <th className="py-2 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kategoriList.map((k) => (
              <tr key={k.id} className="border-b">
                <td className="py-2">{k.title}</td>
                <td className="space-x-2 py-2 text-right">
                  <KategoriFormDialog
                    mode="edit"
                    kategori={k}
                    trigger={
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    }
                  />
                  <KategoriDeleteDialog id={k.id} title={k.title} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Layanan</h2>
          <LayananFormDialog mode="create" kategoriList={kategoriList} />
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {layananList.map((item) => (
            <div key={item.id} className="rounded border p-4">
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.title}
                  className="mb-2 h-32 w-full rounded object-cover"
                />
              )}
              <p className="text-xs text-muted-foreground">
                {item.kategoriTitle}
              </p>
              <h3 className="font-medium">{item.title}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-2 flex gap-2">
                <LayananFormDialog
                  mode="edit"
                  layanan={item}
                  kategoriList={kategoriList}
                  trigger={
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  }
                />
                <LayananDeleteDialog id={item.id} title={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
