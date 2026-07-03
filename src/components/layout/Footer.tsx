import { Container } from "@/components/layout/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-primary-700">{SITE.name}</p>
          <p className="mt-2 text-sm text-slate-600">
            Atención médica cercana, profesional y a tiempo.
          </p>
        </div>

        <div>
          <p className="font-medium text-slate-900">Navegación</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <a href={link.to} className="hover:text-primary-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-medium text-slate-900">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{SITE.address}</li>
            <li>{SITE.phone}</li>
            <li>{SITE.email}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
