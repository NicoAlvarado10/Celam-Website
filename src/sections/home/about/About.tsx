import { aboutContent } from "./about.config";
export const About: React.FC = () => {
  return (
    <section className="bg-white text-gray-900 py-20" id="about">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto space-y-16">

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Cooperativa</h1>
          <p className="text-xl text-gray-700">
            CELAM es más que energía: somos comunidad, compromiso y visión compartida.
          </p>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-8">
          {aboutContent.cards.map((card, i) => (
            <article key={i} className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <i className={`${card.icon} text-3xl`} aria-hidden="true" />
                <h2 className="text-xl font-semibold">{card.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">{card.description}</p>
              <a href={card.link.href} className="text-sm text-blue-700 hover:underline">
                {card.link.label}
              </a>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};