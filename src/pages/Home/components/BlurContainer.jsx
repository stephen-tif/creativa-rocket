// src/components/BlurContainer.js

import React from 'react';

const BlurContainer = ({ children }) => {
    return (
        <div className="relative isolate px-6 pt-20 lg:px-8 z-10 h-screen">
            
            {/* Agregando fondo con gradient */}
            <div className="absolute inset-0 -z-20 bg-[url('/imagenes/fondo-principal-blanco.svg')] dark:bg-[url('/imagenes/fondo-principal-negro.svg')] bg-cover bg-center"/>
            <div className="absolute inset-0 -z-20 bg-[url('/imagenes/fondo-principal-burbujas.svg')] sm:opacity-15 opacity-0" />

            {/* Contenido dinámico */}
            <div data-aos="fade-up">
                {children}
            </div>
        </div>
    );
};

export default BlurContainer;
