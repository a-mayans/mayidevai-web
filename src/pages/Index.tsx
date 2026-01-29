import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string })?.scrollTo;

    if (!scrollTo) {
      // navegación normal → inicio
      window.scrollTo({ top: 0 });
      return;
    }

    const element = document.getElementById(scrollTo);

    if (element) {
      // pequeño delay para asegurar render
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
