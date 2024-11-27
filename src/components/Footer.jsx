import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#899B95] text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-mono font-bold">Ferreiro Barbeito</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-2">
                <svg aria-hidden="true" viewBox="0 0 1024 1024" className="w-4 h-4 mt-1 flex-shrink-0 fill-black">
                  <path fillRule="evenodd" clipRule="evenodd" d="M517.802667 612.181333c96.298667-5.12 152.874667-91.946667 181.205333-168.704 45.226667-10.154667 45.226667-71.552 11.349333-97.109333 8.021333-79.744 34.816-194.090667-65.28-198.314667-27.093333-1.109333-43.093333-26.496-145.834666-18.474666-62.592 5.034667-125.056 15.104-163.712 49.450666-39.594667 35.2-37.248 103.296-27.093334 172.458667-34.048 20.48-22.741333 81.834667 22.570667 97.152 28.288 76.629333 90.538667 168.618667 186.794667 163.541333z" />
                </svg>
                <p className="text-sm">Bufete de Abogados Ferreiro Barbeito</p>
              </li>
              <li className="flex items-start space-x-2">
                <svg aria-hidden="true" viewBox="0 0 1024 1024" className="w-4 h-4 mt-1 flex-shrink-0 fill-black">
                  <path fillRule="evenodd" clipRule="evenodd" d="M513.2 898.3c-106.4 0-206.6-9.2-282.3-26.1-88.9-19.9-137.4-47.5-132-83.3 3.7-25 19.5-37.2 58.5-51.6 32.6-12 96.8-27.2 148.5-35.6 12-2 21.4 5.4 23.4 17.3 2 12-6.4 21-18.3 23-44.4 7.2-105.8 20.8-132 31.2-29 11.5-26.2 14.8-26.2 17 0 1.8 0.6 8.9 20.4 18.2 19.2 9 47 17.4 80.4 24.5 71.7 15 165.6 23.3 264.7 23.3 99 0 193-8.3 264.7-23.3 33.5-7 61.3-15.5 80.4-24.5 19.9-9.2 16.2-16.2 17-17.8-1-2-3.7-5.9-32.7-17.3-26.2-10.4-82.4-23.7-126.7-30.9-12-2-20.3-10.3-18.4-22.3 2-12 12.4-20.3 24.4-18.4 51.7 8.3 109 24.3 142 35.5 39.3 13.3 54.8 26.6 58.6 51.8 5.4 35.8-43.2 63.5-132.2 83.2-75.6 16.9-175.8 26.1-282.2 26.1z" />
                </svg>
                <p className="text-sm">Av. Córdoba 1711, 2 "D".CABA. Argentina.</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg sm:text-xl font-mono font-bold">Contacto</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-2">
                <svg aria-hidden="true" viewBox="0 0 1024 1024" className="w-4 h-4 mt-1 flex-shrink-0 fill-black">
                  <path fillRule="evenodd" clipRule="evenodd" d="M702.229 505.85l257.369 208.406V297.444zM599.854 588.749c-25.344 20.528-56.423 30.791-87.498 30.791-31.08 0-62.155-10.264-87.513-30.796l-53.778-43.556L65.846 792.386c2.945 22.208 13.831 41.923 29.75 56.193 7.592 6.805 16.341 12.319 25.868 16.329 10.846 4.566 22.712 7.164 35.207 7.164h711.225c15.817 0 30.632-4.139 43.612-11.24 9.122-4.99 17.365-11.399 24.295-19.056 12.221-13.502 20.449-30.628 22.931-49.554l-305.078-247.04-53.802 43.567zM64.969 297.272v417.157l257.529-208.577z" />
                </svg>
                <a href="javascript:;" className="text-sm hover:underline">
                  consultas@ferreirobarbeito.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg sm:text-xl font-mono font-bold">Enlaces</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <a href="https://maps.app.goo.gl/cRt5b24sD8r6e7iJA" className="text-sm hover:underline">
                  Mapa Web
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-200 text-center">
          <p className="text-xs">
            Copyright © 2024 educacion cristian. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
