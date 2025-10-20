import {motion} from "framer-motion"
import Botton from "./Botton"

interface CardBlockProps {
  title: string;
  description: string;
  iconClass?: string;
  link?: {
    label: string;
    href: string;
  };
    delay?: number;
    bgColor?:string
}

export const CardBlock: React.FC<CardBlockProps> = ({
  title,
  description,
  iconClass,
  link,
  delay,
  bgColor
}) => {
  return (
    <motion.article 
    initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
  viewport={{ once: true }}
className={`rounded-xl p-6 shadow hover:shadow-md transition duration-150 hover:scale-105 flex flex-col justify-between ${
    bgColor ?? "bg-gray-100"
  }`}
>
      <div className="flex items-center gap-4 mb-4">
        {iconClass && <i className={`${iconClass} text-3xl`} aria-hidden="true" />}
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      <p className="text-gray-700 leading-relaxed mb-2">{description}</p>

      {link && (
        <span >

    <Botton
     href={link.href}
     variant="primary" 
     delay={0.8}
     className="rounded-md "
  >
    {link.label}
     <i className="ri-arrow-right-line ml-2 text-base" />
  </Botton>
        </span>

      )}
    </motion.article>
  );
};