import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Evita que, tras limpiar el state, el efecto vuelva a scrollear a "inicio"
  const skipNextDefaultScrollRef = useRef(false);

  useEffect(() => {
    // Caso A: navegación con state desde otra página (/casos/...)
    const scrollTo = (location.state as any)?.scrollTo as string | undefined;

    if (scrollTo) {
      const el = document.getElementById(scrollTo);

      // Marcamos para saltar el scroll "por pathname" en el siguiente render
      skipNextDefaultScrollRef.current = true;

      // Hacemos scroll (si todavía no existe, intentamos unos frames)
      let tries = 0;
      const tryScroll = () => {
        const target = document.getElementById(scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });

          // Limpia state SIN provocar un segundo scroll "a inicio"
          navigate("/", { replace: true, state: null as any });
          return;
        }

        tries += 1;
        if (tries < 30) requestAnimationFrame(tryScroll);
      };

      requestAnimationFrame(tryScroll);
      return;
    }

    // Si acabamos de venir por state y lo hemos limpiado, no hagas el scroll por pathname
    if (skipNextDefaultScrollRef.current) {
      skipNextDefaultScrollRef.current = false;
      return;
    }

    // Caso B: navegación directa por URL limpia
    const scrollMap: Record<string, string> = {
      "/": "inicio",
      "/sobre-mi": "sobre-mi",
      "/servicios": "servicios",
      "/casos": "casos",
      "/contacto": "contacto",
    };

    const sectionId = scrollMap[location.pathname];
    if (!sectionId) return;

    const element = document.getElementById(sectionId);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [location.pathname, location.state, navigate]);

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

// deploy test

export default Index;
