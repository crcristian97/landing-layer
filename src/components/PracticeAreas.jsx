import PracticeArea from './PracticeArea';
import { BarChartHorizontal, ScaleIcon as Scales, Clock, UserCheck } from 'lucide-react';

export default function PracticeAreas() {
  return (
    <section className="bg-[#899B95] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center text-black">
          Nuestras áreas de práctica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          <PracticeArea icon={<BarChartHorizontal className="w-6 h-6 sm:w-8 sm:h-8" />} title="ABOGACÍA" index={0} />
          <PracticeArea icon={<Scales className="w-6 h-6 sm:w-8 sm:h-8" />} title="JUSTICIA PENAL" index={1} />
          <PracticeArea icon={<Clock className="w-6 h-6 sm:w-8 sm:h-8" />} title="EMPLEO" index={2} />
          <PracticeArea icon={<UserCheck className="w-6 h-6 sm:w-8 sm:h-8" />} title="DERECHOS HUMANOS" index={3} />
        </div>
      </div>
    </section>
  );
}