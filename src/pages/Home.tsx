import { About } from "../sections/About";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";


export const Home: React.FC = () => {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    </>

  );
};