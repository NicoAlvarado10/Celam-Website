export const QuienesSomos: React.FC = () => {
  return (
    <div className="">
      {/* HERO */}
      <section className="relative bg-[url('/bg-hero.jpg')] bg-cover max-sm:pt-16 bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl max-sm:text-3xl font-bold mb-4">Quiénes Somos</h1>
          <p className=" mx-auto text-xl mt-6">
            CELAM, una cooperativa con más de 70 años de compromiso con la comunidad.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p><strong>Fundación:</strong> 24 de marzo de 1953</p>
          <p>
            <strong>Inicio del servicio eléctrico:</strong> 1º de noviembre de 1954,
            con la adquisición de la Usina privada.
          </p>
          <p>
            <strong>Interconexión a EPEC:</strong> 16 de octubre de 1979.
          </p>
          <p>
            <strong>Servicios eléctricos autorizados:</strong> Decreto Nº 3378 (Córdoba) – 6 de octubre de 1954.
          </p>
          <p>
            <strong>Personería Jurídica:</strong> Decreto Nº 7036 - Serie "A" - 30 de octubre de 1953.
          </p>
          <p>
            <strong>INAES:</strong> Matrícula Nº 2881 – 29 de enero de 1954.
          </p>
          <p>
            <strong>Actividad principal:</strong> Distribución de energía eléctrica.
            <br />
            <strong>Actividad secundaria:</strong> Distribución de agua potable.
          </p>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-2">Eficiencia</h3>
              <p className="text-gray-600">En la prestación de los servicios.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p className="text-gray-600">Compromiso con un servicio confiable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-2">Transparencia</h3>
              <p className="text-gray-600">Gestión clara y responsable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition">

              <h3 className="text-xl font-semibold mb-2">Participación</h3>
              <p className="text-gray-600">De los asociados en la toma de decisiones.</p>
            </div>
          </div>
        </div>
      </section>
      {/* PRINCIPIOS COOPERATIVOS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto ">
          <h2 className="text-3xl font-bold mb-12 text-center">Principios Cooperativos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Adhesión abierta y voluntaria", icon: "ri-hand-heart-fill" },
              { title: "Control democrático", icon: "ri-group-fill" },
              { title: "Autonomía e independencia", icon: "ri-shield-star-fill" },
              { title: "Educación e información", icon: "ri-book-read-fill" },
              { title: "Cooperación entre cooperativas", icon: "ri-hand-coin-fill" },
              { title: "Compromiso con la comunidad", icon: "ri-community-fill" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-xl transition">
                <i className={`${item.icon} text-4xl  mb-3`} />
                <p className="text-gray-700 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
