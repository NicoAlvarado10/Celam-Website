export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-[url('/bg-hero.jpg')] bg-cover bg-center">
      {/* Overlay dinámico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/30 z-0" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <h1 className="text-5xl md:text-8xl  font-bold leading-tight text-white max-md:text-center">
          CELAM
        </h1>

        <h2 className="mt-4 text-2xl md:text-4xl  text-white max-md:text-center">
          Energía que se renueva
        </h2>

        <p className="mt-6 text-white text-lg md:text-xl  max-w-4xl max-md:max-w-full max-md:text-center leading-relaxed">
          Somos la Cooperativa de Electricidad, Obras y Servicios Públicos de Adelia María. Impulsamos el desarrollo local con energía, compromiso y visión comunitaria.
        </p>

        <div className="mt-8 flex flex-wrap max-sm:justify-center gap-4">
          <a
  href="#about"
  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-95  text-white font-semibold px-6 py-3 flex justify-center items-center rounded-lg shadow-lg hover:shadow-2xl  transition transform"
>
  Conocé más
</a>
<a
  href="#services"
  className="border-2 border-white hover:border-blue-500 text-white px-6 py-3 flex justify-center items-center rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 hover:text-white font-semibold transition"
>
  Servicios
</a>

        </div>
      </div>

      {/* Decoración opcional: partículas o efecto ligero */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-0" />
    </section>
  );
};
