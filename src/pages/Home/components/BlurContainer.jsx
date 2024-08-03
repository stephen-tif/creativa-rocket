// src/components/BlurContainer.js

import React from 'react';

const BlurContainer = ({ children }) => {
    return (
        <div className="relative isolate px-6 pt-20 lg:px-8 z-10 h-screen">
            {/* Agregando línea difuminada roja */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80 blur-2xl invisible sm:visible">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff0000] to-[#F15F79] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
                />
            </div>
            {/* Agregando fondo con gradient */}
            <div className="absolute inset-0 -z-20 bg-[url('https://wallpaperswide.com/download/startup_office_desk-wallpaper-1024x576.jpg')] bg-cover bg-center blur-sm">
                <div className="absolute inset-0 bg-gradient-to-l from-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.8)] dark:from-[rgba(10,10,10,0.6)] dark:to-[rgba(10,10,10,0.8)]" />
            </div>
            {/* Contenido dinámico */}
            <div data-aos="fade-up">
                {children}
            </div>
        </div>
    );
};

export default BlurContainer;
