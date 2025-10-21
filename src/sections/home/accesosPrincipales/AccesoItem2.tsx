import { Link } from "react-router-dom"

type Props = {
  label: string
  path: string
  icon: string
}

export default function AccesoItem2({ label, path, icon }: Props) {
  return (
    <Link
      to={path}
      className="group relative isolate  rounded-full mx-auto flex flex-col items-center justify-center"
    >
      <span className="relative z-50 flex flex-col items-center justify-center gap-2 w-10/12 mx-auto text-center text-blue-900 group-hover:text-[#FB5900]/70">
        {/* Ícono con burbuja animada al costado */}
        <i
          className={`ri-${icon} text-6xl max-sm:text-5xl relative z-20
            after:content-[''] after:absolute group-hover:after:top-[50%] after:left-[-2.5rem] after:-translate-y-1/2 
            after:w-10 after:h-10 after:rounded-full after:bg-sky-200/90
            after:transition-all after:duration-700 after:ease-in-out
            group-hover:after:left-1/2 group-hover:after:-translate-x-1/2
            group-hover:after:w-20 group-hover:after:h-20 group-hover:after:bg-[#FB5900]/20
            after:z-10`}
        />

        {/* Texto sin animación */}
        <h3 className="text-sm font-semibold group-hover:text-[#FB5900] transition-all m-4 uppercase tracking-wide leading-tight break-words">
          {label}
        </h3>
      </span>
    </Link>
  )
}