import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Zap,
  Layout,
  Target,
  AlertCircle,
  Calendar,
  Clock,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const GestionCitasReservas = () => {
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
      <Navbar />

      <main>
        {/* Hero Section del Caso */}
        <section className="pt-32 pb-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                  Caso de éxito real
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
                Gestión de{" "}
                <span className="text-gradient">citas y reservas</span>{" "}
                automatizada
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Sistema inteligente de recordatorios para eliminar inasistencias
                y optimizar la agenda
              </p>
              <p className="text-sm text-muted-foreground bg-muted/30 inline-block px-4 py-2 rounded-lg">
                Implementado para una clínica de estética y bienestar de alto
                volumen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto space-y-24">
              {/* El Contexto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 items-start"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Search className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">
                    El contexto
                  </h2>
                </div>
                <div className="md:col-span-2 space-y-4 text-muted-foreground">
                  <p>
                    Clínica de estética con una agenda saturada y una gestión de
                    citas que dependía totalmente de la atención telefónica y
                    manual.
                  </p>
                  <p>
                    Con más de 20 citas diarias, la carga de trabajo para
                    confirmar asistencias consumía horas del personal de
                    recepción, distrayéndolos de la atención en sala.
                  </p>
                </div>
              </motion.div>

              {/* El Problema */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-accent/5 rounded-2xl p-8 border border-accent/10"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">
                    El problema
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
                  <div>
                    <p className="mb-4">
                      La falta de un sistema de seguimiento eficiente provocaba:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Alto porcentaje de 'no-shows' (inasistencias)",
                        "Huecos en la agenda imposibles de rellenar a última hora",
                        "Gestión manual de recordatorios por WhatsApp uno a uno",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 md:mt-10">
                      {[
                        "Errores humanos en la toma de datos de citas",
                        "Saturación de las líneas telefónicas",
                        "Falta de trazabilidad de las confirmaciones",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 font-medium text-foreground italic">
                      Esto se traducía en pérdidas económicas directas y una
                      experiencia de cliente menos profesional.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* La Solución */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">
                    La solución
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  Se implementó un flujo de trabajo automatizado que conecta
                  Google Calendar con WhatsApp para una gestión de recordatorios
                  100% autónoma.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Trigger Programado",
                      text: "El sistema se activa automáticamente en horarios específicos para revisar la agenda del día siguiente.",
                    },
                    {
                      title: "Recogida de Citas",
                      text: "Sincronización directa con Google Calendar para extraer todos los eventos y datos de contacto.",
                    },
                    {
                      title: "Filtrado Inteligente",
                      text: "Un nodo condicional verifica qué citas requieren recordatorio según parámetros predefinidos.",
                    },
                    {
                      title: "Procesamiento en Lote",
                      text: "Gestión de múltiples citas simultáneamente mediante un sistema de bucles optimizado.",
                    },
                    {
                      title: "Generación Personalizada",
                      text: "Se crea un mensaje único para cada cliente con su nombre, hora y tipo de tratamiento.",
                    },
                    {
                      title: "Envío Automatizado",
                      text: "Notificación vía WhatsApp recibiendo confirmaciones que se registran en el sistema.",
                    },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="bg-gradient-card p-6 rounded-xl border border-border/50"
                    >
                      <span className="text-secondary font-bold text-xs uppercase block mb-2">
                        Paso {i + 1}
                      </span>
                      <h4 className="font-bold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="bg-secondary/5 border border-secondary/20 p-4 rounded-lg text-center">
                  <p className="text-secondary font-semibold">
                    Un proceso redondo que no requiere intervención humana
                    diaria.
                  </p>
                </div>
              </motion.div>

              {/* Resultados */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold font-display">
                    Resultados obtenidos
                  </h2>
                </div>

                {/* Resultados Destacados */}
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "Reducción del 85% en las inasistencias",
                    "Ahorro de 15 horas semanales de recepción",
                    "Aumento de la satisfacción del cliente",
                  ].map((highlight, i) => (
                    <div
                      key={i}
                      className="bg-secondary/10 border border-secondary/20 p-6 rounded-2xl text-center shadow-soft"
                    >
                      <h4 className="font-bold text-foreground leading-tight">
                        {highlight}
                      </h4>
                    </div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mt-8">
                  <div>
                    <p className="text-muted-foreground mb-6">
                      Impacto positivo en la rentabilidad y el servicio:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Agenda optimizada con mayor ocupación real",
                        "Eliminación de llamadas repetitivas de confirmación",
                        "Imagen de marca más moderna y tecnológica",
                      ].map((result, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                          <span className="text-muted-foreground">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 font-semibold text-primary text-lg">
                      La clínica ahora funciona con la precisión de un reloj
                      suizo, sin carga administrativa extra.
                    </p>
                  </div>
                  <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-elevated">
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-4">
                        Rol de MayidevAI
                      </h3>
                      <ul className="space-y-3 opacity-90">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Identificación de cuellos de botella en recepción
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Integración API entre Calendar y WhatsApp
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm font-bold">
                            Configuración de lógica condicional para
                            recordatorios inteligentes
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Monitorización y ajuste de tasas de entrega
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Soporte continuo y optimización del flujo
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  </div>
                </div>
              </motion.div>

              {/* Sistema Replicable */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center bg-muted/20 rounded-3xl p-12"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Layout className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold font-display">
                    Un sistema replicable
                  </h2>
                </div>
                <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Este sistema de reservas y recordatorios es ideal para
                  cualquier negocio que dependa de una agenda de citas.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {[
                    "Clínicas dentales",
                    "Fisioterapeutas",
                    "Salones de belleza",
                    "Consultas médicas",
                    "Centros de formación",
                    "Servicios técnicos",
                  ].map((field, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium"
                    >
                      {field}
                    </span>
                  ))}
                </div>
                <p className="text-sm italic text-muted-foreground">
                  Transformamos la gestión manual en un activo digital
                  eficiente.
                </p>
              </motion.div>

              {/* Conclusión y CTA */}
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
                    Un sistema de reservas automatizado elimina la fricción
                    entre el cliente y el servicio. No solo reduce ausencias,
                    sino que permite una planificación óptima de los recursos.
                  </p>
                  <p className="font-semibold text-foreground">
                    La automatización operativa es la clave para ofrecer un
                    servicio puntual y profesional a gran escala.
                  </p>
                </div>

                <div className="bg-gradient-card border border-secondary/30 rounded-3xl p-10 shadow-elevated relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">
                      ¿Quieres automatizar tus reservas?
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GestionCitasReservas;
