import AboutSection from "./_components/AboutSection";
import ContactSection from "./_components/ContactSection";

import HeroSection from "./_components/HeroSection";
import LeftSidear from "./_components/LeftSidear";
import MenuSidbar from "./_components/MenuSidbar";
import Overlay from "./_components/Overlay";
import PortfolioSection from "./_components/PortfolioSection";
import ResumeSection from "./_components/ResumeSection";
import RightSidebar from "./_components/RightSidebar";
import ServicesSection from "./_components/ServicesSection";
import SettingSidebar from "./_components/SettingSidebar";
import SkillsSection from "./_components/SkillsSection";
export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <Overlay />
      <MenuSidbar />
      <SettingSidebar />
      <LeftSidear />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ServicesSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <RightSidebar />
    </section>
  );
}
