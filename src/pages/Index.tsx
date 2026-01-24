import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProfileSection } from '@/components/ProfileSection';
import { CareerSection } from '@/components/CareerSection';
import { VisionSection } from '@/components/VisionSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { MediaSection } from '@/components/MediaSection';
import { GuidingPrinciplesSection } from '@/components/GuidingPrinciplesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <MediaSection />
      <CareerSection />
      <VisionSection />
      <GuidingPrinciplesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
