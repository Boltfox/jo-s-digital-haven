import { Terminal, Code, FileText, Container, Database, Globe } from 'lucide-react';

const skills = [
  {
    name: 'Linux',
    icon: Terminal,
    description: 'System administration & shell scripting',
    color: 'primary',
  },
  {
    name: 'Python',
    icon: Code,
    description: 'Data analysis & scientific computing',
    color: 'accent',
  },
  {
    name: 'LaTeX',
    icon: FileText,
    description: 'Scientific writing & publications',
    color: 'primary',
  },
  {
    name: 'Docker',
    icon: Container,
    description: 'Containerization & deployment',
    color: 'accent',
  },
  {
    name: 'Data Science',
    icon: Database,
    description: 'Analysis & machine learning',
    color: 'primary',
  },
  {
    name: 'Web Development',
    icon: Globe,
    description: 'Portfolio & outreach websites',
    color: 'accent',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-cosmic">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isPrimary = skill.color === 'primary';
            
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-500 ${
                  isPrimary ? 'hover:glow-blue' : 'hover:glow-purple'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                  isPrimary ? 'bg-primary/20 group-hover:bg-primary/30' : 'bg-accent/20 group-hover:bg-accent/30'
                } transition-colors`}>
                  <Icon className={`w-8 h-8 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
