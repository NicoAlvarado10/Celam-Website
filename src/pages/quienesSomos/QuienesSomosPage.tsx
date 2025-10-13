import { quienesSomos } from "./quienesSomos.config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const QuienesSomosPage: React.FC = () => {
  return (
    <section className="bg-white text-gray-900">
     
      <div className="relative bg-gray-50 max-md:h-full flex items-center flex-col justify-center pt-60 max-sm:pt-32">
        <div
          className="text-center px-6"
        
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl max-sm:text-3xl font-bold text-blue-700 mb-4 tracking-tight">
            Quiénes Somos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 ,delay:0.2}}
          className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            CELAM, una cooperativa con más de 70 años de compromiso con la comunidad.
          </motion.p>
        </div>
      <div className="max-w-10/12 mx-auto max-sm:max-w-11/12  py-12 grid md:grid-cols-2 gap-16">

        <div className="space-y-20 ">
      
          <article className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 ">{quienesSomos.historia.title}</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {quienesSomos.historia.items.map((item, i) => (
                <p key={i}>
                  <strong >{item.label}:</strong> {item.value}
                </p>
              ))}
            </div>
          </article>

  
          <section className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-8 ">Principios Cooperativos</h2>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
              {quienesSomos.principios.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition flex items-center gap-4"
                >
                  <i className={`${item.icon} text-3xl text-blue-600`} aria-hidden="true" />
                  <p className="text-gray-700 font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

     
        <div className="space-y-20">
      
          <section className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-8 ">Nuestros Valores</h2>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
              {quienesSomos.valores.map((valor, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <span className="text-lg max-sm:text-base uppercase font-semibold mb-2 text-blue-700">{valor.title}</span>
                  <p className="text-gray-600 leading-relaxed">{valor.description}</p>
                </div>
              ))}
            </div>
          </section>

       
          <div className="flex justify-center gap-6 pt-2">
  <Link
    to="/mision-vision"
    className="bg-gradient-to-br from-blue-600 to-blue-400 hover:bg-gradient-to-tr text-white rounded-full w-36 h-36 max-sm:h-34  max-sm:w-34 flex flex-col items-center justify-center shadow-md transition-all duration-150  "
  >
    <i className="ri-lightbulb-flash-line text-3xl mb-2" />
    <span className="text-sm font-semibold text-center">Misión y Visión</span>
  </Link>

  <Link
    to="/consejo"
    className="bg-gradient-to-br from-blue-600 to-blue-400 hover:bg-gradient-to-tr text-white rounded-full w-36 h-36 max-sm:h-34  max-sm:w-34 flex flex-col items-center justify-center shadow-md transition-all duration-150  "
  >
    <i className="ri-group-line text-3xl mb-2" />
    <span className="text-sm font-semibold text-center">Consejo de Administración</span>
  </Link>
</div>
        </div>
      </div>
      </div>


    </section>
  );
};