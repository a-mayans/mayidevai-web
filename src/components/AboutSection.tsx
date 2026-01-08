import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Eficiencia",
    description: "Automatizo para que tu equipo se enfoque en lo importante",
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Soluciones a medida que se adaptan a tu flujo de trabajo",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo contigo para entender tus necesidades reales",
  },
  {
    icon: Award,
    title: "Resultados",
    description: "Métricas claras y ROI demostrable en cada proyecto",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
              Experto en automatización{" "}
              <span className="text-gradient">e inteligencia artificial</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Soy un especialista en automatización de procesos empresariales
                utilizando las plataformas más potentes del mercado: n8n y Make
                (anteriormente Integromat).
              </p>
              <p>
                Mi enfoque combina la potencia de la inteligencia artificial con
                flujos de trabajo automatizados, permitiendo a las empresas
                liberarse de tareas repetitivas y concentrarse en crecer.
              </p>
              <p>
                Desde startups hasta empresas consolidadas, ayudo a implementar
                soluciones que transforman la manera en que operan, reduciendo
                costes y multiplicando la productividad.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold font-display text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
