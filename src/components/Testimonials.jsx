import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TestimonialCard = ({ testimonial, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`border p-4 sm:p-7 rounded-xl bg-[#899B95] drop-shadow-md border-[#4D445B] 
        ${index === 1 || index === 2 
          ? "col-span-1 sm:col-span-2 lg:col-span-3" 
          : "col-span-1 sm:col-span-2"
        } 
        flex flex-col gap-y-6 sm:gap-y-10 justify-between min-h-[200px] sm:min-h-[250px]`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-col gap-y-2 sm:gap-y-3.5">
        <p className="font-bold text-lg sm:text-xl text-black">{testimonial.title}</p>
        <p className="font-medium text-sm sm:text-base text-black">{testimonial.description}</p>
      </div>
      <div className="flex flex-col">
        <p className="pt-1 sm:pt-2 text-xs sm:text-sm font-semibold text-black">{testimonial.name}</p>
        <p className="text-xs sm:text-sm font-medium text-black">{testimonial.role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      title: "Excelente asesoramiento legal",
      description:
        "El equipo de abogados fue increíblemente profesional y atento. Me ayudaron a resolver mi caso laboral de manera eficiente y siempre me mantuvieron informado.",
      name: "Carlos Rodríguez",
      role: "Cliente - Caso Laboral",
    },
    {
      title: "Resultados excepcionales",
      description:
        "Gracias a su experiencia y dedicación, logramos un acuerdo muy favorable en mi caso de despido injustificado. Su conocimiento del derecho laboral fue fundamental.",
      name: "María González",
      role: "Cliente - Despido Injustificado",
    },
    {
      title: "Atención personalizada",
      description:
        "Me sentí acompañado durante todo el proceso legal. Su compromiso con mi caso y la claridad para explicar cada paso fue realmente valorable.",
      name: "Laura Martínez",
      role: "Cliente - Accidente Laboral",
    },
    {
      title: "Profesionalismo y eficiencia",
      description:
        "Su experiencia en derecho laboral es evidente. Resolvieron mi caso de manera rápida y efectiva, siempre defendiendo mis intereses.",
      name: "Diego Fernández",
      role: "Cliente - Reclamo Salarial",
    },
  ];

  return (
    <div className="bg-[#FFFF]">
      <section className="max-w-5xl mx-auto w-full px-3 sm:px-6 lg:px-10 py-5 sm:py-10">
        <div className="flex items-center justify-center flex-col gap-y-2 py-3 sm:py-5">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-black">
            Lo que dicen nuestros <span className="text-black">clientes</span>
          </h2>
          <p className="text-base sm:text-lg font-medium text-black text-center px-2">
            Conoce las experiencias de quienes confiaron en nosotros
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5 w-full">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;