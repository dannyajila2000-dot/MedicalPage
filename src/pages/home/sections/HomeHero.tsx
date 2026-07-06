import { Calendar, MapPin, MessageCircle, Stethoscope } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { LOCATION_LABEL, SITE } from "@/lib/constants";
import heroBanner from "@/assets/Principalbanner.jpg";

const WHATSAPP_HREF = `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`;

export function HomeHero() {
  return (
    <section className="py-6 sm:py-10">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div
            className="absolute inset-0 bg-primary-900/65"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-white">
                Bienestar Medico
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Cuida tu salud
                <br />
                <span className="underline decoration-primary-300 decoration-4 underline-offset-4">
                  impulsa
                </span>
                <br />
                tu{" "}
                <span className="underline decoration-primary-300 decoration-4 underline-offset-4">
                  potencial
                </span>
              </h1>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="flex-1">
                  <p className="text-base font-semibold text-white">
                    Hablemos de Salud, obtén un Diagnóstico Gratis
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-white">
                    <MessageCircle size={20} className="shrink-0" />
                    <span className="font-medium">{SITE.whatsapp}</span>
                  </div>
                </div>
                <Stethoscope
                  size={56}
                  className="shrink-0 text-primary-100"
                  aria-hidden="true"
                />
              </a>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="shrink-0 text-primary-600" />
                  <p className="font-semibold text-slate-900">
                    Horario de Atención
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                  <span>Lunes - Viernes</span>
                  <span className="font-medium text-slate-900">
                    8:00am - 5:00pm
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={16} className="shrink-0 text-primary-600" />
                  <span>{LOCATION_LABEL}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
