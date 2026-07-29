"use client";

import {  useState, useTransition } from "react";
import type { ElementType } from "react";
import { Phone, Mail, Link as LinkIcon, Pencil, Check, X } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateKontakAction } from "@/actions/kontak.action";
import type { Kontak } from "@/db/schema";

type KontakField = "phone" | "email" | "appUrl";

const FIELD_CONFIG: Record<KontakField, { label: string; icon: ElementType; type: string; placeholder: string }> = {
  phone: { label: "Nomor HP", icon: Phone, type: "tel", placeholder: "08xxxxxxxxxx" },
  email: { label: "Email", icon: Mail, type: "email", placeholder: "contoh@email.com" },
  appUrl: { label: "URL App Siap Berkah", icon: LinkIcon, type: "url", placeholder: "https://..." },
};

function SingleKontakCard({ kontak, field }: { kontak: Kontak; field: KontakField }) {
  const config = FIELD_CONFIG[field];
  const Icon = config.icon;
  const [editing, setEditing] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await updateKontakAction(null, formData);
      if (result.success) {
        toast.success(`${config.label} berhasil diperbarui`);
        setEditing(false);
      } else {
        toast.error(result.message);
      }
    });
  };

  const currentValue = kontak[field] ?? "";

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Icon className="h-4 w-4" />
          {config.label}
        </CardTitle>
        {!editing && (
          <Button variant="ghost" size="icon" className="p-4" onClick={() => setEditing(true)}>
            <Pencil className="h-3.5 w-3.5" />
          </Button>
        )}
      </CardHeader>
      <CardContent>
        {editing ? (
          <form action={handleSubmit} className="flex items-center gap-2">
            <input type="hidden" name="id" value={kontak.id} />
            <Input
              name={field}
              type={config.type}
              defaultValue={currentValue}
              placeholder={config.placeholder}
              className="h-9"
              required={field !== "appUrl"}
            />
            <Button type="submit" size="icon" className="h-9 w-9 shrink-0" disabled={isPending}>
              <Check className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-9 w-9 shrink-0"
              onClick={() => setEditing(false)}
              disabled={isPending}
            >
              <X className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <p className="truncate text-lg font-semibold">
            {currentValue || <span className="font-normal text-muted-foreground">Belum diisi</span>}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function KontakCards({ kontak }: { kontak: Kontak }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <SingleKontakCard kontak={kontak} field="phone" />
      <SingleKontakCard kontak={kontak} field="email" />
      <SingleKontakCard kontak={kontak} field="appUrl" />
    </div>
  );
}