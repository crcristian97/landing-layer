import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FAQ = ( {questions} ) => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-4 sm:mb-6 md:mb-8">Preguntas Frecuentes</h2>
      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        {questions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b pb-3 sm:pb-4 md:pb-5"
          >
            <button
              className="w-full text-left text-base sm:text-lg md:text-xl font-semibold text-navy-700 dark:text-black hover:text-gray-600 transition-colors duration-200"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 dark:text-black-400 leading-relaxed">
                {item.answer}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
