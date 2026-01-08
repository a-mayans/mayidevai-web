import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Workflow,
  Bot,
  Database,
  Mail,
  BarChart3,
  Plug,
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Automatización con n8n",
    description:
      "Diseño e implemento flujos de trabajo personalizados con n8n, conectando todas tus herramientas para eliminar tareas manuales.",
    features: ["Flujos personalizados", "Integraciones API", "Self-hosted o cloud"],
  },
  {
    icon: Bot,
    title: "Integración de IA",
    description:
      "Incorporo modelos de inteligencia artificial en tus procesos para automatizar decisiones y generar contenido.",
    features: ["ChatGPT / Claude", "Procesamiento de datos", "Respuestas automáticas"],
  },
  {
    icon: Plug,
    title: "Automatización con Make",
    description:
      "Creo escenarios visuales en Make para automatizar workflows complejos sin necesidad de programar.",
    features: ["Escenarios visuales", "+1000 apps", "Webhooks y APIs"],
  },
  {
    icon: Database,
    title: "Gestión de datos",
    description:
      "Automatizo la recopilación, transformación y almacenamiento de datos entre tus diferentes sistemas.",
    features: ["ETL automatizado", "Sincronización", "Reportes automáticos"],
  },
  {
    icon: Mail,
    title: "Email automation",
    description:
      "Configuro secuencias de emails automatizados y respuestas inteligentes basadas en el comportamiento del usuario.",
    features: ["Secuencias personalizadas", "Triggers inteligentes", "A/B testing"],
  },
  {
    icon: BarChart3,
    title: "Dashboards y reportes",
    description:
      "Creo dashboards automatizados que se actualizan en tiempo real con los KPIs de tu negocio.",
    features: ["Tiempo real", "KPIs personalizados", "Alertas automáticas"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-gradient-hero relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
            Soluciones de automatización{" "}
            <span className="text-gradient">para cada necesidad</span>
          </h2>
          <p className="text-muted-foreground">
            Ofrezco servicios especializados para transformar la operativa de tu
            empresa mediante automatización e inteligencia artificial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 group border border-border/50 hover:border-secondary/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
