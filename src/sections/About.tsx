export const About: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-20" id="about">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto space-y-16">

        <header className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nuestra Cooperativa</h1>
          <p className="text-xl text-gray-700">
            CELAM es más que energía: somos comunidad, compromiso y visión compartida.
          </p>
        </header>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-8">
          {/* Card: Misión y Visión */}
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <i className="ri-compass-line text-3xl " />
              <h2 className="text-xl font-semibold">Misión y Visión</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brindamos servicios públicos esenciales con eficiencia, transparencia y sentido cooperativo, promoviendo el desarrollo integral.  
              Aspiramos a ser una cooperativa modelo en innovación, participación comunitaria y sostenibilidad, fortaleciendo vínculos y generando confianza en cada acción.
            </p>
            <a href="/mision-vision" className="text-sm text-blue-700 hover:underline">Conocé más sobre nuestra misión y visión</a>
          </div>

          {/* Card: Quiénes somos */}
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <i className="ri-group-line text-3xl" />
              <h2 className="text-xl font-semibold">Quiénes somos</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">
              CELAM está integrada por vecinos comprometidos con el bienestar colectivo. Nuestra historia refleja décadas de trabajo solidario, crecimiento técnico y vocación de servicio.
            </p>
            <a href="/quienes-somos" className="text-sm text-blue-700 hover:underline">Conocé más sobre nuestra historia</a>
          </div>

          {/* Card: Consejo de Administración */}
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition ">
            <div className="flex items-center gap-4 mb-4">
              <i className="ri-government-line text-3xl " />
              <h2 className="text-xl font-semibold">Consejo de Administración</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-2">
              Nuestro Consejo está conformado por representantes elegidos democráticamente, que guían la gestión institucional con responsabilidad, transparencia y visión estratégica.
            </p>
            <a href="/consejo" className="text-sm text-blue-700 hover:underline">Ver integrantes del Consejo</a>
          </div>
        </div>
      </div>
    </section>
  );
};