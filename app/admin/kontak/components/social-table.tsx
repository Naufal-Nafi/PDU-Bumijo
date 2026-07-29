"use client";

import { useActionState, useEffect, useState, useTransition } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createSocialAction, updateSocialAction, deleteSocialAction } from "@/actions/social.action";
import type { Social } from "@/db/schema";
import type { ActionResponse } from "@/lib/types";

function SocialFormDialog({
  social,
  open,
  onOpenChange,
}: {
  social?: Social;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const isEdit = !!social;
  const action = isEdit ? updateSocialAction : createSocialAction;

  const [state, formAction, isPending] = useActionState<ActionResponse<Social> | null, FormData>(action, null);

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      toast.success(isEdit ? "Social media berhasil diperbarui" : "Social media berhasil ditambahkan");
      onOpenChange(false);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit Social Media" : "Tambah Social Media"}</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="space-y-4">
          {isEdit && <input type="hidden" name="id" value={social.id} />}
          <div className="space-y-1.5">
            <Label htmlFor="app">Platform</Label>
            <Input id="app" name="app" placeholder="instagram, tiktok, dll" defaultValue={social?.app} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="url">URL</Label>
            <Input id="url" name="url" type="url" placeholder="https://..." defaultValue={social?.url} required />
          </div>
          <DialogFooter>
            <DialogClose 
              render={
                <Button type="button" variant="outline">Batal</Button>
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

function DeleteSocialButton({ id, app }: { id: number; app: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const res = await deleteSocialAction(id);
      if (res.success) toast.success("Social media berhasil dihapus");
      else toast.error(res.message);
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg">
          <Trash2 className="h-4 w-4 text-red-500" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus {app}?</AlertDialogTitle>
          <AlertDialogDescription>
            Tindakan ini tidak bisa dibatalkan. Data social media akan dihapus permanen.
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

export function SocialTable({ socials }: { socials: Social[] }) {
  const [createOpen, setCreateOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Social | null>(null);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Social Media</CardTitle>
        <Button size="sm" onClick={() => setCreateOpen(true)}>
          <Plus className="mr-1.5 h-4 w-4" />
          Tambah
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Platform</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="w-24 text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {socials.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-muted-foreground">
                  Belum ada data social media
                </TableCell>
              </TableRow>
            )}
            {socials.map((s) => (
              <TableRow key={s.id}>
                <TableCell className="font-medium capitalize">{s.app}</TableCell>
                <TableCell className="max-w-xs truncate text-muted-foreground">{s.url}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setEditTarget(s)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <DeleteSocialButton id={s.id} app={s.app} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <SocialFormDialog open={createOpen} onOpenChange={setCreateOpen} />
      {editTarget && (
        <SocialFormDialog
          social={editTarget}
          open={!!editTarget}
          onOpenChange={(open) => !open && setEditTarget(null)}
        />
      )}
    </Card>
  );
}