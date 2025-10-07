import { About } from "../sections/home/about/About";
import AccesosPrincipales from "../sections/home/accesosPrincipales/AccesosPrincipales";
import { Hero } from "../sections/home/Hero";
import { Services } from "../sections/home/services/Services";


export const HomePage: React.FC = () => {
  return (
    <>
    <Hero/>
    <AccesosPrincipales/>
    <About/>
    <Services/>
    </>

  );
};