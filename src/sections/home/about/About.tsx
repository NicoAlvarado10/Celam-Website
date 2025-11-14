import { CardBlock } from "../../../components/common/CardBlock";
import { aboutContent } from "./about.config";
import {motion} from "framer-motion"
export const About: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900 py-20" id="about">
      <div className="max-w-10/12 max-xl:max-w-11/12 mx-auto space-y-16">

        <div className="text-center">
          <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0 }}
    className="text-3xl md:text-4xl text-primary tracking-tight font-semibold mb-2"
  >
    Nuestra Cooperativa
  </motion.h2>
  <motion.div 
  initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
  className="h-1 bg-secondary w-24 my-2  mx-auto"></motion.div>


  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="text-xl text-black"
  >
    CELAM es más que energía: somos comunidad, compromiso y visión compartida.
  </motion.p>

        </div>

        <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1  gap-8">
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