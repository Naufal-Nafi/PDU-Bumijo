"use client";

import { useTransition } from "react";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteGaleriAction } from "@/actions/galeri.action";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

export function GaleriDeleteDialog({ id }: { id: number }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      const res = await deleteGaleriAction(id);
      if (res.success) toast.success(res.message);
      else toast.error(res.message);
    });
  }

  return (
    <AlertDialog>
      {/* <AlertDialogTrigger render={<Button variant="destructive" size="sm">Hapus</Button>} /> */}
      <AlertDialogTrigger className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
          <Trash2 className="h-4 w-4 text-red-500" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus gambar?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak bisa dibatalkan. Gambar yang tersimpan juga ikut dihapus.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isPending}>
            {isPending ? "Menghapus..." : "Hapus"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}