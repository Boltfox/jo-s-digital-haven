import { useEffect, useState } from 'react';

const ParallaxTelescope = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isReceiving, setIsReceiving] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pulse the receiving indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setIsReceiving(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Calculate rotation based on scroll (telescope "tracking" the sky)
  const rotation = Math.min(scrollY * 0.03, 30);
  const translateY = scrollY * 0.08;

  return (
    <div 
      className="fixed bottom-0 right-0 w-40 h-56 md:w-56 md:h-80 z-10 pointer-events-none"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <svg 
        viewBox="0 0 140 200" 
        className="w-full h-full"
        style={{
          transform: `rotate(${-rotation}deg)`,
          transformOrigin: 'bottom center',
        }}
      >
        {/* Receiving signal glow effect */}
        <ellipse 
          cx="70" 
          cy="30" 
          rx="50" 
          ry="20" 
          fill="url(#receivingGlow)"
          className="animate-pulse"
          style={{ animationDuration: '1.5s' }}
        />

        {/* Base/Pedestal */}
        <rect x="50" y="165" width="40" height="35" fill="url(#baseGradient)" rx="3" />
        <rect x="35" y="190" width="70" height="12" fill="url(#baseGradient)" rx="3" />
        
        {/* Support structure */}
        <rect x="65" y="110" width="10" height="60" fill="url(#structureGradient)" />
        
        {/* Mount/Pivot */}
        <circle cx="70" cy="110" r="10" fill="url(#mountGradient)" />
        <circle cx="70" cy="110" r="6" fill="#1f2937" />
        
        {/* Dish support arm */}
        <rect x="68" y="35" width="4" height="80" fill="url(#structureGradient)" />
        
        {/* Radio dish - main structure */}
        <ellipse cx="70" cy="30" rx="48" ry="18" fill="url(#dishGradient)" />
        <ellipse cx="70" cy="30" rx="42" ry="15" fill="url(#dishInnerGradient)" />
        <ellipse cx="70" cy="30" rx="35" ry="12" fill="url(#dishCenterGradient)" />
        
        {/* Feed horn support struts */}
        <line x1="35" y1="30" x2="70" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="105" y1="30" x2="70" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        <line x1="70" y1="15" x2="70" y2="60" stroke="#6b7280" strokeWidth="1.5" />
        
        {/* Feed horn */}
        <rect x="66" y="55" width="8" height="15" fill="url(#feedGradient)" />
        <polygon points="62,70 78,70 70,82" fill="url(#feedGradient)" />
        
        {/* Receiving indicator light */}
        <circle 
          cx="70" 
          cy="60" 
          r="3" 
          fill={isReceiving ? "#06b6d4" : "#1e3a5f"}
          className="transition-all duration-300"
        >
          {isReceiving && (
            <animate attributeName="opacity" values="1;0.4;1" dur="0.5s" repeatCount="indefinite" />
          )}
        </circle>
        
        {/* Signal reception waves on dish */}
        <g className="animate-pulse" style={{ animationDuration: '1s' }}>
          <ellipse cx="70" cy="28" rx="20" ry="6" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.6" />
          <ellipse cx="70" cy="26" rx="12" ry="4" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4" />
        </g>
        
        {/* Incoming signal waves (animated) */}
        <g>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M ${30 - i * 8} ${15 - i * 8} Q 70 ${-5 - i * 10} ${110 + i * 8} ${15 - i * 8}`}
              fill="none"
              stroke="#06b6d4"
              strokeWidth={1.2 - i * 0.3}
              opacity={0.7 - i * 0.2}
              strokeDasharray="4 6"
              className="animate-signal-incoming"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </g>
        
        {/* Gradients */}
        <defs>
          <radialGradient id="receivingGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="baseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="100%" stopColor="#1f2937" />
          </linearGradient>
          <linearGradient id="structureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4b5563" />
            <stop offset="50%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
          <linearGradient id="mountGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
          <linearGradient id="dishGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="dishInnerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
          <linearGradient id="dishCenterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
          <linearGradient id="feedGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ParallaxTelescope;
