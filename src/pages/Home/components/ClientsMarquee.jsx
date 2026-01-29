import React, { memo } from 'react';
import Marquee from "react-fast-marquee";

const clientImages = [
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-01.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-02.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-03.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-05.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-06.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-07.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-08.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-09.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-10.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-11.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-12.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-13.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-14.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-15.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-16.webp",
];

const clientImages2 = [
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-17.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-18.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-19.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-20.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-21.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-22.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-23.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-24.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-25.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-26.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-27.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-28.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-29.webp",
    "https://creativastudios.us/assets/images/nuestros-clientes/iconos/cliente-30.webp",
];

const ClientImage = memo(function ClientImage({ src, index }) {
    return (
        <div className="flex items-center justify-center mx-6 md:mx-10">
            <img 
                src={src} 
                alt={`Cliente ${index + 1}`}
                className="h-10 md:h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
            />
        </div>
    );
});

const ClientsMarquee = memo(function ClientsMarquee() {
    return (
        <div className="w-full space-y-8">
            <Marquee 
                pauseOnHover={true} 
                speed={40}
                gradient={true}
                gradientColor="hsl(var(--secondary))"
                gradientWidth={100}
            >
                {clientImages.map((src, index) => (
                    <ClientImage key={`row1-${index}`} src={src} index={index} />
                ))}
            </Marquee>
            
            <Marquee 
                pauseOnHover={true} 
                direction='right' 
                speed={40}
                gradient={true}
                gradientColor="hsl(var(--secondary))"
                gradientWidth={100}
            >
                {clientImages2.map((src, index) => (
                    <ClientImage key={`row2-${index}`} src={src} index={index} />
                ))}
            </Marquee>
        </div>
    );
});

export default ClientsMarquee;
