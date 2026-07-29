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
  createGaleriAction,
  updateGaleriAction,
} from "@/actions/galeri.action";
import type { GaleriListItem } from "@/services/galeri.service";
import { toast } from "sonner";

interface Props {
  mode: "create" | "edit";
  galeri?: GaleriListItem;
  trigger?: React.ReactElement;
}

export function GaleriFormDialog({ mode, galeri, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(galeri?.src ?? null);
  const [errors, setErrors] = useState<
    Record<string, string[] | undefined> | undefined
  >();
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: FormData) {
    setErrors(undefined);
    startTransition(async () => {
      const action =
        mode === "create" ? createGaleriAction : updateGaleriAction;
      const result = await action(null, formData);

      if (result.success) {
        toast.success(result.message ?? "Berhasil");
        setOpen(false);
        formRef.current?.reset();
        setPreview(galeri?.src ?? null);
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
            <Button>{mode === "create" ? "Tambah Galeri" : "Edit"}</Button>
          )
        }
      />
      <DialogContent className="max-h-[90vh] overflow-y-auto max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Tambah Galeri" : "Edit Galeri"}
          </DialogTitle>
        </DialogHeader>

        <form ref={formRef} action={handleSubmit} className="space-y-4">
          {mode === "edit" && galeri && (
            <input type="hidden" name="id" value={galeri.id} />
          )}

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
