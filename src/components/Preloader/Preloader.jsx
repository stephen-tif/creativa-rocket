// PreLoader.jsx
import React from 'react';
import './Preloader.css';

const PreLoader = () => (
  <div className="flex items-center justify-center fixed top-0 left-0 w-full h-screen z-[9999] bg-white dark:bg-zinc-950">
    <div className="loader mr-6"></div>
    <div className="loader2"></div>
  </div>

);

export default PreLoader;
