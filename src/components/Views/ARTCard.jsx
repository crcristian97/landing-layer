import React from 'react';
import { Users, Shield, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const ArtCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
      <motion.div 
        className="rounded overflow-hidden shadow-lg bg-white p-6"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex flex-col items-center text-center">
          <Users className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">¿Qué es la ART?</h2>
          <p className="text-gray-600 text-sm">
            La Aseguradora de Riesgos de Trabajo (ART) es una entidad encargada de garantizar la cobertura de accidentes laborales y
            enfermedades profesionales.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="rounded overflow-hidden shadow-lg bg-white p-6"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col items-center text-center">
          <Shield className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Cobertura</h2>
          <p className="text-gray-600 text-sm">
            Los empleadores están obligados a contratar una ART para sus empleados, asegurando protección en el ámbito laboral.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="rounded overflow-hidden shadow-lg bg-white p-6"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          <FileText className="w-16 h-16 text-gray-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Beneficios</h2>
          <p className="text-gray-600 text-sm">
            Proporciona una red de seguridad para proteger la salud y bienestar de los trabajadores en caso de incidentes laborales.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtCard;
