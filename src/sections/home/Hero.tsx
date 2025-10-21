import {motion} from "framer-motion";
import Botton from "../../components/common/Botton"

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen pt-30 bg-gray-50">
    
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6,  }}
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
  transition={{ duration: 0.6,delay: 0.4 }}
  className="mt-6 text-black text-lg md:text-xl max-w-4xl max-md:max-w-full max-md:text-center leading-relaxed"
>
  Somos la Cooperativa de Electricidad, Obras y Servicios Públicos de Adelia María. Impulsamos el desarrollo local con energía, compromiso y visión comunitaria.
</motion.p>


  <div className="mt-8 flex flex-wrap gap-4 justify-start max-md:justify-center">
   <Botton href="#about" className="rounded-xl  font-semibold px-6 py-3" variant="primary" delay={0.6}>
        Conocé más
      </Botton>

      <Botton href="#services"  className="rounded-xl font-semibold px-6 py-3" variant="outline" delay={0.8}>
        Servicios
      </Botton>

</div>
      </div>

     
    </section>
  );
};
