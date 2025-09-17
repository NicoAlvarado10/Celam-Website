import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition backdrop-blur ${
        scrolled ? "bg-black md:bg-black/50 md:backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-10/12 mx-auto flex justify-between items-center py-6 px-4 md:px-0 relative max-md:max-w-full">
        {/* Logo */}
        <a href="/" className="w-40">
          <img src={logo} alt="Logo de CELAM" className="w-full h-auto object-contain" />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <i className={`ri-menu-line ${isOpen ? "hidden" : "block"}`} />
          <i className={`ri-close-line ${isOpen ? "block" : "hidden"}`} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium relative">
          {/* Cooperativa */}
          <li
            className="relative group"
            onMouseEnter={() => setOpenDropdown("cooperativa")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("cooperativa")}
              className="flex items-center gap-1 cursor-pointer text-lg hover:text-blue-500 text-white"
            >
              Cooperativa <i className="ri-arrow-down-s-line text-base" />
            </button>
            {openDropdown === "cooperativa" && (
              <ul className="absolute top-full left-0 bg-white text-black py-2 px-4 shadow-lg text-sm flex flex-col gap-2 z-10 min-w-[200px]">
                <li>
                  <NavLink to="/quienes-somos" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Quiénes somos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mision-vision" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Misión y visión
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/consejo" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Consejo de administración
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Servicios */}
          <li
            className="relative group"
            onMouseEnter={() => setOpenDropdown("servicios")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("servicios")}
              className="flex items-center gap-1 cursor-pointer text-lg hover:text-blue-500 text-white"
            >
              Servicios <i className="ri-arrow-down-s-line text-base" />
            </button>
            {openDropdown === "servicios" && (
              <ul className="absolute top-full left-0 bg-white text-black py-2 px-4 shadow-lg text-sm flex flex-col gap-2 z-10 min-w-[200px]">
                <li>
                  <NavLink to="/servicios/energia" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Energía eléctrica
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/agua" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Agua
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/sangre" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Seguro de sangre
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/ortopedico" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Banco ortopédico
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/servicios/biblioteca" className="hover:text-blue-500" onClick={() => setOpenDropdown(null)}>
                    Biblioteca popular
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/autogestion" className="hover:text-blue-500 text-lg">
              Autogestión
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className="hover:text-blue-500 text-lg">
              Contacto
            </NavLink>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#"><i className="ri-instagram-line text-2xl hover:text-blue-500" /></a>
          <a href="#"><i className="ri-facebook-fill text-2xl hover:text-blue-500" /></a>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white px-6 py-4 md:hidden shadow-lg">
            <ul className="flex flex-col gap-4 text-base font-medium">
              <li>
                <span className="text-lg">Cooperativa</span>
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                  <li>
                    <Link to="/quienes-somos" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Quiénes somos
                    </Link>
                  </li>
                  <li>
                    <Link to="/mision-vision" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Misión y visión
                    </Link>
                  </li>
                  <li>
                    <Link to="/consejo" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Consejo de administración
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <span className="text-lg">Servicios</span>
                <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                  <li>
                    <Link to="/servicios/energia" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Energía eléctrica
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/agua" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Agua
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/sangre" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Seguro de sangre
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/ortopedico" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Banco ortopédico
                    </Link>
                  </li>
                  <li>
                    <Link to="/servicios/biblioteca" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>
                      Biblioteca popular
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/autogestion" className="hover:text-gray-300 text-lg" onClick={() => setIsOpen(false)}>
                  Autogestión
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-gray-300 text-lg" onClick={() => setIsOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-4 ml-1">
              <a href="#"><i className="ri-instagram-line text-xl hover:text-blue-500" /></a>
              <a href="#"><i className="ri-facebook-fill text-xl hover:text-blue-500" /></a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
