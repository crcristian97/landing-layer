import React from 'react';
import { motion } from 'framer-motion';
import palacio from '../../img/palacio.webp';

const DespidoCard = () => {
  return (
    <div className="flex justify-center items-center bg-[#899B95] py-6 sm:py-8 md:py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-start rounded-[20px] w-[1200px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none p-4 sm:p-6 md:p-8"
      >
        {/* Lado izquierdo - Imagen */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8"
        >
          <img 
            src={palacio} 
            alt="Palacio de Justicia Argentina"
            title="El Palacio de Justicia de la Nación es un complejo arquitectónico estatal ubicado en Buenos Aire"
            className="w-full h-[200px] md:h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Lado derecho - Contenido */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full md:w-2/3"
        >
          // ... existing header content ...

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              "Indemnización", "Despidos", "Maltrato laboral", "Trabajo en negro",
              "Accidentes laborales", "Mobbing – Acoso laboral", "Diferencias salariales",
              "Horas extras impagas", "Renuncias forzadas", "Discriminación laboral",
              "Cambio de condiciones de trabajo", "Pagos en negro"
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-2 sm:px-3 py-3 sm:py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
              >
                <p className="text-sm sm:text-base font-medium text-navy-700 dark:text-black">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DespidoCard;