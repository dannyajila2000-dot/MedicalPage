import { NavLink } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ServiceHighlight } from "@/types";

export function ServiceCard({ service }: { service: ServiceHighlight }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="h-72 w-full overflow-hidden sm:h-80">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative -mt-10 mx-4 mb-4 flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-lg">
        <div>
          <p className="font-semibold text-slate-900">{service.title}</p>
          <NavLink
            to={service.href}
            className="mt-1 inline-block text-xs font-semibold uppercase tracking-wide text-primary-600 hover:underline"
          >
            Read more
          </NavLink>
        </div>

        <NavLink
          to={service.href}
          aria-label={`Ver más sobre ${service.title}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors hover:bg-primary-100"
        >
          <ArrowRight size={18} />
        </NavLink>

        <span
          aria-hidden="true"
          className="absolute -top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white shadow-md"
        >
          <Check size={18} />
        </span>
      </div>
    </div>
  );
}
