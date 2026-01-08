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
    title: "Automatización de procesos con n8n",
    description:
      "Diseño flujos de trabajo a medida para eliminar tareas repetitivas, reducir errores y conectar todas tus herramientas.",
    features: [
      "Flujos personalizados",
      "Integraciones vía API",
      "Self-hosted o cloud",
    ],
  },
  {
    icon: Bot,
    title: "IA aplicada a negocio",
    description:
      "Integro modelos de IA en procesos reales para automatizar decisiones, clasificar información y generar respuestas.",
    features: [
      "ChatGPT / Claude",
      "Clasificación y análisis",
      "Acciones automáticas",
    ],
  },
  {
    icon: Plug,
    title: "Automatización rápida con Make",
    description:
      "Creo automatizaciones visuales para validar ideas, lanzar procesos rápido o complementar flujos existentes.",
    features: [
      "Escenarios visuales",
      "+1000 integraciones",
      "Webhooks y APIs",
    ],
  },
  {
    icon: Database,
    title: "Gestión de datos",
    description:
      "Centralizo, sincronizo y transformo datos entre sistemas para que siempre estén actualizados y listos para usar.",
    features: [
      "Sincronización de sistemas",
      "Transformación de datos",
      "Procesos ETL automáticos",
    ],
  },
  {
    icon: Mail,
    title: "Email y notificaciones",
    description:
      "Configuro comunicaciones automáticas basadas en eventos y comportamiento del usuario, sin intervención manual.",
    features: [
      "Emails transaccionales",
      "Triggers inteligentes",
      "Notificaciones multicanal",
    ],
  },
  {
    icon: BarChart3,
    title: "Dashboards y reporting automático",
    description:
      "Creo dashboards que se actualizan solos para que tomes decisiones basadas en datos reales y actuales.",
    features: [
      "KPIs personalizados",
      "Actualización automática",
      "Alertas y métricas clave",
    ],
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
            Servicios de automatización{" "}
            <span className="text-gradient">orientados a resultados</span>
          </h2>
          <p className="text-muted-foreground">
            Automatizo procesos reales para que tu negocio ahorre tiempo, reduzca
            errores y escale sin aumentar carga operativa.
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
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
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
