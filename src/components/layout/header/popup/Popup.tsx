import { popupData,  } from "../config/nav.config"
import type { PopupType } from "../config/nav.config"
import {motion} from "framer-motion"
import { useEffect } from "react";

interface Props {
  type: PopupType
  onClose: () => void
}

export const Popup = ({ type, onClose }: Props) => {
  const data = popupData[type]

useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const popupElement = document.getElementById("popup-content");
    if (popupElement && !popupElement.contains(event.target as Node)) {
      onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 h-screen flex justify-center items-center z-50 ">
      <motion.div
      id="popup-content"
      initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, ease: "easeOut" }}

      className="bg-white text-black px-8   py-10 rounded-2xl shadow-2xl max-w-md max-sm:max-w-11/12 mx-auto w-full relative">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
          aria-label="Cerrar popup"
        >
          <i className="ri-close-line bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition" />
        </button>

        {/* Título y mensaje */}
        <div className="flex flex-col items-center mb-6">
         
          <h2 className="text-xl font-semibold text-center normal-case">{data.title}</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">{data.message}</p>
        </div>

        {/* Lista de contactos con íconos personalizados */}
        <ul className="text-sm text-left space-y-4">
          {data.numbers.map((n, i) => (
            <li key={i} className="flex items-start gap-3">
              <i className={`ri-${n.icon} text-blue-500 text-2xl mt-1`} />
              <div>
                <span className="font-medium text-[15px]">{n.tel}</span><br />
                <span className="text-xs text-gray-500">{n.regiones}</span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}