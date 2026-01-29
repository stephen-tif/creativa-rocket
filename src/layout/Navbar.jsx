import React, { useState, useEffect, memo } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Universidad', href: '#universidad' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Contacto', href: '#contacto' },
];

const Navbar = memo(function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return JSON.parse(savedMode);
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        document.documentElement.classList.toggle('dark', newMode);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <header 
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' 
                    : 'bg-transparent'
            }`}
        >
            <nav className="container-narrow flex items-center justify-between py-4" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="flex items-center gap-2">
                        <img
                            className="h-8 w-auto"
                            src="https://creativastudios.us/assets/images/header/iconos/main_logo_2023.webp"
                            alt="Creativa Studios"
                            loading="eager"
                        />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <Bars3Icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:gap-x-8">
                    {navigation.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
                    <button
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                        onClick={toggleDarkMode}
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
                            <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        )}
                    </button>
                    <a href="#contacto" className="btn-primary">
                        Contactar
                    </a>
                </div>
            </nav>

            {/* Mobile menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm border-l border-border">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                                className="h-8 w-auto"
                                src="https://creativastudios.us/assets/images/header/iconos/main_logo_2023.webp"
                                alt="Creativa Studios"
                            />
                        </a>
                        <button
                            type="button"
                            className="p-2 rounded-full hover:bg-secondary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-foreground" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-base font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Modo oscuro</span>
                                <button
                                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                                    onClick={toggleDarkMode}
                                >
                                    {isDarkMode ? (
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
});

export default Navbar;
