export type PopupType = "guardia" | "gerencia" | "serviciosSociales"
export const popupData: Record<PopupType, {
  title: string
  message: string
  numbers: { tel: string; regiones: string; icon: string }[]
}> = {
  guardia: {
    title: "GUARDIA INSTITUCIONAL",
    message: "Teléfonos disponibles para atención urgente",
    numbers: [
      {
        tel: "(03585) 420159 / Cel: (03585) 15407627",
        regiones: "Guardia",
        icon: "shield-cross-line"
      }
    ]
  },
  gerencia: {
    title: "GERENCIA",
    message: "Contacto directo con gerencia institucional",
    numbers: [
      {
        tel: "(03585) 420993",
        regiones: "Gerencia",
        icon: "user-star-line"
      }
    ]
  },
  serviciosSociales: {
    title: "SERVICIOS SOCIALES",
    message: "Consultas y asistencia social",
    numbers: [
      {
        tel: "(03585) 420400",
        regiones: "Servicios sociales",
        icon: "heart-pulse-line"
      }
    ]
  }
}

export const navItems = [
  {
    label: "Cooperativa",
    key: "cooperativa",
    children: [
  {
    label: "Quiénes somos",
    path: "/quienes-somos",
    description: "Historia, valores y raíces comunitarias",
    icon: "user-heart-line"
  },
  {
    label: "Misión y visión",
    path: "/mision-vision",
    description: "Propósito institucional y horizonte estratégico",
    icon: "flag-line"
  },
  {
    label: "Consejo de administración",
    path: "/consejo",
    description: "Representantes elegidos por la comunidad",
    icon: "team-line"
  }
]
  },
  {
    label: "Servicios",
    key: "servicios",
    children: [
  {
    label: "Energía eléctrica",
    path: "/servicios/energia",
    description: "Distribución cooperativa y atención técnica",
    icon: "flashlight-line"
  },
  {
    label: "Agua",
    path: "/servicios/agua",
    description: "Servicio esencial con enfoque sostenible",
    icon: "drop-line"
  },
  {
    label: "Seguro de sangre",
    path: "/servicios/sangre",
    description: "Cobertura solidaria para emergencias médicas",
    icon: "heart-pulse-line"
  },
  {
    label: "Banco ortopédico",
    path: "/servicios/ortopedico",
    description: "Préstamo de elementos para rehabilitación",
    icon: "wheelchair-line"
  },
  {
    label: "Biblioteca popular",
    path: "/servicios/biblioteca",
    description: "Espacio cultural y educativo abierto a todos",
    icon: "book-2-line"
  }
]
  },
  { label: "Autogestión", path: "/autogestion" },
  { label: "Contacto", path: "/contacto" }
]