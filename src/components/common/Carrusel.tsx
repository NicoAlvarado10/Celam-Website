// common/Carrusel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <img
                src={slide.imageSrc}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <Botton
                href={slide.buttonHref}
                variant="gradient"
                className="mt-2"
              >
                {slide.buttonLabel}
                <i className="ri-arrow-right-line ml-2 text-base" />
              </Botton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};