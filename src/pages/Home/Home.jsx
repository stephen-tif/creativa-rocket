import { useState, useEffect, useRef } from 'react'
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
import PDFViewer from '../../components/PDFViewer';
import BlurContainer from './components/BlurContainer';
import Preloader from '../../components/Preloader/Preloader';

const Home = () => {

    // constantes para rocket
    const [rocketRotation, setRocketRotation] = useState(0);
    const rocketCanvasRef = useRef(null);
    const [rocketVisibility1, setRocketVisibility1] = useState(true);

    // preloader state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // inicializando AOS
        AOS.init();
    }, []);

    // funcion para detener el loading
    const handleCanvasLoaded = () => {
        setLoading(false);
    };

    const animateRocket = () => {
        setRocketRotation((prevRotation) => prevRotation + 0.004); // Ajusta la velocidad de la animación según sea necesario
        requestAnimationFrame(animateRocket);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setRocketVisibility1(false);
            } else {
                setRocketVisibility1(true);
            }
        };
        if (window.innerWidth > 640) {
            animateRocket();
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-gray-50 dark:bg-zinc-950">

            {/* Muestra el pre-loader si el cohete termino de renderizar */}
            {loading && <Preloader />}

            <Navbar />

            {/* presentacion inicial */}
            <BlurContainer>
                {/* contenido */}
                <div className="p-0 md:pl-20 max-w-2xl pb-24 pt-16 text-left ">
                    <p className='text-gray-500 dark:text-gray-400 '>
                        make with love by creativa warriors 🚀
                    </p>
                    <h1 className="pt-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
                        Transforma tu negocio con soluciones tecnologicas innovadoras
                    </h1>
                    <div className="mt-10 flex items-center justify-left gap-x-4">
                        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-xl group">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500 group-hover:from-red-600 group-hover:via-red-600 group-hover:to-red-600"></span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-out transform translate-y-full bg-white opacity-10 group-hover:translate-y-0"></span>
                            <span className="relative">Explorar servicios</span>
                        </button>
                        <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-200 rounded-full shadow-lg dark:text-white dark:border-white group">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white via-gray-200 to-white dark:from-black dark:via-gray-800 dark:to-black group-hover:from-gray-100 group-hover:via-gray-300 group-hover:to-gray-100 dark:group-hover:from-gray-700 dark:group-hover:via-gray-900 dark:group-hover:to-gray-700"></span>
                            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-out transform translate-y-full bg-black opacity-5 dark:bg-white dark:opacity-10 group-hover:translate-y-0"></span>
                            <span className="relative">Contactar ahora <span aria-hidden="true">→</span></span>
                        </button>
                    </div>

                    {/* animacion de cohete */}
                    {rocketVisibility1 && (
                        <div ref={rocketCanvasRef} className="absolute top-20 sm:top-0 inset-0 -z-10 ml-auto w-full h-[500px] sm:h-screen sm:w-6/12 cursor-move opacity-75 sm:opacity-100 dark:brightness-50 dark:sm:brightness-100 rocket-bounce">
                            <Canvas camera={{ position: [15, 4, 0], fov: 8 }} shadows onCreated={() => handleCanvasLoaded()}>
                                <ambientLight intensity={0.1} />
                                {/* <mesh>
                                <boxBufferGeometry/>
                                <meshNormalMaterial/>
                            </mesh> */}
                                <directionalLight
                                    position={[8, 8, 3]}
                                    castShadow
                                    shadow-mapSize-width={1024}
                                    shadow-mapSize-height={1024}
                                />
                                <group position={[0, -0.2, 0]} rotation={[0, rocketRotation, 0]}>
                                    <Rocket />
                                </group>
                                <OrbitControls enableZoom={false} enableRotate={false} />
                            </Canvas>
                        </div>
                    )}

                </div>
            </BlurContainer>


            {/* seccion de tarjetas de servicios */}
            <div className="mx-auto w-full relative isolate">
                <div className="mx-auto w-9/12 py-24">
                    <div className="text-center" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-10">
                            Nuestros servicios
                        </h1>
                    </div>
                    <div className="flex flex-wrap justify-center">
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

            {/* sobre nosotros */}
            <div className="mx-auto w-full relative mt-48">
                <div className="text-white rounded-lg shadow-lg w-4/5 mx-auto my-12 px-4 bg-[url('./src/assets/tarjeta-blanco.svg')] dark:bg-[url('./src/assets/tarjeta-negro.svg')] bg-cover bg-center" data-aos="fade-up">
                    <div className='w-full content-center'>

                        <div className="flex flex-col md:flex-row justify-between items-center p-6">
                            <div className='w-full md:w-6/12 mx-auto text-center md:text-left'>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                    Conoce mas sobre nosotros!
                                </h1>
                                <p className='text-gray-500 dark:text-gray-400 my-6'>
                                    Somos una empresa de Centro y Norte América fundada en el año 2003,
                                    dedicada a la prestación de servicios de consultoría en las diferentes Tecnologías
                                    de Información. Somos partners de ORACLE (gold partners), MicroStrategy, Microsoft, HASTQB.
                                    Contamos con más de 200 colaboradores certificados y capacitados en tecnologías como
                                    SALESFORCE, ORACLE, AS/400, MICROSOFT, JAVA, Tecnologías móviles, Javascript y Aseguramiento de Calidad.
                                </p>
                                <br />
                                <a href="#" className="rounded-2xl bg-red-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Mas sobre nosotros
                                </a>
                                <br />
                                <br />
                            </div>
                            <div className='w-6/12 mx-auto'>
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/people-discussion-about-business-8659916-6909666.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Sección Universidad */}
            <div className="mx-auto w-full relative mt-48">
                <div className="text-white rounded-lg shadow-lg w-4/5 mx-auto my-12 px-4 bg-[url('./src/assets/tarjeta-blanco.svg')] dark:bg-[url('./src/assets/tarjeta-negro.svg')] bg-cover bg-center" data-aos="fade-up">
                    <div className="w-full content-center">
                        <div className="flex flex-col md:flex-row justify-between items-center p-6">
                            <div className="w-6/12 mx-auto">
                                <img src="https://static.vecteezy.com/system/resources/previews/024/830/905/original/3d-illustration-icon-of-blue-education-college-graduation-hat-with-book-png.png" alt="" />
                            </div>
                            <div className="w-full md:w-6/12 mx-auto text-center md:text-left">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                    ¡Explora nuestra universidad!
                                </h1>
                                <p className="text-gray-500 dark:text-gray-400 my-6">
                                    Descubre cómo nuestra universidad impulsa el crecimiento
                                    profesional con cursos y certificaciones especializadas en tecnología.
                                </p>
                                <a href="#" className="rounded-2xl bg-red-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Explorar la universidad
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative flex justify-start grid content-center w-full h-screen'>
                <div className="rounded w-full sm:w-8/12 z-10" data-aos="fade-up">
                    <div className="text-4xl tracking-tight sm:text-6xl text-neon text-center sm:text-left m-0 sm:ml-5">
                        ¡Somos la empresa más CREATIVA! ☝️&#128526;
                    </div>
                </div>
                <div className="absolute w-full z-0">
                    <div className="absolute w-full h-screen dark:opacity-90 bg-[url('./src/assets/fondo-blob.svg')] bg-cover bg-center blur-2xl"></div>
                    <div className="w-full h-screen blur-sm dark:opacity-80">
                        <Canvas camera={{ position: [15, -8, 0], fov: 8 }} shadows onCreated={() => handleCanvasLoaded()}>
                            <ambientLight intensity={0.03} />
                            <directionalLight
                                position={[8, 8, 3]}
                                castShadow
                                shadow-mapSize-width={1024}
                                shadow-mapSize-height={1024}
                            />
                            <group position={[0, 0, -0.3]} rotation={[1, rocketRotation, 0]}>
                                <Rocket />
                            </group>
                            <OrbitControls enableZoom={false} enableRotate={false} />
                        </Canvas>
                    </div>
                </div>
            </div>


            <div className="relative w-full h-screen py-10">
                <div className="text-center" data-aos="fade-up">
                    <div className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-20">
                        ¡Clientes que nos prefieren!
                    </div>
                    <ClientsMarquee />
                </div>
            </div>


            {/* portafolio */}
            {/* <div className="mx-auto w-full mt-48">
                <div className="text-center" data-aos="fade-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Conoce mas sobre nosotros!
                    </h1>
                    <div className="bg-white dark:bg-zinc-900 text-white border dark:border-black rounded-lg shadow-lg w-4/5 mx-auto my-12 px-4" data-aos="fade-up">
                        <div className='h-[600px] w-full content-center'>
                            <PDFViewer />
                        </div>
                    </div>
                </div>
            </div> */}




            {/* formulario hubspot */}
            <div className="relative mx-auto w-full mt-5">

                {/* fondo rojo */}
                <div className="relative isolate blur-2xl">
                    <div className="absolute z-0 left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] dark:bg-gradient-to-tr dark:from-[#ff0000] dark:to-[#F15F79] opacity-100 left-[calc(50%-30rem)] w-[72.1875rem]"
                        style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)', }}
                    />
                </div>

                <div className="relative text-center" data-aos="fade-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                        Contactanos!
                    </h1>
                    <div className="bg-white dark:bg-zinc-900 text-white border dark:border-black rounded-lg shadow-lg w-4/5 mx-auto my-12 px-4" data-aos="fade-up">
                        <div className='my-8'>
                            <HubSpotForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div >
    );
}

export default Home;
