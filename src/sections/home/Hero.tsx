export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen pt-30 bg-gray-50">
    
      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <h1 className="text-5xl md:text-8xl  font-bold leading-tight text-[#0049AF] max-md:text-center">
          CELAM
        </h1>

        <h2 className="mt-4 text-2xl md:text-4xl font-semibold  text-[#0049AF] max-md:text-center">
          Energía que se renueva
        </h2>

        <p className="mt-6 text-black text-lg md:text-xl  max-w-4xl max-md:max-w-full max-md:text-center leading-relaxed">
          Somos la Cooperativa de Electricidad, Obras y Servicios Públicos de Adelia María. Impulsamos el desarrollo local con energía, compromiso y visión comunitaria.
        </p>

  <div className="mt-8 flex flex-wrap gap-4 justify-start max-md:justify-center">
  <a
    href="#about"
    className="bg-[#0049AF] hover:bg-[#003b8f] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0049AF] focus:ring-offset-2"
  >
    Conocé más
  </a>

  <a
    href="#services"
    className="border-2 border-[#0049AF] text-[#0049AF] hover:bg-[#0049AF] hover:text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0049AF] focus:ring-offset-2"
  >
    Servicios
  </a>
</div>
      </div>

     
    </section>
  );
};
