
import AccesoItem2 from "./AccesoItem2"
import { accesos } from "./acceso.config"
import {motion} from "framer-motion"

export default function AccesosPrincipales() {
  return (
    <section className="py-24  ">
      <div className="max-w-10/12 max-md:max-w-11/12 mx-auto">
        <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
    className="text-4xl max-sm:text-3xl text-primary font-semibold tracking-tight text-center mb-2 uppercase"
  >
    ¿Qué necesitás hacer hoy?
  </motion.h2>
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  className="h-1 bg-secondary w-24 my-2  mx-auto"></motion.div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    className="text-xl text-black text-center  mb-12"
  >
    Accedé rápidamente a los trámites más esenciales.
  </motion.p>

        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  gap-6">
          {accesos.map(({ label, path, icon }) => (
            
            <AccesoItem2 key={path} label={label} path={path} icon={icon} />
          ))}
        </div>

      </div>
    </section>
  )
} 