import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE } from "@/lib/constants";

export function ContactPage() {
  return (
    <PageLayout>
      <Hero eyebrow="Contacto" title="Hablemos" />

      <Container className="grid gap-12 py-16 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold text-slate-900">Información</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{SITE.address}</li>
            <li>{SITE.phone}</li>
            <li>{SITE.email}</li>
          </ul>
        </div>

        <ContactForm />
      </Container>
    </PageLayout>
  );
}

export default ContactPage;
