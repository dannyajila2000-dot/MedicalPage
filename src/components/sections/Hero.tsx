import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  backgroundImage?: string;
}

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  backgroundImage,
}: HeroProps) {
  const isBanner = Boolean(backgroundImage);

  return (
    <section
      className={cn(
        "relative border-b border-slate-200 bg-primary-50 bg-cover bg-center",
        isBanner && "border-none",
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {isBanner && (
        <div className="absolute inset-0 bg-slate-900/60" aria-hidden="true" />
      )}

      <Container
        className={cn(
          "relative py-20 text-center sm:py-28",
          isBanner && "py-28 sm:py-36",
        )}
      >
        {eyebrow && (
          <p
            className={cn(
              "text-sm font-semibold uppercase tracking-wide text-primary-600",
              isBanner && "text-primary-200",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={cn(
            "mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl",
            isBanner && "text-white",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-lg text-slate-600",
              isBanner && "text-slate-100",
            )}
          >
            {description}
          </p>
        )}
        {actions && <div className="mt-8 flex justify-center gap-4">{actions}</div>}
      </Container>
    </section>
  );
}
