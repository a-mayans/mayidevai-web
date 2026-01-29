import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  MessageSquare,
  Calendar,
  ShoppingCart,
  Users,
  Bell,
  Receipt,
  Globe,
} from "lucide-react";

const useCases = [
  {
    icon: Receipt,
    title: "Automatización de facturas",
    description:
      "Automatización del procesamiento de facturas mediante extracción inteligente de datos, validación y registro automático en el sistema contable, eliminando tareas manuales y reduciendo errores administrativos.",
    tags: [
      "Extracción de datos",
      "Automatización contable",
      "Control financiero",
    ],
    link: "/casos/automatizacion-facturas",
  },
  {
    icon: MessageSquare,
    title: "Chatbots de atención al cliente",
    description:
      "Sistemas de atención al cliente basados en IA que responden consultas frecuentes en tiempo real, filtran solicitudes, recopilan información clave y escalan solo los casos que requieren intervención humana.",
    tags: [
      "Atención automática 24/7",
      "IA conversacional",
      "Escalado de soporte",
    ],
    link: "/casos/chatbots-atencion-cliente",
  },
  {
    icon: Calendar,
    title: "Gestión de citas y reservas",
    description:
      "Sistema automatizado de gestión de citas con confirmaciones, recordatorios y sincronización en tiempo real con calendarios, reduciendo ausencias y carga administrativa.",
    tags: [
      "Menos no-shows",
      "Automatización operativa",
      "Sincronización de calendarios",
    ],
    link: "/casos/gestion-citas",
  },
  {
    icon: ShoppingCart,
    title: "Automatización de e-commerce",
    description:
      "Automatización de pedidos, inventario y notificaciones para que la tienda online funcione de forma escalable, reduciendo errores manuales y tiempos de gestión.",
    tags: [
      "Procesos escalables",
      "Optimización de flujos",
      "Gestión de pedidos",
    ],
    link: "/casos/automatizacion-ecommerce",
  },
  {
    icon: Users,
    title: "Onboarding de clientes",
    description:
      "Automatización del proceso de alta de nuevos clientes: recopilación de información, validaciones, creación de registros y activación de flujos internos sin intervención manual.",
    tags: [
      "Alta de clientes en minutos",
      "Flujos automatizados",
      "Experiencia de cliente",
    ],
    link: "/casos/onboarding-clientes",
  },
  {
    icon: Bell,
    title: "Alertas y notificaciones",
    description:
      "Sistema de alertas automatizadas basadas en eventos, métricas o condiciones del negocio para mantener el control operativo en tiempo real y reaccionar sin depender de revisiones manuales.",
    tags: [
      "Control en tiempo real",
      "Notificaciones automáticas",
      "Gestión por eventos",
    ],
    link: "/casos/alertas-notificaciones",
  },
  {
    icon: FileText,
    title: "Sistema de actas con IA",
    description:
      "Automatización completa de la generación de actas de obra mediante chatbot con IA, incluyendo creación del documento y organización automática por proyecto en Google Drive.",
    tags: [
      "Generación de documentos",
      "IA aplicada",
      "Automatización operativa",
    ],
    link: "/casos/sistema-actas-ia",
  },
  {
    icon: Globe,
    title: "Sincronización multi-plataforma",
    description:
      "Integración y sincronización automática de datos entre CRM, ERP, email marketing y otras herramientas para evitar duplicidades, errores manuales y mantener una única fuente de verdad en toda la operativa.",
    tags: [
      "Datos siempre coherentes",
      "Integración de sistemas",
      "Automatización entre herramientas",
    ],
    link: "/casos/sincronizacion-multiplataforma",
  },
];

const UseCasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="casos" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
            Automatizaciones que{" "}
            <span className="text-gradient">las empresas demandan</span>
          </h2>
          <p className="text-muted-foreground">
            Casos de éxito reales que diseño e implemento para optimizar
            operaciones, reducir trabajo manual y escalar procesos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-secondary/30 flex flex-col h-full"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] font-medium text-secondary bg-secondary/10 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-accent transition-colors duration-300">
                <useCase.icon className="w-6 h-6 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold font-display text-lg mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">
                {useCase.description}
              </p>
              {useCase.link && (
                <a
                  href={useCase.link}
                  className="inline-flex items-center text-sm font-semibold text-secondary hover:underline gap-1 mt-auto"
                >
                  Ver caso completo →
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            ¿No ves tu caso de uso? Analizamos tu proceso y lo automatizamos.
          </p>
          <a
            href="#contacto"
            className="text-secondary font-semibold hover:underline inline-flex items-center gap-1"
          >
            Solicitar diagnóstico →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
