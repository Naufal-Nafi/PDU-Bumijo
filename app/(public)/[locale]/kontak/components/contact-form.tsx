"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { Dictionary } from "@/lib/dictionary";


interface ContactFromProps {
  WHATSAPP_NUMBER: string;
  dict: Dictionary["contact"];
}

export function ContactForm({ WHATSAPP_NUMBER, dict }: ContactFromProps) {
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
        <Label htmlFor="name">{dict.form.fieldName.label}</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={dict.form.fieldName.placeholder}
          required
          className="py-4 bg-white/40 "
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">{dict.form.fieldEmail.label}</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.form.fieldEmail.placeholder}
          required
          className="py-4 bg-white/40 "
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">{dict.form.fieldMessage.label}</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={dict.form.fieldMessage.placeholder}
          rows={5}
          required
          className="bg-white/40 min-h-24"
        />
      </div>

      <Button
        type="submit"
      >
        <Send className="size-4" />
        {dict.form.button}
      </Button>

      <p className="text-center text-xs text-dark-primary/60">
        {dict.form.tips}
      </p>
    </form>
  );
}
