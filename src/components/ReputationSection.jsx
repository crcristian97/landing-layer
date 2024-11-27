import Button from './Button';
import statuelayer from '../img/justice.png';

export default function ReputationSection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Using Our Reputation To Help You</h2>
          <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 max-w-xl mx-auto md:mx-0">
            By cooperating with us, you receive the support of highly qualified specialists, which ensures a high probability of success.
          </p>
          <Button className="bg-[#C9A95F] hover:bg-[#B8983E] text-black text-sm sm:text-base">
            ABOUT US
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={statuelayer}
            alt="Statue of Justice"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
