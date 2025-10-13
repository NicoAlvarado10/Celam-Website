
import { useState } from "react"
import { Popup } from "../popup/Popup"
import type { PopupType } from "../config/nav.config"
import logo from "../../../../assets/logo.png";


export const TopBar = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  const [popupType, setPopupType] = useState<PopupType | null>(null)

  return (
    <>
      <div className="backdrop-blur-md bg-[#0049AF] shadow-sm  p-4 max-md:px-0 max-md:py-2 z-50 relative">
        <div className="max-w-10/12 mx-auto max-md:max-w-11/12 flex justify-between gap-6 items-center">
         <a href="/" className="flex w-full items-center">
  <img
    src={logo}
    alt="Logo CELAM"
    className="w-[170px] max-md:w-[120px] max-lg:w-[100px] h-auto object-contain"
  />
        </a>

 <div className="hidden lg:flex w-7/12  justify-center ">
      <div className="relative w-full max-w-md bg-white border rounded-2xl px-4 py-2 shadow-sm">
        <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="w-full bg-transparent pl-8 pr-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>

          <div className="hidden lg:flex items-center gap-6 w-full justify-end">
           
           <button
  onClick={() => setPopupType("guardia")}
  className="btn-attention tracking-wide cursor-pointer flex items-center  text-sm uppercase"
>
  <i className="ri-customer-service-line text-2xl" /> Atención Guardia
            </button>

            <button
  onClick={() => setPopupType("gerencia")}
  className="btn-attention text-sm tracking-wide cursor-pointer flex items-center  uppercase"
>
  <i className="ri-briefcase-line text-2xl" /> Atención Gerencia
            </button>

            <button
  onClick={() => setPopupType("serviciosSociales")}
  className="btn-attention cursor-pointer text-sm tracking-wide flex items-center uppercase"
>
  <i className="ri-hand-heart-line text-2xl" /> Servicios Sociales
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-4 text-2xl text-white">
            <button className="cursor-pointer" onClick={() => setPopupType("guardia")} aria-label="Guardia">
              <i className="ri-customer-service-line" />
            </button>
            <button className="cursor-pointer" onClick={() => setPopupType("gerencia")} aria-label="Gerencia">
              <i className="ri-briefcase-line" />
            </button>
            <button className="cursor-pointer" onClick={() => setPopupType("serviciosSociales")} aria-label="Servicios Sociales">
              <i className="ri-hand-heart-line" />
            </button>
            <button className="cursor-pointer text-3xl" onClick={onMenuToggle} aria-label="Abrir menú">
              <i className="ri-menu-line" />
            </button>
          </div>
        </div>
      </div>

      {popupType && <Popup type={popupType} onClose={() => setPopupType(null)} />}
    </>
  )
}