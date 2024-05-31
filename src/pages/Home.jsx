import { useState, useEffect, useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../layout/Navbar'
import { OrbitControls } from "@react-three/drei";
import Rocket from "../components/Rocket";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Home() {

    const images = [
        { src: 'https://creativastudios.us/assets/images/home/imagenes/cover.webp', alt: 'Texto 1' },
        { src: 'https://creativastudios.us/assets/images/home/welcomeSlider/banner_salesforce_creativa.webp', alt: 'Texto 2' },
        { src: 'https://creativastudios.us/assets/images/home/welcomeSlider/banner_curso_game_creativa.webp', alt: 'Texto 3' },
        // Agrega más imágenes aquí
    ];

    useEffect(() => {
        AOS.init();
    }, []);

    const [rotation, setRotation] = useState(0);

    const animateRocket = () => {
        setRotation((prevRotation) => prevRotation + 0.008); // Ajusta la velocidad de la animación según sea necesario
        requestAnimationFrame(animateRocket);
    };

    useEffect(() => {
        animateRocket();
    }, []); // Se ejecuta una vez cuando el componente se monta    

    return (
        <div className="bg-white dark:bg-black">

            <Navbar />

            <div className="relative isolate px-6 pt-14 lg:px-8 z-10" >
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff0000] to-[#F15F79] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:pt-48 lg:pt-56" data-aos="fade-up">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Transforma tu negocio con soluciones tecnologicas innovadoras
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Somos tu aliado en la transformacion digital, ofreciendo soliciones tecnologicas
                            que impulsen tu exito. Desde aplicaciones web y moviles, hasta consultorias especializadas.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Explorar servicios
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                Contactar ahora <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 text-white border dark:border-black p-4 rounded-lg shadow-lg w-4/5	mx-auto" data-aos="fade-up">
                    <div className="flex items-center">
                        <div className="rounded-full bg-red-500 w-3 h-3 mr-2"></div>
                        <div className="rounded-full bg-yellow-500 w-3 h-3 mr-2"></div>
                        <div className="rounded-full bg-green-500 w-3 h-3 mr-2"></div>
                    </div>
                    <div className="mt-4 rounded">
                        <Carousel
                            showArrows={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            interval={3000}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    <img src={image.src} alt={image.alt} className='rounded' />
                                    <div className="absolute bottom-0 bg-black bg-opacity-50 rounded text-white p-2">
                                        <div className='mx-auto text-center'>
                                            <h1 className='text-6xl'>{image.alt}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>


                <div className='w-4/5 mx-auto my-8 text-black dark:text-white w-5/5 mx-auto'>
                    <div className="grid grid-cols-3 gap-6">

                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-b from-gray-600 to-gray-900 p-6">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">prueba</div>
                                <p className="text-white text-base">
                                    TEST
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 p-6">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">prueba</div>
                                <p className="text-white text-base">
                                    TEST
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 p-6">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">prueba</div>
                                <p className="text-white text-base">
                                    TEST
                                </p>
                            </div>
                        </div>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 p-6">
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-white">prueba</div>
                                <p className="text-white text-base">
                                    TEST
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            {/* animacion de cohete */}
            <Canvas camera={{ position: [15, 4, 0], fov: 9 }} shadows className="absolute top-0 left-0 m-0 p-0 ">
                {/* <ambientLight/> */}
                <directionalLight
                    position={[5, 5, 3]}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <group position={[1, 0, -1.6]} rotation={[0, rotation, 0]}>
                    <Rocket />
                </group>
                <OrbitControls enableZoom={false} />
            </Canvas>

        </div>
    );
}

export default Home;
