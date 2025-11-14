import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { heroSlides } from "./hero.config";
import Botton from "../../../components/common/Botton";

export const Hero = () => {

  return (
    <section className="bg-[#F5F5F5] min-h-screen overflow-hidden md:pt-60 pt-28 relative max-md:pb-4">

      <div className="">
      <Swiper
        modules={[Autoplay, Navigation, ]}
  autoplay={{ delay: 5000}}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  speed={2000}
  loop
  navigation
    className=" gap-4  mx-auto "
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 w-10/12 max-xl:w-11/12  mx-auto justify-center items-center gap-8 px-4">
              {/* Columna de texto */}
              <div className="flex flex-col gap-4">
               {slide.title && (
                
                <motion.h1
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold max-sm:text-5xl md:text-8xl  text-primary max-md:text-center"
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
                <div className="flex max-md:justify-center flex-wrap gap-4 max-sm:gap-2">
                  {slide.ctaPrimary && (
                    <Botton
                      href={slide.ctaPrimary.href}
                      className="rounded-xl font-semibold max-md:w-10/12 text-center px-6 py-3"
                      variant="primary"
                      delay={0.6}
                    >
                      {slide.ctaPrimary.label}
                    </Botton>
                  )}

                  {slide.ctaSecondary && (
                    <Botton
                      href={slide.ctaSecondary.href}
                      className="rounded-xl font-semibold text-center max-md:w-10/12 px-6 py-3"
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


