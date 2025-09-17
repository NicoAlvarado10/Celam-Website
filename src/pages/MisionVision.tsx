export const MisionVision: React.FC = () => {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="relative bg-[url('/bg-hero.jpg')] max-sm:pt-16 bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-2">Misión y Visión</h1>
          <p className="text-xl mt-6">Compromiso, eficiencia y desarrollo sostenible para la comunidad</p>
        </div>
      </section>

      {/* SECCIÓN MISION Y VISION */}
      <section className="max-w-10/12 max-sm:max-w-11/12 mx-auto  py-20 grid md:grid-cols-2 gap-12">
        {/* Misión */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 items-center text-center hover:shadow-xl transition">
          <i className="ri-target-fill text-5xl text-blue-600 " />
          <h2 className="text-2xl font-bold mb-4">Misión</h2>
          <p className="text-gray-700 text-left leading-relaxed">
            Distribuir energía de calidad que posibilite el desarrollo y la prestación de otros servicios acordes a las necesidades de los asociados y a la viabilidad efectiva de su implementación. Haciéndolo con criterios de solidaridad, competitividad, sustentabilidad y accesibilidad.
          </p>
          <p className="text-gray-700 text-left leading-relaxed">
            Esta misión estará basada en el respeto de los principios y valores del movimiento cooperativo. En el contacto directo con el asociado, en procura de la satisfacción de las necesidades comunes y el fomento de su participación. En el fortalecimiento de las relaciones internas de los trabajadores. En el fomento de la comunicación y la educación en todos los niveles y modalidades posibles y en el trabajo constante en pos del afianzamiento de las relaciones institucionales con todos nuestros grupos de interés.
          </p>
        </div>

        {/* Visión */}
        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition gap-3">
       
          <h2 className="text-2xl font-bold mb-4">Visión</h2>
          <p className="text-gray-700 text-left leading-relaxed">
           Ser una empresa cooperativa que se destaque por el compromiso con el bienestar de sus asociados, a través de la prestación del servicio eléctrico y de otros servicios eficientes, competitivos y de alta calidad que satisfagan necesidades sociales.
          </p>
          <p className="text-gray-700 text-left leading-relaxed">
           Estos servicios se asentarán sobre la base de la puesta en práctica de los principios y valores cooperativos. El desarrollo y la valoración del talento humano competente, responsable y comprometido con el mejoramiento continuo de los procesos. También en la incorporación de la tecnología más adecuada de acuerdo a las posibilidades efectivas de la empresa.
          </p>
        </div>
      </section>

      
    </main>
  );
};
