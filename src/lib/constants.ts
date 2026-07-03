export const SITE = {
  name: "ClínicaSalud",
  phone: "+593 99 999 9999",
  email: "contacto@clinicasalud.com",
  address: "Av. Principal 123, Quito",
};

export const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Médicos", to: "/medicos" },
  { label: "Citas", to: "/citas" },
  { label: "Contacto", to: "/contacto" },
] as const;
