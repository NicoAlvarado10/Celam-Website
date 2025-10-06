

import { Link } from "react-router-dom"

type Props = {
    label: string
    path: string
    icon: string
}

export default function AccesoItem2({ label, path, icon }: Props) {
    return (
        <div className="group relative isolate w-44 h-44 border-slate-300  rounded-full ">
            {/* burbuja */}
            <div
                className="absolute left-0 top-0 w-16 h-16 rounded-full bg-sky-200/90
               transition-all duration-900 ease-in-out
               group-hover:left-1/2 group-hover:top-1/2
               group-hover:-translate-x-1/2 group-hover:-translate-y-1/2
               group-hover:w-full group-hover:h-full
               group-hover:bg-orange-400/15
               z-20"   // 🔥 siempre encima
            ></div>

            {/* contenido */}
            <Link
                to={path}
                className="relative z-10 flex flex-col items-center justify-center
               gap-2 w-10/12 mx-auto text-center text-blue-900"
            >
                <i className={`ri-${icon} text-6xl max-sm:text-5xl `} />
                <h3 className="text-sm font-semibold uppercase tracking-wide leading-tight break-words">
                    {label}
                </h3>
            </Link>
        </div>


    )
}
