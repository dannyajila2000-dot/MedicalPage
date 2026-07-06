import { useState } from "react";
import { NavLink } from "react-router";
import { MapPin, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { buttonVariants } from "@/components/ui/button";
import {
  MAIN_MENU,
  CANAL_DE_CONFIANZA,
  LOCATION_LABEL,
  SITE,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const LOCATION_SPLIT_INDEX = LOCATION_LABEL.indexOf(",");
const LOCATION_PRIMARY = LOCATION_LABEL.slice(0, LOCATION_SPLIT_INDEX);
const LOCATION_SECONDARY = LOCATION_LABEL.slice(
  LOCATION_SPLIT_INDEX + 1,
).trim();

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <Container className="flex h-24 items-center justify-between gap-8">
        <NavLink
          to="/"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-primary-700"
        >
          {SITE.name.toUpperCase()}
        </NavLink>

        {/* Navegación de escritorio */}
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {MAIN_MENU.map((group) => (
            <NavDropdown key={group.label} {...group} />
          ))}

          <a
            href={CANAL_DE_CONFIANZA.to}
            className="text-base font-semibold text-slate-700 transition-colors hover:text-primary-700"
          >
            {CANAL_DE_CONFIANZA.label.toUpperCase()}
          </a>
        </nav>

        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-2">
            <MapPin size={36} className="shrink-0 text-primary-600" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-800">
                {LOCATION_PRIMARY}
              </span>
              <span className="text-base text-primary-600">
                {LOCATION_SECONDARY}
              </span>
            </div>
          </div>

          <NavLink to="/contacto" className={buttonVariants({ size: "lg" })}>
            Contacto
          </NavLink>
        </div>

        {/* Botón hamburguesa animado — móvil / tablet */}
        <button
          type="button"
          className="relative z-50 flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              "h-0.5 w-7 rounded-full bg-slate-900 transition-all duration-300",
              open && "translate-y-2.5 rotate-45",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-7 rounded-full bg-slate-900 transition-all duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "h-0.5 w-7 rounded-full bg-slate-900 transition-all duration-300",
              open && "-translate-y-2.5 -rotate-45",
            )}
          />
        </button>
      </Container>

      {/* Menú off-canvas — móvil / tablet */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-40 h-full w-72 max-w-[85vw] transform bg-white shadow-xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-4 pb-6 pt-28">
          {MAIN_MENU.map((group) => (
            <details
              key={group.label}
              className="group border-b border-slate-100 py-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-semibold text-slate-800">
                {group.label}
                <ChevronDown
                  size={16}
                  className="text-slate-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="flex flex-col gap-1 pb-2 pl-3">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </details>
          ))}

          <a
            href={CANAL_DE_CONFIANZA.to}
            onClick={() => setOpen(false)}
            className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-800 hover:text-primary-700"
          >
            {CANAL_DE_CONFIANZA.label.toUpperCase()}
          </a>

          <div className="flex items-center gap-1.5 py-4 text-sm text-slate-600">
            <MapPin size={16} className="shrink-0 text-primary-600" />
            <span>{LOCATION_LABEL}</span>
          </div>

          <NavLink
            to="/contacto"
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ size: "md" }),
              "mt-2 justify-center",
            )}
          >
            Contacto
          </NavLink>
        </nav>
      </aside>
    </header>
  );
}
