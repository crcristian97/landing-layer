import { motion } from 'framer-motion';

export default function PracticeArea({ icon, title, index }) {
    return (
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="text-center p-4 sm:p-6 md:p-8 shadow-lg rounded-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer"
      >
        <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center text-black">
          <div className="text-2xl sm:text-3xl md:text-4xl">{icon}</div>
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wide">{title}</h3>
      </motion.div>
    );
}