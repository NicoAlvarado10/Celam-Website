import { mesaDirectiva,vocalesTitulares,vocalesSuplentes,otrosCargos } from './consejo.config';
import {motion} from "framer-motion"

export const ConsejoPage: React.FC = () => {

  return (
    <section className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <div className="relative  h-[70vh] pt-20  flex items-center justify-center">
       
        <div className="relative z-10 text-center text-black px-4">
          <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl max-sm:text-3xl text-[#0049AF] font-bold mb-4"
>
  Consejo de Administración
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="text-xl mt-6"
>
  CELAM – Compromiso, gestión y transparencia
</motion.p>

        </div>
      </div>
      <div>

      </div>
      {/* MESA DIRECTIVA */}
      <article className="max-w-6xl mx-auto px-6 ">
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
      </article>

      {/* VOCALES TITULARES */}
      <article className="max-w-6xl mx-auto px-6 py-16">
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
      </article>

      {/* VOCALES SUPLENTES */}
      <article className="max-w-6xl mx-auto px-6 py-16">
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
      </article>

      {/* OTROS CARGOS */}
      <article className="max-w-6xl mx-auto px-6 py-16">
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
      </article>
    </section>
  );
};
