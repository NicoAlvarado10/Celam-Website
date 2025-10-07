import { institucional } from "./misionVision.config";
export const MisionVisionPage: React.FC = () => {
  return (
    <section className=" text-gray-900">
      {/* HERO */}
      <div className="relative max-sm:pt-16 bg-cover bg-gray-50 h-[80vh] flex items-center justify-center">
       
        <div className="relative z-10 text-center text-black px-4">
          <h1 className="text-4xl text-[#0049AF] font-bold mb-2">Misión y Visión</h1>
          <p className="text-xl  mt-6">Compromiso, eficiencia y desarrollo sostenible para la comunidad</p>
        </div>
      </div>

      {/* SECCIÓN MISION Y VISION */}
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto  py-20 grid md:grid-cols-2 gap-12">
        {/* Misión */}
        <article className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-3 items-center text-center hover:shadow-xl transition">
          <i className="ri-target-fill text-5xl text-blue-600 " />
          <h2 className="text-2xl font-bold mb-4">{institucional.mision.title}</h2>
         {institucional.mision.paragraphs.map((p,i) => (
          <p className="text-gray-700 text-left leading-relaxed" key={i}>{p}</p>
         ))}
        </article>

        {/* Visión */}
        <article className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition gap-3">
       
          <h2 className="text-2xl font-bold mb-4">{institucional.vision.title}</h2>
          {institucional.vision.paragraphs.map((p,i) => (
          <p className="text-gray-700 text-left leading-relaxed" key={i}>{p}</p>
         ))}
        </article>
      </div>

      
    </section>
  );
};
