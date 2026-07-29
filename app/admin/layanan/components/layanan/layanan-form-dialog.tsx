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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createLayananAction,
  updateLayananAction,
} from "@/actions/layanan.action";
import type { KategoriListItem } from "@/services/kategori.service";
import type { LayananListItem } from "@/services/layanan.service";
import { toast } from "sonner";
import { MAX_IMAGE_SIZE } from "@/lib/constants";

interface Props {
  mode: "create" | "edit";
  layanan?: LayananListItem;
  kategoriList: KategoriListItem[];
  trigger?: React.ReactElement;
}

export function LayananFormDialog({
  mode,
  layanan,
  kategoriList,
  trigger,
}: Props) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(layanan?.image ?? null);
  const [errors, setErrors] = useState<
    Record<string, string[] | undefined> | undefined
  >();
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: FormData) {
    setErrors(undefined);
    startTransition(async () => {
      const action =
        mode === "create" ? createLayananAction : updateLayananAction;
      const result = await action(null, formData);

      if (result.success) {
        toast.success(result.message ?? "Berhasil");
        setOpen(false);
        formRef.current?.reset();
        setPreview(layanan?.image ?? null);
      } else {
        toast.error(result.message);
        setErrors(result.errors);
      }
    });
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("Ukuran gambar maksimal 5MB");
      e.target.value = "";
      return;
    }

    setPreview(URL.createObjectURL(file));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          trigger ?? (
            <Button>{mode === "create" ? "Tambah Layanan" : "Edit"}</Button>
          )
        }
      />
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-6xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Tambah Layanan" : "Edit Layanan"}
          </DialogTitle>
        </DialogHeader>

        <form ref={formRef} action={handleSubmit} className="space-y-4">
          {mode === "edit" && layanan && (
            <input type="hidden" name="id" value={layanan.id} />
          )}

          <div className="space-y-4">
            <Label htmlFor="kategoriId">Kategori</Label>
            <Select
              name="kategoriId"
              defaultValue={layanan?.kategoriId?.toString()}
            >
              <SelectTrigger id="kategoriId">
                <SelectValue placeholder="Pilih kategori" />
              </SelectTrigger>
              <SelectContent align="start">
                {kategoriList.map((k) => (
                  <SelectItem key={k.id} value={k.id.toString()}>
                    {k.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors?.kategoriId && (
              <p className="text-sm text-destructive">{errors.kategoriId[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" defaultValue={layanan?.title} />
            {errors?.title && (
              <p className="text-sm text-destructive">{errors.title[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title_eng">Title (English)</Label>
            <Input
              id="title_eng"
              name="title_eng"
              defaultValue={layanan?.title_eng ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={layanan?.description ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description_eng">Description (English)</Label>
            <Textarea
              id="description_eng"
              name="description_eng"
              defaultValue={layanan?.description_eng ?? ""}
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
