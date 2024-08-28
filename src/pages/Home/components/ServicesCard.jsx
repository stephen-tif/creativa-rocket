import React, { useState, useEffect } from "react";
import 'atropos/css';
import Atropos from 'atropos/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesCard = ({ title, description, imageUrl }) => {
    // Estado para controlar si Atropos está habilitado
    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
        // Inicializar AOS para las animaciones
        AOS.init();

        // Función para manejar el tamaño de la pantalla
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            // Definir el tamaño mínimo para activar el efecto Atropos (por ejemplo, 1024px)
            setIsLargeScreen(screenWidth >= 1024);
        };

        handleResize(); // Verificar tamaño de pantalla al cargar el componente
        window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño

        return () => window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar
    }, []);

    return (
        <>
            {isLargeScreen ? (
                <Atropos
                    className="w-full lg:w-1/3 p-4"
                    activeOffset={50}
                    shadowScale={0.85}
                    rotateXMax={10}
                    rotateYMax={10}
                    shadow={true}
                    highlight={true}
                >
                    <div className="bg-white dark:bg-red-950 dark:bg-gradient-to-r dark:from-black text-black dark:text-white border-2 border-red-600 dark:border-gray-400 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
                        <div className="p-4 z-10 text-center" data-atropos-offset="2.5">
                            <h1 className="text-xl font-bold mb-2">{title}</h1>
                            <p className="text-base">{description}</p>
                        </div>
                        <div className='opacity-90'>
                            <img
                                className="w-75 mx-auto my-2.5"
                                src={imageUrl}
                                alt={title}
                            />
                        </div>
                    </div>
                </Atropos>
            ) : (
                // Versión sin efecto Atropos para pantallas más pequeñas
                <div className="w-full lg:w-1/3 p-4">
                    <div className="w-full lg:w-1/3 p-4 bg-white dark:bg-red-950 dark:bg-gradient-to-r dark:from-black text-black dark:text-white border-2 border-red-600 dark:border-gray-400 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
                        <div className="p-4 z-10 text-center">
                            <h1 className="text-xl font-bold mb-2">{title}</h1>
                            <p className="text-base">{description}</p>
                        </div>
                        <div className='opacity-90'>
                            <img
                                className="w-75 mx-auto my-2.5"
                                src={imageUrl}
                                alt={title}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ServicesCard;
