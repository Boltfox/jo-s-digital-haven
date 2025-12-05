import { useEffect, useState } from 'react';

const ParallaxTelescope = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate rotation based on scroll (telescope "tracking" the sky)
  const rotation = Math.min(scrollY * 0.05, 45);
  const translateY = scrollY * 0.1;

  return (
    <div 
      className="fixed bottom-0 right-0 w-32 h-48 md:w-48 md:h-72 z-10 pointer-events-none transition-transform duration-100"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <svg 
        viewBox="0 0 120 180" 
        className="w-full h-full drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        style={{
          transform: `rotate(${-rotation}deg)`,
          transformOrigin: 'bottom center',
        }}
      >
        {/* Base/Pedestal */}
        <rect x="45" y="150" width="30" height="30" fill="url(#baseGradient)" rx="2" />
        <rect x="35" y="170" width="50" height="10" fill="url(#baseGradient)" rx="2" />
        
        {/* Support structure */}
        <rect x="55" y="100" width="10" height="55" fill="url(#structureGradient)" />
        
        {/* Mount/Pivot */}
        <circle cx="60" cy="100" r="8" fill="url(#mountGradient)" />
        
        {/* Dish support arm */}
        <rect x="58" y="30" width="4" height="75" fill="url(#structureGradient)" transform="rotate(0, 60, 100)" />
        
        {/* Radio dish */}
        <ellipse cx="60" cy="25" rx="40" ry="15" fill="url(#dishGradient)" />
        <ellipse cx="60" cy="25" rx="35" ry="12" fill="url(#dishInnerGradient)" />
        <ellipse cx="60" cy="25" rx="28" ry="9" fill="url(#dishCenterGradient)" />
        
        {/* Feed horn */}
        <line x1="60" y1="25" x2="60" y2="55" stroke="url(#feedGradient)" strokeWidth="2" />
        <polygon points="55,55 65,55 60,65" fill="url(#feedGradient)" />
        
        {/* Signal waves (animated via CSS) */}
        <g className="animate-pulse" style={{ animationDuration: '1.5s' }}>
          <path d="M 30 15 Q 60 -5 90 15" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.6" />
          <path d="M 25 10 Q 60 -15 95 10" fill="none" stroke="#06b6d4" strokeWidth="0.8" opacity="0.4" />
          <path d="M 20 5 Q 60 -25 100 5" fill="none" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.3" />
        </g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
          <linearGradient id="structureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="50%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
          <linearGradient id="mountGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
          <linearGradient id="dishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
          <linearGradient id="dishInnerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
          <linearGradient id="dishCenterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
          <linearGradient id="feedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ParallaxTelescope;
