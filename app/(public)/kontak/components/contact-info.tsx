import { MapPin, MessageCircle, Mail } from "lucide-react";
import { ALAMAT } from "@/lib/constants";

interface ContactInfoProps {
    wa_no: string;
    email: string;
}

export function formatPhoneNumber(phone: string) {
  const normalized = phone.startsWith("62")
    ? phone
    : phone.replace(/^0/, "62");

  return normalized.replace(
    /^62(\d{3})(\d{4})(\d+)$/,
    "+62 $1-$2-$3"
  );
}

export function ContactInfo({ wa_no, email}: ContactInfoProps) {    
    const contactItems = [
        {
            icon: MapPin,
            label: "Alamat",
            value: ALAMAT,
            href: `https://www.google.com/maps?q=${encodeURIComponent(ALAMAT)}`,
        },
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: formatPhoneNumber(wa_no),
            href: `https://wa.me/${wa_no}`,
        },
        {
            icon: Mail,
            label: "Email",
            value: email,
            href: `mailto:${email}`,
        },
    ];
    return (
        <div className="flex flex-col gap-10">
            <div className="relative flex flex-col gap-8 pl-4">
                <div className="absolute top-1 bottom-1 left-0 w-px bg-secondary" />

                {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4"
                    >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-dark-primary transition-colors group-hover:bg-primary group-hover:text-background">
                            <Icon className="size-5" strokeWidth={1.75} />
                        </span>
                        <span className="flex flex-col pt-1.5">
                            <span className="font-fraunces text-sm text-dark-primary/60">
                                {label}
                            </span>
                            <span className="text-base text-dark-primary transition-colors group-hover:text-primary">
                                {value}
                            </span>
                        </span>
                    </a>
                ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-secondary">
                <iframe
                    title="Lokasi PDU Bumijo"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                        ALAMAT
                    )}&output=embed`}
                    className="h-64 w-full lg:h-72"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}