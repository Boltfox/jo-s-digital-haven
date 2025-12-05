import { Play, ExternalLink } from 'lucide-react';

const mediaAppearances = [
  {
    title: 'วิทย์ตามิน - ภารกิจค้นฟ้าคว้าดาว',
    description: 'Presentation on astronomy outreach (in Thai)',
    platform: 'YouTube',
    link: 'https://www.youtube.com/watch?v=zPEAveg4QFU',
    type: 'Presentation',
  },
  {
    title: 'Online Sciathon 2020',
    description: 'Participated in the first Online Sciathon by Lindau Nobel Laureate Meetings',
    platform: 'Lindau Nobel Laureate Meetings',
    link: 'https://www.youtube.com/watch?v=VkVNz1bR_s4',
    type: 'Event',
  },
  {
    title: 'EHT Image of the Black Hole in SgrA*',
    description: 'Part of the MPIfR team on Event Horizon Telescope Collaboration',
    platform: 'Radio Views',
    link: 'https://www.youtube.com/watch?v=z1VxC0J6rzA',
    type: 'Research',
  },
];

const MediaSection = () => {
  return (
    <section id="media" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Media <span className="text-gradient-stellar">Appearances</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cosmic-cyan to-cosmic-blue mx-auto rounded-full" />
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mediaAppearances.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl overflow-hidden group hover:glow-blue transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Thumbnail placeholder with play icon */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <div className="absolute inset-0 bg-cosmic-gradient opacity-20" />
                <div className="relative z-10 p-4 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-background/80 rounded-full text-foreground">
                  {item.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-primary text-sm font-medium mb-2">{item.platform}</p>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                  Watch Video <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
