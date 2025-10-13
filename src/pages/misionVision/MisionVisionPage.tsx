import { institucional } from "./misionVision.config";
import { motion } from "framer-motion";

export const MisionVisionPage: React.FC = () => {
  return (
    <section className="text-gray-900 bg-white">
      {/* HERO */}
      <div className="relative bg-gray-50 h-[140vh] max-md:h-full flex items-center flex-col justify-center gap-10 pt-30">
        <div
          className="relative z-10 text-center px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl max-sm:text-3xl font-bold mb-4 tracking-tight text-blue-700">
            Misión y Visión
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay:0.2 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Compromiso, eficiencia y desarrollo sostenible para la comunidad
          </motion.p>
        </div>
      {/* SECCIÓN MISION Y VISION */}
      <div className="max-w-screen-xl mx-auto  px-4 pb-8 grid md:grid-cols-2 gap-12">
        {/* Misión */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-6 hover:shadow-lg transition-all"
        >

          <h2 className="text-2xl font-bold text-center">{institucional.mision.title}</h2>
          <div className="space-y-4 text-gray-700 text-left leading-relaxed">
            {institucional.mision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.article>

        {/* Visión */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white shadow-md rounded-xl p-8 flex flex-col gap-6 hover:shadow-lg transition-all"
        >

          <h2 className="text-2xl font-bold text-center">{institucional.vision.title}</h2>
          <div className="space-y-4 text-gray-700 text-left leading-relaxed">
            {institucional.vision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.article>
      </div>
      </div>

    </section>
  );
};