import {motion} from "framer-motion";
import Botton from "../../../components/common/Botton"
import { Carrusel } from "../../../components/common/Carrusel";
import { heroSlides } from "./hero.config";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 pt-56 max-lg:pt-24 max-lg:pb-6 max-lg:h-full h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2  max-w-10/12 max-sm:max-w-11/12 mx-auto  gap-12 max-md:gap-6">
        {/* Texto institucional */}
        <div className="flex flex-col justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-bold leading-tight text-primary max-md:text-center"
          >
            CELAM
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-2xl md:text-4xl font-semibold text-primary max-md:text-center"
          >
            Energía que se renueva
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-black text-lg md:text-xl max-w-4xl max-md:max-w-full max-md:text-center leading-relaxed"
          >
            Somos la Cooperativa de Electricidad, Obras y Servicios Públicos de Adelia María. Impulsamos el desarrollo local con energía, compromiso y visión comunitaria.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 justify-start max-md:justify-center">
            <Botton href="#about" className="rounded-xl font-semibold px-6 py-3" variant="primary" delay={0.6}>
              Conocé más
            </Botton>
            <Botton href="#services" className="rounded-xl font-semibold px-6 py-3" variant="outline" delay={0.8}>
              Servicios
            </Botton>
          </div>
        </div>

        {/* Carrusel visual */}
        <motion.div 
         initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        className="w-full ">
          <Carrusel slides={heroSlides} />
        </motion.div>
      </div>
    </section>
  );
};

