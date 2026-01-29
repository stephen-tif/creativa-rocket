import { useState, memo, useCallback } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Rocket from "../../components/Rocket";
import ClientsMarquee from './components/ClientsMarquee';
import HubSpotForm from './components/HubSpotForm';
import Preloader from '../../components/Preloader/Preloader';

// Memoized Hero Section with Rocket
const HeroSection = memo(function HeroSection({ onCanvasLoaded }) {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background -z-10" />
            
            {/* Subtle grid pattern */}
            <div 
                className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container-narrow w-full pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="max-w-2xl fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e12327]/10 text-sm text-[#e12327] mb-6 border border-[#e12327]/20">
                                            <span className="w-2 h-2 bg-[#e12327] rounded-full animate-pulse" />
                                            Soluciones tecnologicas innovadoras
                                        </span>
                        
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
                            Transformamos ideas en 
                            <span className="block text-muted-foreground">experiencias digitales</span>
                        </h1>
                        
                        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Somos expertos en desarrollo de software, aplicaciones moviles y consultoria tecnologica. 
                            Impulsamos tu negocio hacia el futuro digital.
                        </p>
                        
                        <div className="mt-10 flex flex-wrap items-center gap-4">
<a href="#servicios" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 bg-[#e12327] text-white hover:bg-[#c91f22]">
                                                Explorar servicios
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#contacto" className="btn-secondary">
                                Contactar ahora
                            </a>
                        </div>

{/* Stats */}
                                        <div className="mt-16 grid grid-cols-3 gap-8">
                                            <div>
                                                <div className="text-3xl font-bold text-[#e12327]">20+</div>
                                                <div className="text-sm text-muted-foreground">Anos de experiencia</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-[#e12327]">200+</div>
                                                <div className="text-sm text-muted-foreground">Colaboradores</div>
                                            </div>
                                            <div>
                                                <div className="text-3xl font-bold text-[#e12327]">500+</div>
                                                <div className="text-sm text-muted-foreground">Proyectos</div>
                                            </div>
                                        </div>
                    </div>

                    {/* 3D Rocket with Interactive Grid */}
                    <div className="relative h-[400px] lg:h-[600px] rocket-bounce">
                        {/* Interactive Grid Background */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 grid-pattern opacity-30" />
                            {/* Corner markers */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#e12327]/40" />
                            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#e12327]/40" />
                            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#e12327]/40" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#e12327]/40" />
                            {/* Interactive hint */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-muted-foreground bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50">
                                <svg className="w-4 h-4 animate-pulse text-[#e12327]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                </svg>
                                <span>Arrastra para rotar</span>
                            </div>
                        </div>
                        <Canvas 
                            camera={{ position: [15, 4, 0], fov: 8 }} 
                            shadows 
                            onCreated={onCanvasLoaded}
                            dpr={[1, 2]}
                            performance={{ min: 0.5 }}
                            style={{ cursor: 'grab' }}
                        >
                            <ambientLight intensity={0.15} />
                            <directionalLight
                                position={[8, 8, 3]}
                                intensity={1}
                                castShadow
                                shadow-mapSize-width={512}
                                shadow-mapSize-height={512}
                            />
                            <group position={[0, -0.2, 0]}>
                                <Rocket />
                            </group>
                            <OrbitControls 
                                enableZoom={false} 
                                enableRotate={true}
                                enablePan={false}
                                autoRotate={true}
                                autoRotateSpeed={0.5}
                                rotateSpeed={0.5}
                                minPolarAngle={Math.PI / 3}
                                maxPolarAngle={Math.PI / 1.8}
                            />
                        </Canvas>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
        </section>
    );
});

// Services Section
const ServicesSection = memo(function ServicesSection() {
    const services = [
        {
            title: "Aplicaciones Web",
            description: "Desarrollamos soluciones web modernas, escalables y de alto rendimiento para tu negocio.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Aplicaciones Moviles",
            description: "Creamos apps nativas y multiplataforma con experiencias de usuario excepcionales.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "QA & Testing",
            description: "Aseguramos la calidad de tu software con metodologias de testing avanzadas.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Capacitaciones",
            description: "Formamos equipos de alto rendimiento con cursos y certificaciones especializadas.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Consultoria",
            description: "Asesoramos en transformacion digital y optimizacion de procesos tecnologicos.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Cloud & DevOps",
            description: "Implementamos infraestructura en la nube y practicas DevOps para mayor eficiencia.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
            )
        }
    ];

    return (
        <section id="servicios" className="section-spacing bg-secondary/30">
            <div className="container-narrow">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Nuestros Servicios
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                        Soluciones integrales para tu negocio
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Ofrecemos un portafolio completo de servicios tecnologicos para impulsar tu transformacion digital.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div 
                            key={service.title}
                            className="modern-card hover-lift group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
<div className="w-12 h-12 rounded-xl bg-[#e12327]/10 flex items-center justify-center text-[#e12327] mb-4 group-hover:bg-[#e12327] group-hover:text-white transition-colors duration-300">
                                                {service.icon}
                                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

// About Section
const AboutSection = memo(function AboutSection() {
    const partners = ['Oracle Gold Partner', 'Microsoft Partner', 'AWS Partner', 'HASTQB'];
    
    return (
        <section id="nosotros" className="section-spacing">
            <div className="container-narrow">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Sobre Nosotros
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
                            Mas de 20 anos impulsando la innovacion
                        </h2>
                        <p className="mt-6 text-muted-foreground leading-relaxed">
                            Somos una empresa de Centro y Norte America fundada en el ano 2003, 
                            dedicada a la prestacion de servicios de consultoria en las diferentes 
                            Tecnologias de Informacion.
                        </p>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            Contamos con mas de 200 colaboradores certificados y capacitados en 
                            tecnologias como Salesforce, Oracle, Microsoft, Java, tecnologias moviles 
                            y aseguramiento de calidad.
                        </p>
                        
                        <div className="mt-8 flex flex-wrap gap-3">
                            {partners.map((partner) => (
                                <span 
                                    key={partner}
                                    className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground"
                                >
                                    {partner}
                                </span>
                            ))}
                        </div>

<a href="#contacto" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 bg-[#e12327] text-white hover:bg-[#c91f22] mt-8">
                                            Conocer mas
                                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                            <img 
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/people-discussion-about-business-8659916-6909666.png" 
                                alt="Team collaboration"
                                className="w-full h-full object-contain p-8"
                                loading="lazy"
                            />
                        </div>
{/* Decorative element */}
                                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#e12327] rounded-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
});

// University Section  
const UniversitySection = memo(function UniversitySection() {
    return (
        <section id="universidad" className="section-spacing bg-foreground text-background">
            <div className="container-narrow">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="aspect-square rounded-3xl bg-background/10 overflow-hidden">
                            <img 
                                src="https://static.vecteezy.com/system/resources/previews/024/830/905/original/3d-illustration-icon-of-blue-education-college-graduation-hat-with-book-png.png" 
                                alt="Education"
                                className="w-full h-full object-contain p-8"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                        <span className="text-sm font-medium text-background/60 uppercase tracking-wider">
                            Universidad Creativa
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-background text-balance">
                            Impulsa tu carrera profesional
                        </h2>
                        <p className="mt-6 text-background/70 leading-relaxed">
                            Descubre como nuestra universidad impulsa el crecimiento 
                            profesional con cursos y certificaciones especializadas en tecnologia.
                        </p>
                        
                        <ul className="mt-8 space-y-4">
                            {['Certificaciones internacionales', 'Cursos especializados', 'Mentoria personalizada', 'Proyectos reales'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-background/80">
                                    <svg className="w-5 h-5 text-[#e12327]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a 
                            href="#" 
                            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
                        >
                            Explorar cursos
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

// Awards Section
const AwardsSection = memo(function AwardsSection() {
    return (
        <section className="section-spacing relative overflow-hidden">
            <div className="container-narrow text-center">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Reconocimientos
                </span>
                <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-foreground text-balance">
                    Somos la empresa mas creativa
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Reconocidos por Clutch como una de las empresas lideres en desarrollo de software en Latinoamerica.
                </p>
                
                <div className="mt-12">
                    <img
                        className="w-48 mx-auto hover-lift"
                        src="https://creativastudios.us/assets/images/footer/premio_clutch.webp"
                        alt="Clutch Award"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
});

// Clients Section
const ClientsSection = memo(function ClientsSection() {
    return (
        <section id="clientes" className="section-spacing bg-secondary/30">
            <div className="container-narrow">
                <div className="text-center mb-16">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Nuestros Clientes
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                        Empresas que confian en nosotros
                    </h2>
                </div>
                <ClientsMarquee />
            </div>
        </section>
    );
});

// Contact Section
const ContactSection = memo(function ContactSection() {
    return (
        <section id="contacto" className="section-spacing">
            <div className="container-narrow">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            Contacto
                        </span>
                        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
                            Hablemos de tu proyecto
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Estamos listos para ayudarte a transformar tu negocio con soluciones tecnologicas innovadoras.
                        </p>
                    </div>
                    
                    <div className="modern-card">
                        <HubSpotForm />
                    </div>
                </div>
            </div>
        </section>
    );
});

// Main Home Component
const Home = () => {
    const [loading, setLoading] = useState(true);

    const handleCanvasLoaded = useCallback(() => {
        // Small delay to ensure smooth transition
        setTimeout(() => setLoading(false), 500);
    }, []);

    return (
        <div className="bg-background min-h-screen">
            {loading && <Preloader />}
            
            <Navbar />
            
            <main>
                <HeroSection 
                    onCanvasLoaded={handleCanvasLoaded}
                />
                <ServicesSection />
                <AboutSection />
                <UniversitySection />
                <AwardsSection />
                <ClientsSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
