import { CardBlock } from "../../../components/common/CardBlock";
import { aboutContent } from "./about.config";
import {motion} from "framer-motion"
export const About: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20" id="about">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto space-y-16">

        <div className="text-center">
          <motion.h1
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0 }}
    className="text-3xl md:text-4xl font-bold mb-4"
  >
    Nuestra Cooperativa
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-xl text-gray-700"
  >
    CELAM es más que energía: somos comunidad, compromiso y visión compartida.
  </motion.p>

        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-4 gap-8">
         {aboutContent.cards.map((card, i) => (
    <CardBlock
      key={i}
      title={card.title}
      description={card.description}
      iconClass={card.icon}
      link={card.link}
       delay={i * 0.3}
      
    />
  ))}


        </div>
      </div>
    </section>
  );
};