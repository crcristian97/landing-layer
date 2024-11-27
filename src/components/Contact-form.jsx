import { useState } from 'react';
import { CheckIcon } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const features = [
    'Consulta gratuita para el trabajador',
    'Atención personalizada', 
    'Rapidez en nuestra respuesta'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">¿POR QUÉ ELEGIRNOS?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
              Ofrecemos un servicio de excelencia, honestidad y transparencia.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              Buscamos la mejor solución a tu problema y en el menor tiempo posible.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mt-3 sm:mt-4">
              ¡Le damos una atención inmediata y personalizada a tu consulta!
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">TE BRINDAMOS</h3>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border flex items-center justify-center">
                    <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#899B95]" />
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-[#899B95] rounded-lg p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="text-black text-sm sm:text-base mb-4 sm:mb-6">
              Dejanos tu consulta para que un especialista se comunique con vos
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-xs sm:text-sm text-black">
                  Nombre <span className="text-red-400">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md w-full text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-xs sm:text-sm text-black">
                  Apellidos
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md w-full text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs sm:text-sm text-black">
                Mail <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md w-full text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-xs sm:text-sm text-black">
                Teléfono
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md w-full text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs sm:text-sm text-black">
                Mensaje <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white text-gray-800 px-3 sm:px-4 py-2 rounded-md w-full min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-white text-black text-sm sm:text-base font-semibold rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
