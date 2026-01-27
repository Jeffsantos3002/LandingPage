import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemsSection } from "@/components/landing/ProblemsSection";
import { TeamSection } from "@/components/landing/Team";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PitchSection } from "@/components/landing/PitchSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <FeaturesSection />
        <PitchSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
