"use client";

import { useRef, useState, useTransition } from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createKategoriAction, updateKategoriAction } from "@/actions/kategori.action";
import { KategoriListItem } from "@/services/kategori.service";
import { toast } from "sonner";

interface Props {
  mode: "create" | "edit";
  kategori?: KategoriListItem;
  trigger?: React.ReactElement;
}

export function KategoriFormDialog({ mode, kategori, trigger }: Props) {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[] | undefined> | undefined>();
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(formData: FormData) {
    setErrors(undefined);
    startTransition(async () => {
      const action = mode === "create" ? createKategoriAction : updateKategoriAction;
      const result = await action(null, formData);

      if (result.success) {
        toast.success(result.message ?? "Berhasil");
        setOpen(false);
        formRef.current?.reset();
      } else {
        toast.error(result.message);
        setErrors(result.errors);
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={trigger ?? <Button>{mode === "create" ? "Tambah Kategori" : "Edit"}</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "Tambah Kategori" : "Edit Kategori"}</DialogTitle>
        </DialogHeader>
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          {mode === "edit" && kategori && <input type="hidden" name="id" value={kategori.id} />}
          <div className="space-y-2">
            <Label htmlFor="title">Nama</Label>
            <Input id="title" name="title" defaultValue={kategori?.title} />
            {errors?.title && <p className="text-sm text-destructive">{errors.title[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="title_eng">Nama (Bahasa Inggris)</Label>
            <Input id="title_eng" name="title_eng" defaultValue={kategori?.title_eng ?? ""} />
            {errors?.title_eng && <p className="text-sm text-destructive">{errors.title_eng[0]}</p>}
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Menyimpan..." : "Simpan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}