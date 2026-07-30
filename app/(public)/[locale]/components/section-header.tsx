import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-6 text-center", className)}>
      <h2 className="font-fraunces text-3xl md:text-5xl text-dark-primary">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-dark-primary/80">
          {subtitle}
        </p>
      )}
    </div>
  );
}