import { PageLayout } from "@/components/layout/PageLayout";
import { CallToAction } from "@/components/sections/CallToAction";
import { HomeHero } from "@/pages/home/sections/HomeHero";
import { ServicesPreview } from "@/pages/home/sections/ServicesPreview";
import { DoctorsPreview } from "@/pages/home/sections/DoctorsPreview";

export function HomePage() {
  return (
    <PageLayout>
      <HomeHero />

      <ServicesPreview />
      <DoctorsPreview />

      <CallToAction
        title="¿Necesitas una consulta?"
        description="Agenda tu cita en minutos y te confirmamos por correo o teléfono."
        actionLabel="Agendar cita"
        actionTo="/citas"
      />
    </PageLayout>
  );
}

export default HomePage;
