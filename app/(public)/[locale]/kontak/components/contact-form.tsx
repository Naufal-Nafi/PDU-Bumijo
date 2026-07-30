"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";


interface ContactFromProps {
  WHATSAPP_NUMBER: string;
}

export function ContactForm({ WHATSAPP_NUMBER }: ContactFromProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const text = `Halo Admin PDU,
Nama: ${name}
Email: ${email}
Pesan:
${message}

Terima kasih.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      text,
    )}`;
    window.open(url, "_blank");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border-2 border-secondary bg-background p-6 sm:p-8 shadow-[0rem_0.5rem_var(--secondary)]"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nama</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama lengkap"
          required
          className="py-4 bg-white/40 "
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@email.com"
          required
          className="py-4 bg-white/40 "
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Pesan</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tuliskan kebutuhan Anda..."
          rows={5}
          required
          className="bg-white/40 min-h-24"
        />
      </div>

      <Button
        type="submit"
      >
        <Send className="size-4" />
        Kirim via WhatsApp
      </Button>

      <p className="text-center text-xs text-dark-primary/60">
        Pesan akan dibuka melalui WhatsApp sehingga Anda dapat meninjau sebelum
        mengirimkannya.
      </p>
    </form>
  );
}
