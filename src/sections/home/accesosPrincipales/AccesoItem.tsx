import { Link } from "react-router-dom"

type Props = {
  label: string
  path: string
  icon: string
}

export default function AccesoItem({ label, path, icon }: Props) {
  return (
    <article
      className="w-44 h-42 mx-auto bg-gray-100 rounded-full transition duration-150 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden
     hover:bg-gradient-to-bl hover:from-blue-500 hover:to-blue-700 hover:text-white"
    >
      <Link
        to={path}
        className="flex flex-col items-center justify-center gap-2 max-w-10/12 mx-auto text-center"
      >
        <i className={`ri-${icon} text-6xl max-sm:text-5xl `} />
        <h3 className="text-sm font-semibold uppercase tracking-wide leading-tight break-words">
          {label}
        </h3>
      </Link>
    </article>
  )
}
