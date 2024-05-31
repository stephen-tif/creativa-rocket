import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import '../App.css';

function Navbar() {
    const navigation = [
        { name: 'Inicio', href: '#' },
        { name: 'Nosotros', href: '#' },
        { name: 'Servicios', href: '#' },
        {
            name: 'Lab', dropdown: true, options: [
                {
                    name: 'Apps', href: '#', suboptions: [
                        { name: 'Fulea', href: '#' },
                        { name: 'VO', href: '#' },
                        { name: 'Sircs', href: '#' },
                        { name: 'Health Tourism', href: '#' }
                    ],
                },
                {
                    name: 'Soluciones', href: '#', suboptions: [
                        { name: 'Collect App', href: '#' },
                        { name: 'EuphoRHia', href: '#' }
                    ]
                }
            ]
        },
        { name: 'Universidad', href: '#' },
        { name: 'Clientes', href: '#' },
        { name: 'RSE', href: '#' }
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return JSON.parse(savedMode);
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
    });

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
        if (newMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setNavbarBackground(true);
            } else {
                setNavbarBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const renderDropdown = (item) => (
        <Menu as="div" className="relative inline-block text-left" key={item.name}>
            <div>
                <MenuButton className="text-sm font-semibold leading-6 text-gray-900 dark:text-white border-b-2 border-transparent hover:border-red-500">
                    {item.name}
                </MenuButton>
            </div>
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {item.options.map((option) => (
                    <div key={option.name}>
                        {option.suboptions ? (
                            <Menu as="div" className="relative">
                                <div>
                                    <MenuButton className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        {option.name}
                                    </MenuButton>
                                </div>
                                <MenuItems className="absolute left-full top-0 mt-0 w-56 origin-top-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {option.suboptions.map((suboption) => (
                                        <MenuItem key={suboption.name}>
                                            {({ active }) => (
                                                <a
                                                    href={suboption.href}
                                                    className={`${active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'
                                                        } group flex items-center px-4 py-2 text-sm`}
                                                >
                                                    {suboption.name}
                                                </a>
                                            )}
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                        ) : (
                            <MenuItem>
                                {({ active }) => (
                                    <a
                                        href={option.href}
                                        className={`${active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'
                                            } group flex items-center px-4 py-2 text-sm`}
                                    >
                                        {option.name}
                                    </a>
                                )}
                            </MenuItem>
                        )}
                    </div>
                ))}
            </MenuItems>
        </Menu>
    );

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${navbarBackground ? 'bg-white dark:bg-black shadow' : 'bg-transparent'} `}>
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Creativa Studios</span>
                        <img
                            className="h-8 w-auto"
                            src="https://creativastudios.us/assets/images/header/iconos/main_logo_2023.webp"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        item.dropdown ? renderDropdown(item) : (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-white border-b-2 border-transparent hover:border-red-500">
                                {item.name}
                            </a>
                        )
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        className="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none dark:bg-gray-800"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? (
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://creativastudios.us/assets/images/header/iconos/main_logo_2023.webp"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    item.dropdown ? (
                                        <div key={item.name} className="-mx-3">
                                            <Menu as="div" className="relative block text-left">
                                                <div>
                                                    <MenuButton className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white border-b-2 border-transparent hover:border-red-500">
                                                        {item.name}
                                                    </MenuButton>
                                                </div>
                                                <MenuItems className="absolute left-0 mt-2 w-full origin-top bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {item.options.map((option) => (
                                                        <div key={option.name}>
                                                            {option.suboptions ? (
                                                                <Menu as="div" className="relative">
                                                                    <div>
                                                                        <MenuButton className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                                            {option.name}
                                                                        </MenuButton>
                                                                    </div>
                                                                    <MenuItems className="absolute left-full top-0 mt-0 w-56 origin-top-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-600 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                        {option.suboptions.map((suboption) => (
                                                                            <MenuItem key={suboption.name}>
                                                                                {({ active }) => (
                                                                                    <a
                                                                                        href={suboption.href}
                                                                                        className={`${active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'
                                                                                            } group flex items-center px-4 py-2 text-sm`}
                                                                                    >
                                                                                        {suboption.name}
                                                                                    </a>
                                                                                )}
                                                                            </MenuItem>
                                                                        ))}
                                                                    </MenuItems>
                                                                </Menu>
                                                            ) : (
                                                                <MenuItem>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href={option.href}
                                                                            className={`${active ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-200'
                                                                                } group flex items-center px-4 py-2 text-sm`}
                                                                        >
                                                                            {option.name}
                                                                        </a>
                                                                    )}
                                                                </MenuItem>
                                                            )}
                                                        </div>
                                                    ))}
                                                </MenuItems>
                                            </Menu>
                                        </div>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white border-b-2 border-transparent hover:border-red-500"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}

export default Navbar;
