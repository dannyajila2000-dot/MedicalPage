import { NavLink } from "react-router";
import { Container } from "@/components/layout/Container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Nuestros servicios
          </h2>
          <NavLink
            to="/servicios"
            className="text-sm font-medium text-primary-700 hover:underline"
          >
            Ver todos
          </NavLink>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 3).map((service) => (
            <Card key={service.slug}>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
