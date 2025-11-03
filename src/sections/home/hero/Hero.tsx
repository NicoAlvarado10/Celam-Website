import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { heroSlides } from "./hero.config";
import Botton from "../../../components/common/Botton";

export const Hero = () => {

  return (
    <section className="bg-[#F9FAFB] min-h-screen overflow-hidden md:pt-60 pt-28 relative ">

      <div className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop 

    className="w-10/12 gap-4  max-sm:w-11/12 mx-auto"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 justify-center items-center gap-8 px-4">
              {/* Columna de texto */}
              <div className="flex flex-col gap-4">
               {slide.title && (
                
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-semibold text-primary max-md:text-center"
                >
                  {slide.title}
                </motion.h1>
               )} 

               {slide.subtitle && (
                  <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={slide.styleSubtitle}
                  >
                    {slide.subtitle}
                  </motion.h2>
                )}

                <motion.p
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-black text-lg md:text-xl max-w-4xl max-md:max-w-full max-md:text-center leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                {/* CTA flexible */}
                <div className="flex max-md:justify-center gap-4">
                  {slide.ctaPrimary && (
                    <Botton
                      href={slide.ctaPrimary.href}
                      className="rounded-xl font-semibold  px-6 py-3"
                      variant="primary"
                      delay={0.6}
                    >
                      {slide.ctaPrimary.label}
                    </Botton>
                  )}

                  {slide.ctaSecondary && (
                    <Botton
                      href={slide.ctaSecondary.href}
                      className="rounded-xl font-semibold px-6 py-3"
                      variant="outline"
                      delay={0.8}
                    >
                      {slide.ctaSecondary.label}
                    </Botton>
                  )}
                </div>
              </div>

              {/* Columna de imagen */}
              <div className="flex h-full w-full justify-center md:justify-end">
                <img
                  src={slide.imageSrc} // agrega imageSrc en hero.config.ts
                  alt={slide.title}
                  className={slide.className}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>




      </div>
    </section>
  );
};


{/*
  import {motion} from "framer-motion";
  import Botton from "../../../components/common/Botton"
  export const Hero: React.FC = () => {
    return (
      <section className="relative bg-gray-50 pt-56 max-lg:pt-24 max-lg:pb-6 max-lg:h-full h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2  max-w-10/12 max-sm:max-w-11/12 mx-auto  gap-12 max-md:gap-6">
      
          <div className="flex flex-col justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl tracking-tight md:text-8xl font-bold leading-tight text-primary max-md:text-center"
            >
              CELAM
            </motion.h1>
  
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 tracking-tight text-2xl md:text-4xl font-semibold text-primary max-md:text-center"
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
  
        
        </div>
      </section>
    );
  };
  
  */}