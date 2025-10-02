import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { navItems } from "./config/nav.config"
import { TopBar } from "./topbar/TopBar" 
import { NavMenu } from "./nav/NavMenu" 
import { motion, AnimatePresence } from "framer-motion"

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      setOpenDropdown(null) 
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition backdrop-blur-md ${
        scrolled ? "bg-black lg:bg-black/50 lg:backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <TopBar onMenuToggle={() => setIsOpen(!isOpen)} />

      <nav className="max-w-10/12 mx-auto flex justify-center gap-20 items-center lg:py-6 lg:px-0 relative max-lg:max-w-full">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium relative">
          {navItems.map((item) =>
            item.children ? (
              <li
                key={item.key}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown(item.key)}
                  className="flex items-center gap-1 cursor-pointer text-lg hover:text-blue-500 text-white"
                  aria-expanded={openDropdown === item.key}
                >
                  {item.label} <i className="ri-arrow-down-s-line text-base" />
                </button>

               <AnimatePresence>
  {openDropdown === item.key && (
    <motion.ul
      initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full left-0 mt-4 bg-white text-black py-6 px-6 shadow-xl text-sm grid grid-cols-2 gap-4 z-10 min-w-[600px] origin-top rounded-md"
    >
      {item.children.map((subItem, index) => (
       <motion.li
    key={subItem.path}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
  >
    <NavLink
      to={subItem.path}
      className="flex items-start gap-3 hover:text-blue-600 transition"
      onClick={() => setOpenDropdown(null)}
    >
      <i className={`ri-${subItem.icon} text-2xl text-blue-500 mt-1`} />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold leading-tight normal-case">
          {subItem.label}
        </span>
        <span className="text-sm text-gray-500">{subItem.description}</span>
      </div>
    </NavLink>
  </motion.li>

      ))}
    </motion.ul>
  )}
               </AnimatePresence>
              </li>
            ) : (
              <li key={item.path}>
                <NavLink to={item.path} className="hover:text-blue-500 text-lg">
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <NavMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}