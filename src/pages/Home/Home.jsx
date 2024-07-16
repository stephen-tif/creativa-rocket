import { useState, useEffect } from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer';
import Rocket from "../../components/Rocket";
import ClientsMarquee from './components/ClientsMarquee';
import ServicesCard from './components/ServicesCard';
import HubSpotForm from './components/HubSpotForm';

const Home = () => {

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
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff0000] to-[#F15F79] opacity-100 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl pb-24 pt-32 sm:pt-36 lg:pt-40" data-aos="fade-up">
                    <svg aria-hidden="true" className="aa ak ed pn tu apo bfe"><defs><pattern x="50%" y="-1" id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none"></path></pattern></defs><rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth="0"></rect></svg>
                    <div className="text-left">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            Transforma tu negocio con soluciones tecnologicas innovadoras
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-500 font-bold m-0 lg:mr-36">
                            Somos tu aliado en la transformacion digital, ofreciendo soliciones tecnologicas
                            que impulsen tu exito.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Explorar servicios
                            </a>
                            <a href="#" className="bg-gray-100 dark:bg-gray-800 rounded-md px-3.5 py-2.5 text-sm font-semibold text-black dark:text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Contactar ahora <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-9/12 py-24">
                    <div className="text-center" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-10">
                            Nuestros servicios
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center" data-aos="zoom-in">
                        <ServicesCard
                            title="Aplicaciones web"
                            description="This is the description for Card 1."
                            imageUrl="https://demosite.creativaconsultores.com/assets/images/software-factory/iconos/Desarrollo%20de%20pagina%20web.webp"
                        />
                        <ServicesCard
                            title="Aplicaciones moviles"
                            description="This is the description for Card 2."
                            imageUrl="https://demosite.creativaconsultores.com/assets/images/mobile-apps/iconos/Desarrollo%20de%20aplicaciones.webp"
                        />
                        <ServicesCard
                            title="Aseguramiento de calidad"
                            description="This is the description for Card 3."
                            imageUrl="https://demosite.creativaconsultores.com/assets/images/consultorias/iconos/Procesos%20testing.webp"
                        />
                        <ServicesCard
                            title="Cursos y Capacitaciones"
                            description="This is the description for Card 4."
                            imageUrl="https://demosite.creativaconsultores.com/assets/images/consultorias/iconos/Metodologias%20agiles.webp"
                        />
                        <ServicesCard
                            title="Consultoria tecnologica"
                            description="This is the description for Card 5."
                            imageUrl="https://demosite.creativaconsultores.com/assets/images/testing-factory/iconos/Herramientas%20de%20gestion%20y%20ops.webp"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full">
                <div className="text-center" data-aos="fade-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-10">
                        Nuestros Clientes
                    </h1>
                    <ClientsMarquee />
                </div>
            </div>

            
            
            <div className="bg-white dark:bg-zinc-900 text-white border dark:border-black p-4 rounded-lg shadow-lg sm:w-4/5	mx-auto mt-36" data-aos="fade-up">
                    <div className="flex items-center">
                        <div className="rounded-full bg-red-500 w-3 h-3 mr-2"></div>
                        <div className="rounded-full bg-yellow-500 w-3 h-3 mr-2"></div>
                        <div className="rounded-full bg-green-500 w-3 h-3 mr-2"></div>
                    </div>
                    <div className="mt-6 rounded">
                    <HubSpotForm/>
                    </div>
                </div>


            <Footer />

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

        </div >
    );
}

export default Home;
