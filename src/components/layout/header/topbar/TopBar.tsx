
import { useState } from "react"
import { Popup } from "../popup/Popup"
import type { PopupType } from "../config/nav.config"

export const TopBar = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  const [popupType, setPopupType] = useState<PopupType | null>(null)

  return (
    <>
      <div className="backdrop-blur-md shadow-sm border-b p-4 z-50 relative">
        <div className="max-w-10/12 mx-auto max-md:max-w-11/12 flex justify-between items-center">
         <a href="/" className="flex w-full items-center">
  <img
    src="./logo.png"
    alt="Logo CELAM"
    className="w-[140px] max-md:w-[120px] h-auto object-contain"
  />
</a>

          <div className="hidden lg:flex items-center gap-6 w-full justify-end">
            <input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="border rounded px-3 py-1 w-64 mx-auto "
              
            />
           <button
  onClick={() => setPopupType("guardia")}
  className="btn-attention tracking-wide cursor-pointer flex items-center gap-2 text-sm uppercase"
>
  <i className="ri-customer-service-line text-2xl" /> Atención Guardia
</button>

<button
  onClick={() => setPopupType("gerencia")}
  className="btn-attention text-sm tracking-wide cursor-pointer flex items-center gap-2 uppercase"
>
  <i className="ri-briefcase-line text-2xl" /> Atención Gerencia
</button>

<button
  onClick={() => setPopupType("serviciosSociales")}
  className="btn-attention cursor-pointer text-sm tracking-wide flex items-center gap-2 uppercase"
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