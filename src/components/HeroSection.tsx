import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-mayidevai.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-32"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img
              src={logoImage}
              alt="MayidevAI"
              className="w-64 md:w-80 lg:w-96 h-auto mx-auto animate-float"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft mb-6"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">
              Automatización real con IA para pymes y negocios digitales
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-10 leading-tight"
          >
            Automatiza procesos, reduce costes y escala tu negocio con{" "}
            <span className="text-gradient">IA aplicada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Diseño e implemento automatizaciones con n8n, APIs e inteligencia artificial
            para eliminar tareas manuales, errores humanos y cuellos de botella.
            Menos trabajo operativo. Más foco en crecer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contacto")}
              className="group"
            >
              Diagnóstico gratuito de automatización
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#servicios")}
            >
              Ver servicios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 mb-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "n8n", label: "Automatizaciones a medida" },
              { value: "API", label: "Integraciones reales" },
              { value: "IA", label: "Decisiones automáticas" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-display text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
