import { navItems } from "../config/nav.config"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export const DropdownMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative z-40">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-white text-lg hover:text-blue-400"
        aria-expanded={open}
      >
        Menú <i className={`ri-arrow-down-s-line transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-0 top-full w-screen bg-white text-black shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-6 p-6 lg:grid-cols-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.key}>
                    <h3 className="font-semibold text-blue-600 mb-2">{item.label}</h3>
                    <ul className="flex flex-col gap-1 text-sm">
                      {item.children.map((sub) => (
                        <li key={sub.path}>
                          <NavLink to={sub.path} className="hover:text-blue-400" onClick={() => setOpen(false)}>
                            {sub.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div key={item.path}>
                    <NavLink to={item.path!} className="font-semibold hover:text-blue-400" onClick={() => setOpen(false)}>
                      {item.label}
                    </NavLink>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}