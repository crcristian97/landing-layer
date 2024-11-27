import Button from './Button';
import martillo from '../img/martillo.webp';

export default function HeroSection() {
  return (
    <section className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
       <img
        src={martillo}
        alt="Mazo judicial simbolizando autoridad y la búsqueda de justicia imparcial en los tribunales."
        title="Mazo judicial simbolizando autoridad y la búsqueda de justicia imparcial en los tribunales."
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="text-white max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
            Estudio jurídico especializado en derecho laboral
          </h1>
          <Button className="bg-[#899B95] hover:bg-[#707F7A] text-white text-sm sm:text-base md:text-lg">
            CONTACTANOS
          </Button>
        </div>
      </div>
    </section>
  );
}
