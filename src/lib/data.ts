import type { Doctor, Service, ServiceHighlight } from "@/types";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import banner4 from "@/assets/banner4.jpg";
import banner5 from "@/assets/banner5.jpg";

export const SERVICES: Service[] = [
  {
    slug: "medicina-general",
    title: "Medicina general",
    description: "Consultas y chequeos generales para toda la familia.",
  },
  {
    slug: "pediatria",
    title: "Pediatría",
    description: "Atención especializada para bebés, niños y adolescentes.",
  },
  {
    slug: "cardiologia",
    title: "Cardiología",
    description: "Diagnóstico y seguimiento de la salud cardiovascular.",
  },
  {
    slug: "dermatologia",
    title: "Dermatología",
    description: "Cuidado de la piel, diagnóstico y tratamientos dermatológicos.",
  },
  {
    slug: "ginecologia",
    title: "Ginecología",
    description: "Salud integral de la mujer en todas las etapas de la vida.",
  },
  {
    slug: "laboratorio",
    title: "Laboratorio clínico",
    description: "Exámenes de laboratorio con resultados rápidos y confiables.",
  },
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dra. Andrea López",
    specialty: "Medicina general",
    bio: "Más de 10 años de experiencia en atención primaria.",
  },
  {
    name: "Dr. Carlos Ramírez",
    specialty: "Cardiología",
    bio: "Especialista en salud cardiovascular y prevención.",
  },
  {
    name: "Dra. Sofía Vega",
    specialty: "Pediatría",
    bio: "Enfocada en el cuidado y desarrollo infantil.",
  },
];

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    slug: "medicina-general",
    title: "Medicina general",
    image: banner1,
    href: "/servicios",
  },
  {
    slug: "pediatria",
    title: "Pediatría",
    image: banner2,
    href: "/servicios",
  },
  {
    slug: "cardiologia",
    title: "Cardiología",
    image: banner3,
    href: "/servicios",
  },
  {
    slug: "dermatologia",
    title: "Dermatología",
    image: banner4,
    href: "/servicios",
  },
  {
    slug: "ginecologia",
    title: "Ginecología",
    image: banner5,
    href: "/servicios",
  },
];
