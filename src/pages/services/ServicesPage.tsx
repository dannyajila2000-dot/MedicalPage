import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/layout/Container";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { SERVICES } from "@/lib/data";

export function ServicesPage() {
  return (
    <PageLayout>
      <Hero
        eyebrow="Servicios"
        title="Especialidades y servicios médicos"
        description="Cobertura integral para el cuidado de tu salud y la de tu familia."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.slug}>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
}

export default ServicesPage;
