import { About } from "../sections/home/About";
import AccesosPrincipales from "../sections/home/AccesosPrincipales";
import { Hero } from "../sections/home/Hero";
import { Services } from "../sections/home/Services";


export const Home: React.FC = () => {
  return (
    <>
    <Hero/>
    <AccesosPrincipales/>
    <About/>
    <Services/>
    </>

  );
};