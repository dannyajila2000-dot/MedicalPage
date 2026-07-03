import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { Container } from "@/components/layout/Container";
import { AppointmentForm } from "@/components/forms/AppointmentForm";

export function AppointmentsPage() {
  return (
    <PageLayout>
      <Hero
        eyebrow="Citas"
        title="Agenda tu cita médica"
        description="Completa el formulario y te confirmaremos la disponibilidad."
      />

      <Container className="max-w-2xl py-16">
        <AppointmentForm />
      </Container>
    </PageLayout>
  );
}

export default AppointmentsPage;
