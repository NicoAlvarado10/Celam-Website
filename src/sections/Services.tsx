export const Services: React.FC = () => {
  const services = [
    {
      label: "Energía eléctrica",
      description: "Brindamos el servicio de energía eléctrica para todos los hogares de Adelia María, Monte de los Gauchos y zona rural de nuestra cobertura.",
    },
    {
      label: "Agua Potable",
      description: "Proveemos de agua tratada a través de nuestros equipos de ósmosis tanto en Adelia María como en Monte de los Gauchos.",
    },
    {
      label: "Banco ortopédico",
      description: "Ponemos al alcance de la comunidad elementos ortopédicos básicos y de rehabilitación, en concepto de préstamo temporario.",
    },
    {
      label: "Seguro de sangre",
      description: "Ofrecemos un seguro de sangre a través de un convenio con el Instituto de Hematología y Hemoterapia de la Universidad Nacional de Córdoba.",
    },
    {
      label: "Biblioteca pública",
      description: "La Biblioteca Popular Roque Sáenz Peña busca ofrecer el acceso igualitario a contenidos, recursos y servicios a todas las personas que quieran visitarla.",
    },
    {
      label: "Asociación Mutualista",
      description: "Constituida bajo los principios de la solidaridad y la ayuda mutua en la que las personas se unen voluntariamente para tener acceso a servicios sociales únicos en la localidad.",
    },
    {
      label: "Residencias universitarias",
      description: "Se propone para facilitar el acceso a la educación pública universitaria de los asociados o familiares directos con dificultades económicas.",
    },
    {
      label: "Cementerio Parque CELAM",
      description: "Proyecto pensado para ofrecer el mejor y más acogedor de los espacios disponibles para el descanso final: LA NATURALEZA.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 " id="services">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-5xl max-sm:text-3xl font-bold">Nuestros Servicios</h2>
          <p className=" text-gray-600 text-xl mt-6">
            CELAM acompaña a la comunidad con soluciones esenciales, humanas y sostenibles.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="relative rounded-2xl aspect-square overflow-hidden shadow-lg group hover:shadow-xl transition block"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="w-full h-full bg-[url('/biblioteca.png')] bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition" />

              <div className="relative z-10 p-4 flex flex-col justify-end h-full text-white">
                <h3 className="text-lg font-semibold mb-2">{service.label}</h3>
                <p className="text-sm text-white/80">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};