import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold text-primary-700">
          {SITE.name}
        </NavLink>

        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-primary-700",
                  isActive && "text-primary-700",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/citas"
          className={cn(buttonVariants({ size: "sm" }), "hidden md:inline-flex")}
        >
          Agendar cita
        </NavLink>

        <button
          type="button"
          className="p-2 text-slate-600 md:hidden"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50",
                    isActive && "bg-primary-50 text-primary-700",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
