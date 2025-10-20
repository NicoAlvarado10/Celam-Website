import { motion } from "framer-motion";
import React from "react";

interface BottonProps {
  href?: string;
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
    ? "bg-[#0049AF] text-white focus:ring-[#0049AF]"
    : "border-2 border-[#0049AF] text-[#0049AF] focus:ring-[#0049AF] hover:border-blue-500 hover:text-white";

  const progressBarClasses =
    "absolute left-0 top-0 h-full w-0 transition-all duration-500 ease-out group-hover:w-full z-0 bg-[#3B82F6]";

  return (
    <motion.a
      href={href}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {/* Barra de relleno animada */}
      <span className={progressBarClasses} />
      {/* Texto */}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
