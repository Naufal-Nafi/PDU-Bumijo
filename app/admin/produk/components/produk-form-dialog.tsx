"use client";

import { useState, useRef, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  createProdukAction,
  updateProdukAction,
} from "@/actions/produk.action";
import type { ProdukListItem } from "@/services/produk.service";
import { toast } from "sonner";

interface Props {
  mode: "create" | "edit";
  produk?: ProdukListItem;
  trigger?: React.ReactElement;
}

export function ProdukFormDialog({ mode, produk, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(produk?.image ?? null);
  const [errors, setErrors] = useState<
    Record<string, string[] | undefined> | undefined
  >();
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: FormData) {
    setErrors(undefined);
    startTransition(async () => {
      const action =
        mode === "create" ? createProdukAction : updateProdukAction;
      const result = await action(null, formData);

      if (result.success) {
        toast.success(result.message ?? "Berhasil");
        setOpen(false);
        formRef.current?.reset();
        setPreview(produk?.image ?? null);
      } else {
        toast.error(result.message);
        setErrors(result.errors);
      }
    });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          trigger ?? (
            <Button>{mode === "create" ? "Tambah Produk" : "Edit"}</Button>
          )
        }
      />
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Tambah Produk" : "Edit Produk"}
          </DialogTitle>
        </DialogHeader>

        <form ref={formRef} action={handleSubmit} className="space-y-4">
          {mode === "edit" && produk && (
            <input type="hidden" name="id" value={produk.id} />
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Nama Produk</Label>
            <Input id="name" name="name" defaultValue={produk?.name} />
            {errors?.name && (
              <p className="text-sm text-destructive">{errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="name_eng">Nama Produk (English)</Label>
            <Input
              id="name_eng"
              name="name_eng"
              defaultValue={produk?.name_eng ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Harga</Label>
            <Input
              type="number"
              id="price"
              name="price"
              defaultValue={produk?.price ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={produk?.description ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description_eng">Deskripsi (English)</Label>
            <Textarea
              id="description_eng"
              name="description_eng"
              defaultValue={produk?.description_eng ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Gambar</Label>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {preview && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview}
                alt="Preview"
                className="mt-2 h-32 w-32 rounded object-cover"
              />
            )}
          </div>

          <DialogFooter>
            <DialogClose
              render={
                <Button type="button" variant="outline">
                  Batal
                </Button>
              }
            />
            <Button type="submit" disabled={isPending}>
              {isPending ? "Menyimpan..." : "Simpan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
