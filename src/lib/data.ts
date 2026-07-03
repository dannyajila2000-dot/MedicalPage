import type { Doctor, Service } from "@/types";

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
