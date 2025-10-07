import { quienesSomos } from "./quienesSomos.config";
export const QuienesSomosPage: React.FC = () => {
  return (
    <section >
      {/* HERO */}
      <div className="relative bg-gray-50 max-sm:pt-16  h-[80vh] flex items-center justify-center">
       
        <div className="relative z-10 text-center text-black px-4">
         <h1 className="text-5xl text-[#0049AF] max-sm:text-3xl font-bold mb-4">
            Quiénes Somos
          </h1>
          <p className="mx-auto text-xl mt-6">CELAM, una cooperativa con más de 70 años de compromiso con la comunidad.</p>

        </div>
      </div>

      {/* HISTORIA */}
      <article className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">{quienesSomos.historia.title}</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          {quienesSomos.historia.items.map((item, i) => (
            <p key={i}>
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </article>

      {/* VALORES */}
      <article className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quienesSomos.valores.map((valor, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{valor.title}</h3>
                <p className="text-gray-600">{valor.description}</p>
              </div>
            ))}

          </div>
        </div>
      </article>
      {/* PRINCIPIOS COOPERATIVOS */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto ">
          <h2 className="text-3xl font-bold mb-12 text-center">Principios Cooperativos</h2>
          <article className="grid md:grid-cols-3 gap-6">
           {quienesSomos.principios.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <i className={`${item.icon} text-4xl mb-3`} aria-hidden="true" />
                <p className="text-gray-700 font-medium">{item.title}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};
