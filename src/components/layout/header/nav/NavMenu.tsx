import { useState } from "react";
import { navItems } from "../config/nav.config";
import { Link } from "react-router-dom";

export const NavMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const toggleMenu = (key: string) => setOpenMenu(openMenu === key ? null : key);

  return (
    <div
      className={`fixed inset-0 bg-black/90 backdrop-blur-sm text-white pt-16 transition-transform duration-500 z-40 lg:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="flex flex-col bg-primary p-4 px-3 uppercase  font-medium">
        {navItems.map((item) =>
          item.children ? (
            <li key={item.key} >
              <button
                className="w-full flex justify-between uppercase items-center text-left  py-2 px-2 rounded-md cursor-pointer hover:bg-primary-light/20 transition-colors"
                onClick={() => toggleMenu(item.key)}
              >
                <span className="flex items-center   gap-2">
                 
                  {item.label}
                </span>

                <i
                  className={`ri-arrow-right-s-line text-lg transition-transform duration-300 ${
                    openMenu === item.key ? "rotate-90" : ""
                  }`}
                />
              </button>

              <ul
                className={`ml-2 mt-2 flex flex-col  overflow-hidden transition-all duration-300 ${
                  openMenu === item.key ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0 "
                }`}
              >
                {item.children.map((subItem) => (
                  <li key={subItem.path} >
                    <Link
                      to={subItem.path}
                      onClick={onClose}
                      className="flex items-start  gap-3 p-2 rounded-md hover:bg-primary-light/15 transition-colors"
                    >
                      <i className={`ri-${subItem.icon} text-lg`}></i>

                      <div className="flex flex-col leading-tight">
                        <span className="text-sm">{subItem.label}</span>
                        <span className="text-sm normal-case opacity-90">{subItem.description}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.path} className=" pb-2 ">
              <Link
                to={item.path}
                onClick={onClose}
                className="flex items-center  py-2 px-2 rounded-md hover:bg-primary-light/20 transition-colors"
              >
              
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
