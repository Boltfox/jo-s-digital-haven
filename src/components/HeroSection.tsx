import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            PhD Candidate in Radio Astronomy
          </p>
        </div>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Jompoj{' '}
          <span className="text-gradient-cosmic">
            Wongphechauxsorn
          </span>
        </h1>
        
        <div 
          className="animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="text-2xl md:text-3xl font-display italic text-muted-foreground mb-8">
            A Pulsar Hunter
          </p>
        </div>

        <div 
          className="max-w-2xl mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            University of Bonn / Max Planck Institute for Radio Astronomy
          </p>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="mailto:jompoj@mpifr-bonn.mpg.de"
            className="group flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 hover:glow-blue"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-foreground">Email</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
