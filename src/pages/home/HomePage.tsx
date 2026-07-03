import { NavLink } from "react-router";
import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/sections/Hero";
import { CallToAction } from "@/components/sections/CallToAction";
import { buttonVariants } from "@/components/ui/button";
import { ServicesPreview } from "@/pages/home/sections/ServicesPreview";
import { DoctorsPreview } from "@/pages/home/sections/DoctorsPreview";
import heroBanner from "@/assets/Principalbanner.jpg";

export function HomePage() {
  return (
    <PageLayout>
      <Hero
        backgroundImage={heroBanner}
        eyebrow="Bienvenido a Clínica Psicosocial"
        title="Acompañamiento psicosocial integral en cada etapa de tu vida"
        description="Atención especializada para empresas, personas y profesionales, con un equipo comprometido con tu bienestar emocional."
        actions={
          <>
            <NavLink to="/citas" className={buttonVariants({ size: "lg" })}>
              Agendar cita
            </NavLink>
            <NavLink
              to="/servicios"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Ver servicios
            </NavLink>
          </>
        }
      />

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
