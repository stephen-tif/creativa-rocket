import { useState, useEffect, useRef } from 'react';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" ref={containerRef}>
      {/* Animated gradient orbs - background layer */}
      <div className="absolute inset-0">
        {/* Top-left animated orb */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#e12327] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" />
        
        {/* Top-right animated orb */}
        <div className="absolute -top-32 -right-40 w-80 h-80 bg-[#e12327] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        
        {/* Bottom-left animated orb */}
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-[#e12327] rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-4000" />
        
        {/* Bottom-right animated orb */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#e12327] rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-blob animation-delay-3000" />
      </div>

      {/* Mouse-following glow */}
      <div
        ref={glowRef}
        className={`absolute w-96 h-96 bg-[#e12327] rounded-full mix-blend-screen filter blur-3xl opacity-0 pointer-events-none transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/20" />
    </div>
  );
}
