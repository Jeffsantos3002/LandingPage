import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemsSection } from "@/components/landing/ProblemsSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { ArchitectureSection } from "@/components/landing/ArchitectureSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        {/* <AudienceSection /> */}
        {/* <ArchitectureSection />
        <PricingSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
