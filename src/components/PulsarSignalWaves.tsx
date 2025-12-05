import { useEffect, useState } from 'react';

const PulsarSignalWaves = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fade out as user scrolls
  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-5 overflow-hidden"
      style={{ opacity }}
    >
      {/* Signal waves traveling from center (pulsar) to bottom-right (telescope) */}
      <svg className="w-full h-full" preserveAspectRatio="none">
        <defs>
          {/* Gradient for signal waves */}
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          
          {/* Animated dash pattern */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Multiple signal wave paths */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            {/* Main signal beam */}
            <path
              d={`M 50% 35% Q 65% 50% 95% 85%`}
              fill="none"
              stroke="url(#signalGradient)"
              strokeWidth="2"
              strokeDasharray="8 12"
              filter="url(#glow)"
              className="animate-signal-flow"
              style={{
                animationDelay: `${i * 0.6}s`,
              }}
            />
          </g>
        ))}

        {/* Signal particles */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={`particle-${i}`}
            r="3"
            fill="#06b6d4"
            filter="url(#glow)"
            className="animate-signal-particle"
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              begin={`${i * 0.3}s`}
              path="M 400,280 Q 550,400 760,680"
            />
          </circle>
        ))}
      </svg>

      {/* CSS-based signal waves as backup/enhancement */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full animate-signal-pulse"
            style={{
              animationDelay: `${i * 0.5}s`,
              background: 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, transparent 70%)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PulsarSignalWaves;
