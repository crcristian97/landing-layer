import React from 'react';

const DespidoHeader = ({img, title, alt}) => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[40vh] sm:h-[45vh] md:h-[50vh] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={img}
            alt={alt}
            title={title}
            className="object-cover object-center w-full h-full object-[center_35%]"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4">Despidos</h1>
          
        </div>
      </div>
      
    );
  };

export default DespidoHeader;
