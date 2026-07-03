import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function Hero({ eyebrow, title, description, actions }: HeroProps) {
  return (
    <section className="border-b border-slate-200 bg-primary-50">
      <Container className="py-20 text-center sm:py-28">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {description}
          </p>
        )}
        {actions && <div className="mt-8 flex justify-center gap-4">{actions}</div>}
      </Container>
    </section>
  );
}
