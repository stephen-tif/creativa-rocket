import React from "react";
import '../App.css';

const currentYear = new Date().getFullYear();

const Footer = () => (
    <footer className="bg-white dark:bg-black border-t border-gray-300 dark:border-gray-600 mt-40">
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
                    <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 mx-2">About</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 mx-2">Blog</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 mx-2">Jobs</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 mx-2">Press</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 mx-2">Accessibility</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400 mx-2">Partners</a>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M24 4.56c-.88.39-1.83.66-2.82.78a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.12 1.19a4.92 4.92 0 0 0-8.39 4.48A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 .61 19.54a13.93 13.93 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.05 10.05 0 0 0 24 4.56z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M24 4.56c-.88.39-1.83.66-2.82.78a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.12 1.19a4.92 4.92 0 0 0-8.39 4.48A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 .61 19.54a13.93 13.93 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.05 10.05 0 0 0 24 4.56z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M24 4.56c-.88.39-1.83.66-2.82.78a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.12 1.19a4.92 4.92 0 0 0-8.39 4.48A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 .61 19.54a13.93 13.93 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.05 10.05 0 0 0 24 4.56z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                        <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M24 4.56c-.88.39-1.83.66-2.82.78a4.92 4.92 0 0 0 2.16-2.71c-.95.56-2 .97-3.12 1.19a4.92 4.92 0 0 0-8.39 4.48A13.94 13.94 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.82 4.92 4.92 0 0 1-2.22.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 .61 19.54a13.93 13.93 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.05 10.05 0 0 0 24 4.56z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="text-center text-gray-600 mt-4">
                © {currentYear} Creativa Studios. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;