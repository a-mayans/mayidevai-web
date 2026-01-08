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
    savings: "Ahorra 10+ horas/semana",
  },
  {
    icon: MessageSquare,
    title: "Chatbots de atención al cliente",
    description:
      "Bots inteligentes que responden consultas 24/7, escalan casos complejos y aprenden de cada interacción.",
    savings: "Respuesta inmediata 24/7",
  },
  {
    icon: Calendar,
    title: "Gestión de citas y reservas",
    description:
      "Sistema automatizado de reservas con confirmaciones, recordatorios y sincronización con calendarios.",
    savings: "Reduce no-shows 80%",
  },
  {
    icon: ShoppingCart,
    title: "Automatización de e-commerce",
    description:
      "Sincronización de inventario, procesamiento de pedidos, notificaciones y seguimiento automatizado.",
    savings: "Procesa 3x más pedidos",
  },
  {
    icon: Users,
    title: "Onboarding de clientes",
    description:
      "Flujos automáticos para dar la bienvenida, recopilar información y activar nuevos clientes sin esfuerzo.",
    savings: "Activa clientes en minutos",
  },
  {
    icon: Bell,
    title: "Alertas y notificaciones",
    description:
      "Sistema de alertas personalizadas basadas en eventos, métricas o condiciones específicas de tu negocio.",
    savings: "Nunca pierdas una alerta",
  },
  {
    icon: FileText,
    title: "Generación de documentos",
    description:
      "Creación automática de contratos, propuestas y reportes personalizados a partir de plantillas.",
    savings: "Documentos en segundos",
  },
  {
    icon: Globe,
    title: "Sincronización multi-plataforma",
    description:
      "Mantén tus datos sincronizados entre CRM, ERP, email marketing y todas tus herramientas.",
    savings: "Datos siempre actualizados",
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
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Casos de uso
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
            Automatizaciones que{" "}
            <span className="text-gradient">las empresas demandan</span>
          </h2>
          <p className="text-muted-foreground">
            Estos son algunos de los casos de uso más solicitados por las
            empresas que buscan optimizar sus operaciones.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-gradient-card rounded-xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 hover:border-secondary/30 cursor-pointer"
            >
              <div className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-secondary bg-secondary/10 rounded-bl-xl rounded-tr-xl">
                {useCase.savings}
              </div>
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-accent transition-colors duration-300">
                <useCase.icon className="w-6 h-6 text-primary group-hover:text-secondary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold font-display text-lg mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {useCase.description}
              </p>
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
            ¿No ves tu caso de uso? ¡Cuéntame qué necesitas!
          </p>
          <a
            href="#contacto"
            className="text-secondary font-semibold hover:underline inline-flex items-center gap-1"
          >
            Consulta personalizada →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
