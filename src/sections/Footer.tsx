import logo from "../../public/logo.png"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 text-white pt-20 " id="contact">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 grid grid-cols-4 max-sm:grid-cols-1 gap-8  pb-20 ">
        
        {/* Identidad */}
        <div className="flex flex-col gap-4">
          <a className="w-full " href="#">
                <img className="w-5/12  h-auto object-cover" src={logo} alt="Logo de CELAM" />
            </a>
           
          <p className="text-white/80">
            Cooperativa de Electricidad, Obras y Servicios Públicos Ltda.
          </p>
          <a href="#" className="text-white/80 flex  gap-2"><i className="ri-map-pin-line"></i>General Paz y Sarmiento - CP 5843 <br /> Adelia María, Córdoba, Argentina</a>
         
        </div>

        {/* Servicios */}
        <div>
          <h3 className="text-lg font-medium mb-4">Servicios</h3>
          <ul className="space-y-4 text-white/80">
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Energía eléctrica
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Agua
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Banco ortopédico
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Seguro de sangre
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Biblioteca pública
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Servicios sociales
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Residencias universitarias
              </a>
              </li>
            <li>
              <a className="text-white/80 hover:text-white transition duration-150" href="#">
              Cementerio Parque CELAM
              </a>
              </li>
          </ul>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-lg font-medium mb-4">Enlaces </h3>
          <ul className="space-y-4 text-white/80">
            <li><a href="#" className="hover:text-white">ERSEP</a></li>
            <li><a href="#" className="hover:text-white">Seguridad eléctrica</a></li>
            <li><a href="#" className="hover:text-white">Requisitos para conexión</a></li>
            <li><a href="#" className="hover:text-white">Declaración de artefactos</a></li>
            <li><a href="#" className="hover:text-white">Diseño de pilar</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contacto</h3>
          <ul className="flex flex-col gap-4 ">
            <li><a className="text-white/80 hover:text-white transition duration-150" href="#"> <i className="ri-phone-line"></i> Guardia: (03585) 420159 / Cel: (03585) 15407627</a></li>
            <li><a className="text-white/80 hover:text-white transition duration-150" href="#"> <i className="ri-phone-line"></i>  Gerencia: (03585) 420993</a></li>
            <li><a className="text-white/80 hover:text-white transition duration-150" href="#"> <i className="ri-phone-line"></i> Servicios sociales: (03585) 420400</a></li>
            <li className="text-white/80 hover:text-white transition duration-150"><i className="ri-mail-line"></i> Email: <a href="mailto:celam@amaria.com.ar" className="underline hover:text-white">celam@amaria.com.ar</a></li>
          </ul>
          
         
          <div className="mt-6 flex flex-col ">
            <h3 className="text-base font-medium mb-2">
              Redes 
            </h3>
            <div className="flex items-center gap-4 ">
            <a href="#" aria-label="Facebook" className="hover:text-white"><i className="ri-facebook-fill text-2xl text-white"></i></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><i className="ri-instagram-line text-2xl text-white"></i></a>

            </div>
          </div>
        </div>
      
      </div>
         <p className="py-4 text-sm text-white/50 text-center">Copyright © 2025 All rights reserved</p>
    </footer>
  );
};