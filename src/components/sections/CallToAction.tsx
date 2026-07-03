import { NavLink } from "react-router";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  description?: string;
  actionLabel: string;
  actionTo: string;
}

export function CallToAction({
  title,
  description,
  actionLabel,
  actionTo,
}: CallToActionProps) {
  return (
    <section className="bg-primary-700">
      <Container className="flex flex-col items-center gap-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description && (
          <p className="max-w-xl text-primary-50">{description}</p>
        )}
        <NavLink
          to={actionTo}
          className={buttonVariants({ variant: "accent", size: "lg" })}
        >
          {actionLabel}
        </NavLink>
      </Container>
    </section>
  );
}
