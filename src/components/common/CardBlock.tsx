import { motion } from "framer-motion";
import Botton from "./Botton";

interface CardBlockProps {
  title: string;
  description: string;
  iconClass?: string;
  link?: {
    label: string;
    href: string;
  };
  delay?: number;
  bgColor?: string;
  imageSrc?: string;
  variant?: "default" | "imageTop";
}

export const CardBlock: React.FC<CardBlockProps> = ({
  title,
  description,
  iconClass,
  link,
  delay,
  bgColor,
  imageSrc,
  variant = "default",
}) => {
  const isImageTop = variant === "imageTop";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className={`rounded-xl shadow  hover:shadow-md transition duration-150 flex flex-col  overflow-hidden group ${
        bgColor ?? "bg-gray-100"
      }`}
    >
      {isImageTop && imageSrc && (
        <div className="overflow-hidden h-48">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      )}

      <div className={`p-6 flex flex-col  `}>
        <div className="flex items-center gap-4 mb-4">
          {iconClass && !isImageTop && (
            <i className={`${iconClass} text-3xl`} aria-hidden="true" />
          )}
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-700 leading-relaxed mb-4">{description}</p>

        {link && (
          <span>

          <Botton
            href={link.href}
            variant="gradient"
            delay={0.8}
            className="rounded-md"
          >
            {link.label}
            <i className="ri-arrow-right-line ml-2 text-base" />
          </Botton>
          </span>
        )}
      </div>
    </motion.article>
  );
};