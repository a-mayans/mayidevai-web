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
      "Extracción automática de datos de facturas, validación y registro en tu sistema contable sin intervención manual.",
    tags: ["Ahorra 10+ horas/semana"],
  },
  {
    icon: MessageSquare,
    title: "Chatbots de atención al cliente",
    description:
      "Bots inteligentes que responden consultas 24/7, escalan casos complejos y aprenden de cada interacción.",
    tags: ["Atención automática 24/7"],
  },
  {
    icon: Calendar,
    title: "Gestión de citas y reservas",
    description:
      "Sistema automatizado de reservas con confirmaciones, recordatorios y sincronización con calendarios.",
    tags: ["Menos no-shows y cancelaciones"],
  },
  {
    icon: ShoppingCart,
    title: "Automatización de e-commerce",
    description:
      "Sincronización de inventario, procesamiento de pedidos, notificaciones y seguimiento automatizado.",
    tags: ["Procesos escalables"],
  },
  {
    icon: Users,
    title: "Onboarding de clientes",
    description:
      "Flujos automáticos para dar la bienvenida, recopilar información y activar nuevos clientes sin esfuerzo.",
    tags: ["Alta de clientes en minutos"],
  },
  {
    icon: Bell,
    title: "Alertas y notificaciones",
    description:
      "Sistema de alertas personalizadas basadas en eventos, métricas o condiciones específicas de tu negocio.",
    tags: ["Control en tiempo real"],
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
      "Mantén tus datos sincronizados entre CRM, ERP, email marketing y todas tus herramientas.",
    tags: ["Datos siempre coherentes"],
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
