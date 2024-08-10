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
    const [animacionVuelo, setAnimacionVuelo] = useState(-16);
    const vueloIncremento = useRef(0.1); // Referencia para el incremento

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
        animateRocket();
    }, []); // Se ejecuta una vez cuando el componente se monta

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
                        make with love by creativa warriors
                    </p>
                    <h1 className="pt-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
                        Transforma tu negocio con soluciones tecnologicas innovadoras
                    </h1>
                    <div className="mt-10 flex items-center justify-left gap-x-4">
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

                    {/* animacion de cohete */}
                    <div ref={rocketCanvasRef} className="absolute inset-0 -z-10 ml-auto w-full h-screen sm:w-6/12 cursor-move opacity-75 sm:opacity-100 dark:brightness-50 dark:sm:brightness-100">
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
                            {/* Luz puntual */}
                            <pointLight position={[5, 5, 5]} intensity={-0.05} />

                            {/* Luz de foco */}
                            <spotLight
                                position={[15, 10, 5]}
                                angle={0.3}
                                penumbra={1}
                                intensity={-0.2}
                                castShadow
                            />

                            <group position={[0, -0.2, 0]} rotation={[0, rocketRotation, 0]}>
                                <Rocket />
                            </group>
                            <OrbitControls enableZoom={false} enableRotate={false} />
                        </Canvas>
                    </div>

                </div>
            </BlurContainer>


            {/* seccion de tarjetas de servicios */}
            <div className="mx-auto w-full">
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


            {/* seccion de clientes */}
            <div className="mx-auto w-full my-6">
                <div className="text-center" data-aos="fade-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-10">
                        Nuestros Clientes
                    </h1>
                    <ClientsMarquee />
                </div>
            </div>

            {/* seccion universidad */}
            <div className="mx-auto w-full mt-48">
                <div className="text-white dark:border-black border rounded-lg shadow-lg w-4/5 mx-auto my-12 px-4 bg-[url('./src/assets/tarjeta-blanco.svg')] dark:bg-[url('./src/assets/tarjeta-negro.svg')] bg-cover bg-center" data-aos="fade-up">
                    <div className='w-full content-center'>

                        <div class="flex flex-col md:flex-row justify-between items-center p-6">
                        <div className='w-6/12 mx-auto'>
                                <img src="https://static.vecteezy.com/system/resources/previews/024/830/905/original/3d-illustration-icon-of-blue-education-college-graduation-hat-with-book-png.png" alt="" />
                            </div>
                            <div className='w-full md:w-6/12 mx-auto text-center md:text-left'>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                                    Explora nuestra universidad!
                                </h1>
                                <p className='text-gray-500 dark:text-gray-400 my-6'>
                                    Descubre como nuestra universidad impulsa el crecimiento
                                    profesional con cursos y certificaciones especializadas en tecnologia.
                                </p>
                                <br />
                                <a href="#" className="rounded-2xl bg-red-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Explorar la universidad
                                </a>
                                <br />
                                <br />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* seccion universidad */}
            <div className="mx-auto w-full mt-48">
                <div className="text-white border dark:border-black rounded-lg shadow-lg w-4/5 mx-auto my-12 px-4 bg-[url('./src/assets/tarjeta-blanco.svg')] dark:bg-[url('./src/assets/tarjeta-negro.svg')] bg-cover bg-center" data-aos="fade-up">
                    <div className='w-full content-center'>

                        <div class="flex flex-col md:flex-row justify-between items-center p-6">
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
            <div className="mx-auto w-full mt-48">
                <div className="text-center" data-aos="fade-up">
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
