import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StateHome = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#899B95] text-gray-900 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 w-full">
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          Nuestro Impacto
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 md:mb-16"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeUpVariants}
        >
          Personas que nos han elegido
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {/* User Count */}
          <motion.div
            className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
          >
            <div className="mb-4 sm:mb-6 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-purple-500 to-[#899B95] p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900" viewBox="0 0 24 24">
                  <path d="M12 5.5A3.5 3.5 0 0 1 15.5 9a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8.5 9A3.5 3.5 0 0 1 12 5.5M5 8c.56 0 1.08.15 1.53.42c-.15 1.43.27 2.85 1.13 3.96C7.16 13.34 6.16 14 5 14a3 3 0 0 1-3-3a3 3 0 0 1 3-3m14 0a3 3 0 0 1 3 3a3 3 0 0 1-3 3c-1.16 0-2.16-.66-2.66-1.62a5.54 5.54 0 0 0 1.13-3.96c.45-.27.97-.42 1.53-.42M5.5 18.25c0-2.07 2.91-3.75 6.5-3.75s6.5 1.68 6.5 3.75V20h-13zM0 20v-1.5c0-1.39 1.89-2.56 4.45-2.9c-.59.68-.95 1.62-.95 2.65V20zm24 0h-3.5v-1.75c0-1.03-.36-1.97-.95-2.65c2.56.34 4.45 1.51 4.45 2.9z"></path>
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">2,500 +</div>
            <div className="text-sm sm:text-base text-gray-500">Clientes Atendidos</div>
          </motion.div>

          {/* Documents Count */}
          <motion.div
            className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
          >
            <div className="mb-4 sm:mb-6 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-purple-500 to-[#899B95] p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900" viewBox="0 0 24 24">
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 2h7v5h5v11H6zm2 8v2h8v-2zm0 4v2h5v-2z"></path>
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">1,200 +</div>
            <div className="text-sm sm:text-base text-gray-500">Documentos y Papeles Procesados</div>
          </motion.div>

          {/* Languages Supported */}
          <motion.div
            className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeUpVariants}
          >
            <div className="mb-4 sm:mb-6 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-purple-500 to-[#899B95] p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900" viewBox="0 0 24 24">
                  <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41a7.984 7.984 0 0 1 2.9 12.8M11 19.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></path>
                </svg>
              </div>
            </div>
            <div className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-gray-800">50 +</div>
            <div className="text-sm sm:text-base text-gray-500">Casos Resueltos</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StateHome;