import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import MediaSection from '@/components/MediaSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ParallaxTelescope from '@/components/ParallaxTelescope';
import PulsarSignalWaves from '@/components/PulsarSignalWaves';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Star Background */}
      <StarField />
      
      {/* Signal waves from pulsar to telescope */}
      <PulsarSignalWaves />
      
      {/* Parallax Radio Telescope */}
      <ParallaxTelescope />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <MediaSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
