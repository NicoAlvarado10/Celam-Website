import {motion} from "framer-motion"

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
         <a
    href={link.href}
    className="self-start inline-flex items-center gap-2 text-sm font-medium text-white bg-[#0049AF] px-4 py-2 rounded-md hover:bg-[#003b8e] transition-colors"
  >
    {link.label}
    <i className="ri-arrow-right-line text-base" />
  </a>

      )}
    </motion.article>
  );
};