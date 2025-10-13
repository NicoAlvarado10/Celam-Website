

import { Link } from "react-router-dom"

type Props = {
    label: string
    path: string
    icon: string
}

export default function AccesoItem2({ label, path, icon }: Props) {
    return (
        <Link to={path} className="group relative isolate w-44 h-44 border-slate-300  rounded-full mx-auto">
            {/* burbuja */}
            <div
                className="absolute left-2 max-sm:left-10 top-[-20%] max-sm:top-[-10%] w-16 h-16 max-sm:w-10 max-sm:h-10 rounded-full bg-sky-200/90
               transition-all duration-900 ease-in-out
               group-hover:left-1/2 group-hover:top-1/2
               group-hover:-translate-x-1/2 group-hover:-translate-y-[60%]
               group-hover:w-full group-hover:h-full
               group-hover:bg-sky-400/15
               z-20"   // 🔥 siempre encima
            ></div>

            {/* contenido */}
            <span
                className="relative z-50 flex flex-col items-center justify-center
               gap-2 w-10/12 mx-auto text-center text-blue-900"
            >
                <i className={`ri-${icon} text-6xl max-sm:text-5xl `} />
                <h3 className="text-sm font-semibold uppercase tracking-wide leading-tight break-words">
                    {label}
                </h3>
            </span>
        </Link>


    )
}
