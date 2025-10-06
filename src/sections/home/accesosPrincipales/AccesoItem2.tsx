

import { Link } from "react-router-dom"

type Props = {
    label: string
    path: string
    icon: string
}

export default function AccesoItem2({ label, path, icon }: Props) {
    return (
        <article className="flex flex-col items-center gap-2 group cursor-pointer ">

            <div className="relative w-44 h-44  bg-gray-100 border border-slate-300 overflow-hidden  rounded-full">

                {/* burbuja */}
                <div className="absolute
                        pointer-events-none 
                         z-50
                                                 -top-5 left-3
                        w-16 h-16 
                        rounded-full
                        bg-sky-200/90
                        transition-all 
                        duration-900 
                        ease-in-out
                        group-hover:left-1/2 
                        group-hover:top-1/2
                        group-hover:-translate-x-1/2 
                        group-hover:-translate-y-1/2
                        group-hover:w-full 
                        group-hover:h-full
                        group-hover:bg-orange-400/15
                        mix-blend-normal
                        ">
                </div>
                <Link
                    to={path}
                    className="relative z-10 flex flex-col items-center justify-center
               gap-2 w-10/12 mx-auto text-center"
                >
                    <i className={`ri-${icon} text-6xl max-sm:text-5xl `} />
                    <h3 className="text-sm font-semibold uppercase tracking-wide leading-tight break-words">
                        {label}
                    </h3>
                </Link>


            </div>
        </article>
    )
}
