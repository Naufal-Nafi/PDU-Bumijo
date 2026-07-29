import { produkService } from "@/services/produk.service";
import { ProdukDeleteDialog } from "./components/produk-delete-dialog";
import { ProdukFormDialog } from "./components/produk-form-dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default async function AdminProdukPage() {
  const produkList = await produkService.getAll();
  return (
    <div className="space-y-8 p-6">
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Produk</h2>
          <ProdukFormDialog mode="create"/>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {produkList.map((item) => (
            <div key={item.id} className="rounded border p-4">
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-2 h-32 w-full rounded object-cover"
                />
              )}
              <h3 className="font-medium">{item.name}</h3>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-2 flex gap-2">
                <ProdukFormDialog
                  mode="edit"
                  produk={item}
                  trigger={
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  }
                />
                <ProdukDeleteDialog id={item.id} name={item.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
