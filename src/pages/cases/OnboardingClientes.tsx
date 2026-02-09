import { motion } from "framer-motion";
import { ArrowRight, Construction } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OnboardingClientes = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const element = document.querySelector("#contacto");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Onboarding de Clientes Automatizado"
        description="Automatiza el alta de nuevos clientes para ofrecer una experiencia impecable desde el primer minuto. Mejora la retención desde el día uno."
        canonical="https://mayidevai.com/casos/onboarding-clientes"
        keywords="onboarding clientes, alta automatizada, experiencia cliente, retención, automatización CRM"
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Onboarding de <span className="text-gradient">clientes</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Automatiza el alta de nuevos clientes para ofrecer una
                experiencia impecable desde el primer minuto.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bloque En Preparación */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-muted/30 border border-border/50 rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Construction className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
                🚧 Caso en preparación
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Actualmente estamos implementando y documentando proyectos
                reales en esta área. Si este tipo de automatización encaja con
                tu negocio, analizo tu caso sin compromiso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Conclusión y CTA */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center pt-12"
            >
              <h2 className="text-3xl font-bold font-display mb-6">
                Conclusión
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 mb-16 text-lg text-muted-foreground">
                <p>
                  La primera impresión es crucial para la retención. Un proceso
                  de alta automatizado garantiza que el cliente reciba valor
                  desde el minuto uno, reforzando la confianza en tu marca.
                </p>
                <p className="font-semibold text-foreground">
                  Transformar el onboarding administrativo en una experiencia
                  fluida es una ventaja competitiva inmediata.
                </p>
              </div>

              <div className="max-w-4xl mx-auto bg-gradient-card border border-secondary/30 rounded-3xl p-10 shadow-elevated relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    ¿Quieres mejorar tu proceso de alta?
                  </h3>
                  <p className="text-muted-foreground text-xl mb-10">
                    Analizamos tu operativa y diseñamos una automatización
                    adaptada a tu flujo real de trabajo.
                  </p>
                  <div className="flex justify-center">
                    <Button
                      variant="hero"
                      size="xl"
                      onClick={handleCTAClick}
                      className="group"
                    >
                      Solicitar diagnóstico
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OnboardingClientes;
