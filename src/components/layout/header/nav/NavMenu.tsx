import { navItems } from "../config/nav.config"; 
import { Link } from "react-router-dom"

export const NavMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`fixed inset-0 bg-black text-white top-4/12  py-6 transition-transform duration-500 z-40 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
     

      <ul className="flex flex-col gap-4 bg-[#0049AF] p-4  text-base font-medium mt-4">
        {navItems.map((item) =>
          item.children ? (
            <li className="" key={item.key}>
              <span className="text-lg">{item.label}</span>
              <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                {item.children.map((subItem) => (
                  <li key={subItem.path}>
                    <Link to={subItem.path} className="hover:underline" onClick={onClose}>
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.path}>
              <Link to={item.path} className=" text-lg" onClick={onClose}>
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

     
    </div>
  )
}