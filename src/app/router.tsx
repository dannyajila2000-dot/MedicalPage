import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const ServicesPage = lazy(() => import("@/pages/services/ServicesPage"));
const DoctorsPage = lazy(() => import("@/pages/doctors/DoctorsPage"));
const AppointmentsPage = lazy(
  () => import("@/pages/appointments/AppointmentsPage"),
);
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={null}>{element}</Suspense>;
}

const router = createBrowserRouter([
  { path: "/", element: withSuspense(<HomePage />) },
  { path: "/servicios", element: withSuspense(<ServicesPage />) },
  { path: "/medicos", element: withSuspense(<DoctorsPage />) },
  { path: "/citas", element: withSuspense(<AppointmentsPage />) },
  { path: "/contacto", element: withSuspense(<ContactPage />) },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
