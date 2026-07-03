export const SITE = {
  name: "Clínica Psicosocial",
  phone: "+593 99 999 9999",
  email: "contacto@clinicapsicosocial.com",
  address: "Sector La Carolina, Quito, Ecuador",
};

export const NAV_LINKS = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Médicos", to: "/medicos" },
  { label: "Citas", to: "/citas" },
  { label: "Contacto", to: "/contacto" },
] as const;

// Menú principal del encabezado — grupos con submenú desplegable.
export interface NavMenuItem {
  label: string;
  to: string;
}

export interface NavMenuGroup {
  label: string;
  items: NavMenuItem[];
}

export const MAIN_MENU: NavMenuGroup[] = [
  {
    label: "EMPRESAS",
    items: [
      { label: "Servicios corporativos", to: "#" },
      { label: "Talleres", to: "#" },
      { label: "Convenios", to: "#" },
    ],
  },
  {
    label: "PERSONAS",
    items: [
      { label: "Terapia individual", to: "#" },
      { label: "Psiquiatría", to: "#" },
      { label: "Emergencias", to: "#" },
    ],
  },
  {
    label: "PROFESIONALES",
    items: [
      { label: "Capacitación", to: "#" },
      { label: "Supervisión", to: "#" },
      { label: "Bolsa de trabajo", to: "#" },
    ],
  },
];

export const CANAL_DE_CONFIANZA = { label: "Canal de confianza", to: "#" };

export const LOCATION_LABEL = "Sector La Carolina, Quito, Ecuador";
