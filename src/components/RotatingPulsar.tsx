import { useEffect, useState } from 'react';

const RotatingPulsar = () => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64">
      {/* Core neutron star */}
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 shadow-[0_0_40px_rgba(59,130,246,0.8),0_0_80px_rgba(147,51,234,0.5)] animate-pulse" />
      
      {/* Rotating emission beams */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
        {/* Primary beam */}
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1/2 h-1 origin-left">
          <div className="w-full h-full bg-gradient-to-r from-cyan-400/90 via-blue-400/60 to-transparent rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>
        {/* Opposite beam */}
        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 w-1/2 h-1 origin-right">
          <div className="w-full h-full bg-gradient-to-l from-cyan-400/90 via-blue-400/60 to-transparent rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
        </div>
      </div>

      {/* Secondary rotating beams (offset) */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '-1.5s' }}>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1/2 h-0.5 origin-left rotate-90">
          <div className="w-full h-full bg-gradient-to-r from-purple-400/70 via-pink-400/40 to-transparent rounded-full" />
        </div>
        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 w-1/2 h-0.5 origin-right rotate-90">
          <div className="w-full h-full bg-gradient-to-l from-purple-400/70 via-pink-400/40 to-transparent rounded-full" />
        </div>
      </div>

      {/* Magnetic field lines */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="url(#fieldGradient)" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="url(#fieldGradient)" strokeWidth="0.5" opacity="0.3" />
          <defs>
            <linearGradient id="fieldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Outer glow ring */}
      <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute inset-8 rounded-full border border-blue-500/10 animate-ping" style={{ animationDuration: '3s' }} />
    </div>
  );
};

export default RotatingPulsar;
