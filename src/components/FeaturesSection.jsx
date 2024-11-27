export default function FeaturesSection() {
    return (
      <section className="bg-[#3D3147] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <Feature title="El enfoque personal es nuestro objetivo principal" description="Nuestro equipo es nuestra principal ventaja. Contamos con abogados experimentados en diversas áreas del derecho." />
          <Feature title="Resultados exitosos como señal de éxito" description="Siempre logramos un resultado positivo porque siempre encontramos una solución." />
          <Feature title="El tiempo es una prioridad" description="Valoramos tu tiempo y resolvemos tus problemas lo más rápido posible." />
        </div>
      </section>
    );
  }
  
  function Feature({ title, description }) {
    return (
      <div className="text-center p-4 sm:p-6 hover:bg-[#4D405A] rounded-lg transition-colors duration-300">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-300">{description}</p>
      </div>
    );
  }