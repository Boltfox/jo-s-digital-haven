import { Mail, MapPin, Building2 } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient-cosmic">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Interested in collaboration or have questions about my research? Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:jompoj@mpifr-bonn.mpg.de"
            className="glass-card p-8 rounded-2xl text-center group hover:glow-blue transition-all duration-500 hover:scale-105"
          >
            <div className="inline-flex p-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Work Email</h3>
            <p className="text-muted-foreground text-sm break-all">jompoj@mpifr-bonn.mpg.de</p>
          </a>

          <a
            href="mailto:jompoj.bjstp@gmail.com"
            className="glass-card p-8 rounded-2xl text-center group hover:glow-purple transition-all duration-500 hover:scale-105"
          >
            <div className="inline-flex p-4 rounded-2xl bg-accent/20 group-hover:bg-accent/30 transition-colors mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Personal Email</h3>
            <p className="text-muted-foreground text-sm break-all">jompoj.bjstp@gmail.com</p>
          </a>

          <div className="glass-card p-8 rounded-2xl text-center group hover:glow-blue transition-all duration-500 hover:scale-105">
            <div className="inline-flex p-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors mb-4">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Institution</h3>
            <p className="text-muted-foreground text-sm">Max Planck Institute for Radio Astronomy</p>
            <p className="text-muted-foreground text-sm">Bonn, Germany</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
