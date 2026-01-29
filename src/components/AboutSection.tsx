import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Eficiencia",
    description:
      "Automatizo procesos para liberar tiempo operativo y reducir carga manual en tu equipo",
  },
  {
    icon: Target,
    title: "Precisión",
    description:
      "Soluciones diseñadas a medida, alineadas con tu flujo real de trabajo",
  },
  {
    icon: Users,
    title: "Colaboración",
    description:
      "Trabajo contigo para entender el negocio antes de proponer cualquier automatización",
  },
  {
    icon: Award,
    title: "Resultados",
    description:
      "Automatizaciones orientadas a métricas claras y retorno de inversión medible",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-6">
              Automatización e IA{" "}
              <span className="text-gradient">
                aplicadas a resultados reales
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Ayudo a empresas a optimizar y escalar sus operaciones mediante
                automatización de procesos y soluciones de inteligencia
                artificial, utilizando plataformas como n8n y Make
                (anteriormente Integromat).
              </p>

              <p>
                Mi enfoque no se basa en automatizar por automatizar, sino en
                identificar cuellos de botella, tareas repetitivas y procesos
                ineficientes para transformarlos en flujos de trabajo robustos,
                mantenibles y escalables.
              </p>

              <p>
                Trabajo tanto con startups como con empresas consolidadas,
                diseñando soluciones que reducen costes operativos, minimizan
                errores y permiten a los equipos centrarse en lo que realmente
                aporta valor al negocio.
              </p>
            </div>
          </motion.div>

          {/* Valores */}
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
