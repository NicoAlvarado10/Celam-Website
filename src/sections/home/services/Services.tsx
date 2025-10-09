import { servicesContent } from "./services.config";
import { CardBlock } from "../../../components/common/CardBlock";

export const Services: React.FC = () => {


  return (
    <section className=" text-gray-900 py-20 " id="services">
      <div className="max-w-10/12 max-sm:max-w-11/12 mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl max-sm:text-3xl font-bold">Nuestros Servicios</h2>
          <p className=" text-gray-600 text-xl mt-6">
            CELAM acompaña a la comunidad con soluciones esenciales, humanas y sostenibles.
          </p>
        </header>

      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:px-4 gap-4">
         {servicesContent.items.map((service, index) => (
    <CardBlock
      key={index}
      title={service.title} 
      description={service.description}
      iconClass={service.iconClass}
      link={service.link}
       delay={index * 0.3}
    />
  ))}


        </div>  
      </div>
    </section>
  );
};