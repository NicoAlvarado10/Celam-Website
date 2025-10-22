// common/Carrusel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from "swiper/modules";

import Botton from "./Botton";

interface SlideItem {
  imageSrc: string;
  buttonLabel: string;
  buttonHref: string;
}

interface CarruselProps {
  slides: SlideItem[];
}

export const Carrusel: React.FC<CarruselProps> = ({ slides }) => {
  return (
    <div className="w-full  max-w-7xl mx-auto">
      <Swiper
        modules={[ Autoplay]}
        
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <img
                src={slide.imageSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-[350px] max-md:h-[200px] object-cover rounded-lg"
              />
              <Botton
                href={slide.buttonHref}
                variant="gradient"
                className=" rounded-sm text-xl "
              >
                {slide.buttonLabel}
                
              </Botton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};