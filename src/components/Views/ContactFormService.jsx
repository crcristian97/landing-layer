import React from 'react';

const ContactFormService = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-4">
          <div className="mb-4 sm:mb-6 md:mb-8 max-w-3xl text-center sm:text-center md:mx-auto">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wide text-black">
              Contacto
            </p>
            <h2 className="font-heading mb-2 sm:mb-4 font-bold tracking-tight text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Dejanos tu consulta
            </h2>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
            <div className="h-full pr-0 sm:pr-4 md:pr-6">
              <ul className="mb-4 sm:mb-6 md:mb-0 space-y-4 sm:space-y-6">
                <li className="flex items-start">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded bg-black text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-medium leading-6 text-black">Nuestra Dirección</h3>
                    <p className="text-sm sm:text-base text-black">Av. Córdoba 1711, 2 "D".</p>
                    <p className="text-sm sm:text-base text-black">CABA. Argentina.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded bg-black text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-medium leading-6 text-black">Contacto</h3>
                    <p className="text-sm sm:text-base text-black">Telefono: 15-6135-4594</p>
                    <p className="text-sm sm:text-base text-black">Telefono: 15-3242-8183</p>
                    <p className="text-sm sm:text-base text-black">Telefono: (5411) 5811-1484</p>
                    <p className="text-sm sm:text-base text-black">Mail: consultas@ferreirobarbeito.com.ar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded bg-black text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="mb-1 sm:mb-2 text-base sm:text-lg font-medium leading-6 text-black">Horarios de Atención</h3>
                    <p className="text-sm sm:text-base text-black">Lunes a Viernes: 08:00 - 17:00</p>
                    <p className="text-sm sm:text-base text-black">Sábado y Domingo: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit p-4 sm:p-6 md:p-8 bg-[#899B95] rounded-lg shadow-lg" id="form">
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-black">Dejanos tu consulta</h2>
              <form id="contactForm" className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="given-name"
                    placeholder="Tu nombre"
                    className="w-full rounded-md border border-gray-300 py-1.5 sm:py-2 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-black focus:ring-1 focus:ring-black"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Tu email"
                    className="w-full rounded-md border border-gray-300 py-1.5 sm:py-2 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-black focus:ring-1 focus:ring-black"
                    name="email"
                  />
                </div>
                <div>
                  <label htmlFor="textarea" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Consulta</label>
                  <textarea
                    id="textarea"
                    name="textarea"
                    rows="4"
                    placeholder="Escribe tu consulta"
                    className="w-full rounded-md border border-gray-300 py-1.5 sm:py-2 px-3 sm:px-4 text-sm sm:text-base shadow-sm focus:border-black focus:ring-1 focus:ring-black"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-md font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormService;
