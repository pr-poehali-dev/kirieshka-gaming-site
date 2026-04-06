import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { AboutSection, SubscribeSection, Footer } from "@/components/Sections";
import { NAV_ITEMS } from "@/constants/channel";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#0a0c12" }}>
      <Header active={activeSection} setActive={setActiveSection} />
      <HeroSection />
      <AboutSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;