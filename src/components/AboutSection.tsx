import { Telescope, Globe, Radio } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-cosmic">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a PhD candidate in radio astronomy at the University of Bonn/Max Planck Institute for Radio Astronomy, 
              my main research focuses on <span className="text-primary font-medium">pulsar searches and timing</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a member of the <span className="text-primary font-medium">High Time Resolution Universe survey (HTRU)</span> and 
              I am using the Fast Folding Algorithm to search for slow pulsars.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am also involved in{' '}
              <a href="https://blackholecam.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Black Hole Cam
              </a>{' '}
              and{' '}
              <a href="https://eventhorizontelescope.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                Event Horizon Telescope collaboration
              </a>, 
              with a particular interest in searching for a pulsar orbiting the supermassive black hole in the Galactic center.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In addition to my research in radio astronomy, I have interests in{' '}
              <span className="text-primary font-medium">physics, astronomy outreach, and data science</span>.
            </p>
          </div>

          {/* Research Highlights */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl hover:glow-blue transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Radio className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Pulsar Research</h3>
                  <p className="text-muted-foreground">
                    Using the Fast Folding Algorithm to discover slow pulsars through the HTRU survey.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Event Horizon Telescope</h3>
                  <p className="text-muted-foreground">
                    Contributing to groundbreaking black hole imaging as part of the EHTC collaboration.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:glow-blue transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Telescope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Black Hole Cam</h3>
                  <p className="text-muted-foreground">
                    Searching for pulsars orbiting the supermassive black hole at the Galactic center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
