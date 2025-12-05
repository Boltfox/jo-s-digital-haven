import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    period: '2019 - Present',
    title: 'PhD Candidate',
    institution: 'University of Bonn / Max Planck Institute for Radio Astronomy',
    location: 'Bonn, Germany',
    description: 'Radio Astronomy, focusing on pulsar searches and timing',
    current: true,
  },
  {
    period: '2016 - 2018',
    title: 'Master of Science',
    institution: 'Argelander-Institut für Astronomie, University of Bonn',
    location: 'Bonn, Germany',
    description: 'Astronomy',
    current: false,
  },
  {
    period: '2012 - 2016',
    title: 'Bachelor of Science',
    institution: 'Department of Physics and Material Science, Faculty of Science, Chiang Mai University',
    location: 'Chiang Mai, Thailand',
    description: 'Physics',
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-stellar">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-cyan to-cosmic-blue mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-cyan" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${item.current ? 'bg-primary animate-pulse-glow' : 'bg-cosmic-purple'}`} />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:glow-blue transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap className={`w-5 h-5 ${item.current ? 'text-primary' : 'text-cosmic-purple'}`} />
                      <span className={`text-sm font-medium ${item.current ? 'text-primary' : 'text-cosmic-purple'}`}>
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">{item.institution}</p>
                    <p className="text-muted-foreground text-sm mb-2">{item.location}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
