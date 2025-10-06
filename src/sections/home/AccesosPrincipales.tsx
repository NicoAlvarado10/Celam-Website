// sections/home/AccesosPrincipales.tsx
import AccesoItem from "./accesosPrincipales/AccesoItem"
import AccesoItem2 from "./accesosPrincipales/AccesoItem2"
import { accesos } from "./accesosPrincipales/acceso.config"
export default function AccesosPrincipales() {
  return (
    <section className="py-20  bg-gray-50">
      <div className="max-w-10/12 max-md:max-w-11/12 mx-auto">
        <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-primary mb-4 uppercase">
          ¿Qué necesitás hacer hoy?
        </h2>
        <p className="text-xl text-gray-800 text-center text-primary mb-12 ">Accedé rapidamente a los trámites más esenciales.</p>
        <div className="grid grid-cols-4 max-lg:grid-cols-3  max-w-10/12 max-sm:max-w-11/12 max-lg:max-w-full justify-center items-center mx-auto max-md:grid-cols-2 gap-4 ">
          {accesos.map(({ label, path, icon }) => (
            <AccesoItem2 key={path} label={label} path={path} icon={icon} />
          ))}
        </div>

      </div>
    </section>
  )
} 