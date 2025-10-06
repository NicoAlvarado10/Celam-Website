export const Consejo: React.FC = () => {
  const mesaDirectiva = [
    { cargo: "Presidente", nombre: "José Antonio Filippa" },
    { cargo: "Vicepresidente", nombre: "Fabián Antonio Idiart" },
    { cargo: "Secretario", nombre: "Daniel Hermes Martini" },
    { cargo: "Prosecretario", nombre: "Adrián José Monthelier" },
    { cargo: "Tesorero", nombre: "Bernardo José Simon" },
    { cargo: "Protesorero", nombre: "Alejandro Montagna" },
  ];

  const vocalesTitulares = ["Gabriel Edgardo Curone", "Dr. José Alberto García", "Laureano Rafael Fernandez"];
  const vocalesSuplentes = ["Miguel Antonio Bisotto", "Emiliano Busso", "Mario Guillermo Aimar"];

  const otrosCargos = [
    { cargo: "Síndico Titular", nombre: "Claudio Nicolás Minardi" },
    { cargo: "Síndico Suplente", nombre: "Roberto Hugo Demichelis" },
    { cargo: "Gerente Administrativo", nombre: "Juan Carlos Ferrando" },
    { cargo: "Auditoría", nombre: "Claudio F. Rossi" },
    { cargo: "Asesoría Legal", nombre: "FACE (Federación Argentina de Cooperativas de Electricidad y Otros Servicios Públicos Ltda.)" },
  ];

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative bg-[url('/bg-hero.jpg')] bg-cover bg-center h-[60vh] max-sm:pt-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl max-sm:text-3xl font-bold mb-2">Consejo de Administración</h1>
          <p className="text-xl mt-6">CELAM – Compromiso, gestión y transparencia</p>
        </div>
      </section>
      <div>

      </div>
      {/* MESA DIRECTIVA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Mesa Directiva</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg border">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-medium text-gray-700">Cargo</th>
                <th className="text-left p-4 font-medium text-gray-700">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {mesaDirectiva.map((item, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">{item.cargo}</td>
                  <td className="p-4">{item.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VOCALES TITULARES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Vocales Titulares</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg border">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-medium text-gray-700">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {vocalesTitulares.map((nombre, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">{nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VOCALES SUPLENTES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Vocales Suplentes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg border">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-medium text-gray-700">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {vocalesSuplentes.map((nombre, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">{nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* OTROS CARGOS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Otros Cargos</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg border">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4 font-medium text-gray-700">Cargo</th>
                <th className="text-left p-4 font-medium text-gray-700">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {otrosCargos.map((item, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition">
                  <td className="p-4">{item.cargo}</td>
                  <td className="p-4">{item.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
