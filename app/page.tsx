import { ComparisonSection, FaqSection, FooterSection, HeroMetricsSection, ServicesSection } from "./_components/home/sections";
import { HeroSection } from "./_components/home/HeroSection";
import { HomePromoModal } from "./_components/home/HomePromoModal";
import { Navbar } from "./_components/home/Navbar";
import { ScrollReveal } from "./_components/home/ScrollReveal";
import { ToolsSection } from "./_components/home/ToolsSection";

export default function HomePage() {
  return (
    <div className="text-gray-900 antialiased overflow-x-clip min-h-screen">
      <Navbar />
      <HomePromoModal />
      <HeroSection />
      <ScrollReveal delayMs={0}>
        <HeroMetricsSection />
      </ScrollReveal>
      <ScrollReveal delayMs={40}>
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <ComparisonSection />
      </ScrollReveal>
      <ScrollReveal delayMs={80}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t border-gray-900/5" />
        </div>
      </ScrollReveal>
      <ScrollReveal delayMs={100}>
        <ToolsSection />
      </ScrollReveal>
      <ScrollReveal delayMs={120}>
        <FaqSection />
      </ScrollReveal>
      <ScrollReveal delayMs={140}>
        <FooterSection />
      </ScrollReveal>
    </div>
  );
}
