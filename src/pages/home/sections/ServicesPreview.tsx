import { Container } from "@/components/layout/Container";
import { Carousel } from "@/components/ui/carousel";
import { ServiceCard } from "@/pages/home/sections/ServiceCard";
import { SERVICE_HIGHLIGHTS } from "@/lib/data";

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
            Clínica psicosocial
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Servicios &amp; Asesorías
          </h2>
        </div>

        <Carousel
          className="mt-12"
          items={SERVICE_HIGHLIGHTS}
          getKey={(service) => service.slug}
          autoPlay
          renderItem={(service) => <ServiceCard service={service} />}
        />
      </Container>
    </section>
  );
}
