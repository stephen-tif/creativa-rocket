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
                    <div ref={rocketCanvasRef} className="absolute inset-0 -z-10 ml-auto w-full h-screen sm:w-6/12 cursor-move opacity-70 sm:opacity-100 dark:brightness-50 dark:sm:brightness-100">
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
            <div className="mx-auto w-full">
                <div className="text-center" data-aos="fade-up">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-10">
                        Nuestros Clientes
                    </h1>
                    <ClientsMarquee />
                </div>
            </div>


            {/* portafolio */}
            <div className="mx-auto w-full mt-36 ">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-10" data-aos="fade-up">
                        Conoce mas sobre nosotros
                    </h1>
                    <div className='mx-auto w-4/5 my-12 shadow-lg rounded bg-white dark:bg-zinc-900 text-white border dark:border-black' data-aos="zoom-in">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                            <div className="relative grid h-full w-full items-end justify-center overflow-hidden text-center bg-white rounded">
                                {/* Fondo de la Tarjeta */}
                                <div className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center" style={{ backgroundImage: "url('https://worldcampus.saintleo.edu/img/article/estudiar-desarrollo-de-software-lenguajes-de-programacion-mas-dificiles-de-aprender.webp')" }}>
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/60" />
                                </div>

                                {/* Contenido de la Tarjeta */}
                                <div className="relative py-14 px-6 md:px-12">
                                    <h2 className="text-white mb-6 text-3xl font-medium leading-[1.5]">
                                        Hechale un vistazo a nuestro portafolio
                                    </h2>
                                </div>
                            </div>
                            <div className='col-span-2 h-[600px] w-[98%] content-center'>
                                <PDFViewer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* formulario hubspot */}
            <div className="bg-white dark:bg-zinc-900 text-white border dark:border-black p-4 rounded-lg shadow-lg sm:w-4/5	mx-auto my-24" data-aos="fade-up">
                <div className="flex items-center">
                    <div className="rounded-full bg-red-500 w-3 h-3 mr-2"></div>
                    <div className="rounded-full bg-yellow-500 w-3 h-3 mr-2"></div>
                    <div className="rounded-full bg-green-500 w-3 h-3 mr-2"></div>
                </div>
                <div className="mt-6 rounded">
                    <HubSpotForm />
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div >
    );
}

export default Home;
