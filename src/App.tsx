const servicios = [
  {
    title: "Impresiones y ",
    desc: "Documentos, planos, fotografías y trabajos a color o blanco y negro.",
  },
  {
    title: "Venta de tóner y tinta",
    desc: "Cartuchos originales y compatibles para las principales marcas.",
  },
  {
    title: "Reparación de impresoras",
    desc: "Diagnóstico, mantenimiento y reparación de impresoras láser e inyección.",
  },
  {
    title: "Recarga de cartuchos",
    desc: "Recarga rápida y económica sin perder calidad de impresión.",
  },
  {
    title: "Escaneo y digitalización",
    desc: "Digitaliza tus documentos físicos en distintos formatos.",
  },
  {
    title: "Venta de impresoras",
    desc: "Equipos nuevos y reacondicionados para hogar u oficina.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">PrintExpress</span>
          <nav className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-slate-900">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-slate-900">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-slate-900">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Tu local de impresoras de confianza
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Impresiones, venta de insumos y reparación de impresoras con
            atención rápida y precios justos.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-700"
          >
            Contáctanos
          </a>
        </section>

        <section
          id="servicios"
          className="border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold text-slate-900">Servicios</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicios.map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-lg border border-slate-200 bg-white p-6"
                >
                  <h3 className="font-medium text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="border-t border-slate-200">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-2xl font-semibold text-slate-900">Nosotros</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Somos un local especializado en soluciones de impresión, con años
              de experiencia atendiendo a hogares, estudiantes y oficinas de la
              zona. Nos importa la calidad, la rapidez y un trato cercano con
              cada cliente.
            </p>
          </div>
        </section>

        <section
          id="contacto"
          className="border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-5xl px-6 py-16 text-center">
            <h2 className="text-2xl font-semibold text-slate-900">Contacto</h2>
            <div className="mt-4 space-y-1 text-slate-600">
              <p>Av. Principal 123, Local 4</p>
              <p>Tel: +593 99 999 9999</p>
              <p>correo@printexpress.com</p>
              <p>Lunes a sábado, 8:00 - 18:00</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} PrintExpress
      </footer>
    </div>
  );
}

export default App;
