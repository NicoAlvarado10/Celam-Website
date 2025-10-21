import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BottonProps {
  href?: string; // URL interna o externa
  children: React.ReactNode;
  variant?: "primary" | "outline";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Botton({
  href = "#",
  children,
  variant = "primary",
  delay = 0,
  duration = 0.5,
  className = "",
}: BottonProps) {
  const isPrimary = variant === "primary";

  const baseClasses =
    "relative overflow-hidden inline-block px-4 py-2 shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 group";

  const variantClasses = isPrimary
    ? "bg-primary text-white focus:ring-primary"
    : "border-2 border-primary text-primary focus:ring-primary hover:border-blue-500 hover:text-white";

  const progressBarClasses =
    "absolute left-0 top-0 h-full w-0 transition-all duration-500 ease-out group-hover:w-full z-0 bg-[#3B82F6] pointer-events-none";

  const isInternal = href?.startsWith("/");


  const MotionLink = motion(Link);
  const MotionA = motion.a;

  const MotionComponent = isInternal ? MotionLink : MotionA;


  const componentProps = isInternal
    ? { to: href }
    : { href: href, target: "_blank", rel: "noopener noreferrer" };

  return (
    <MotionComponent
      {...componentProps}
      className={`${baseClasses} ${variantClasses} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
    >
 
      <span className={progressBarClasses} />
   
      <span className="relative z-10">{children}</span>
    </MotionComponent>
  );
}
