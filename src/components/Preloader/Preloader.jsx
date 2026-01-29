import React, { memo } from 'react';
import './Preloader.css';

const Preloader = memo(function Preloader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                {/* Modern spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-2 border-border" />
                    <div className="absolute inset-0 rounded-full border-2 border-foreground border-t-transparent animate-spin" />
                </div>
                
                {/* Loading text */}
                <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-sm font-medium tracking-wide">Cargando</span>
                    <span className="flex gap-1">
                        <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1 h-1 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                </div>
            </div>
        </div>
    );
});

export default Preloader;
