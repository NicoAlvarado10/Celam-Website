import { footerContent } from "./footer.config";
import logo from "../../../assets/logo.png"
export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 text-white pt-20 " id="contact">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 grid grid-cols-4 max-sm:grid-cols-1 gap-8  pb-20 ">
        
        {/* Identidad */}
        <div className="flex flex-col gap-4">
          <a className="w-full " href="#">
               <img
              src={logo}
              alt="Logo CELAM"
              className="w-5/12 h-auto object-cover"
            />

            </a>
           
          <p className="text-white/80">
            Cooperativa de Electricidad, Obras y Servicios Públicos Ltda.
          </p>
          <a href="#" className="text-white/80 flex  gap-2"> 
          <i className="ri-map-pin-line"></i>
            {footerContent.identidad.direccion}
            <br />
            {footerContent.identidad.localidad}
          </a>
         
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-medium mb-4">Servicios</h3>
          <ul className="space-y-4 text-white/80">
            {footerContent.servicios.map((servicio, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white transition duration-150">
                  {servicio}
                </a>
              </li>
            ))}

          </ul>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-lg font-medium mb-4">Enlaces </h3>
          <ul className="space-y-4 text-white/80">
           {footerContent.enlaces.map((enlace, i) => (
              <li key={i}>
                <a href={enlace.href} className="hover:text-white">
                  {enlace.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contacto</h3>
          <ul className="flex flex-col gap-4 ">
            {footerContent.contacto.telefonos.map((tel, i) => (
              <li key={i}>
                <a className="text-white/80 hover:text-white transition duration-150" href="#">
                  <i className="ri-phone-line"></i> {tel.label}: {tel.numero}
                </a>
              </li>
            ))}
            <li className="text-white/80 hover:text-white transition duration-150">
              <i className="ri-mail-line"></i> Email:{" "}
              <a
                href={`mailto:${footerContent.contacto.email}`}
                className="underline hover:text-white"
              >
                {footerContent.contacto.email}
              </a>
            </li>

          </ul>
          
         
          <div className="mt-6 flex flex-col ">
            <h3 className="text-base font-medium mb-2">
              Redes 
            </h3>
            <div className="flex items-center gap-4 ">
            {footerContent.redes.map((red, i) => (
                <a
                  key={i}
                  href={red.href}
                  aria-label={red.label}
                  className="hover:text-white"
                >
                  <i className={`${red.icon} text-2xl text-white`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      
      </div>
         <p className="py-4 text-sm text-white/50 text-center"> {footerContent.copyright}
</p>
    </footer>
  );
};