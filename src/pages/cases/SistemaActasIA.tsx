import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Zap,
  Layout,
  FileCheck,
  Target,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SistemaActasIA = () => {
  const navigate = useNavigate();

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
                Sistema de <span className="text-gradient">actas de obra</span>{" "}
                con IA
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Automatización real para generar, entregar y organizar actas de
                obra sin trabajo administrativo
              </p>
              <p className="text-sm text-muted-foreground bg-muted/30 inline-block px-4 py-2 rounded-lg">
                Implementado para una empresa de reformas, arquitectura y diseño
                de interiores.
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
                    Empresa de gestión integral de reformas en fase de
                    crecimiento, con varios proyectos activos en paralelo y un
                    equipo pequeño muy enfocado en la operativa de obra.
                  </p>
                  <p>
                    A medida que aumentaban los proyectos, también lo hacía la
                    carga administrativa asociada a la documentación de cada
                    intervención.
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
                      Tras cada visita de obra era necesario generar un acta
                      detallada para clientes y control interno. Antes de la
                      automatización:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Las actas se redactaban manualmente",
                        "No siempre se podían hacer en el momento",
                        "Se acumulaban durante la semana",
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
                        "Se redactaban días después, con pérdida de contexto",
                        "Había retrasos en la entrega al cliente",
                        "La documentación acababa desordenada",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 font-medium text-foreground italic">
                      Esto suponía pérdida de tiempo, mayor riesgo de errores y
                      una carga administrativa creciente.
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
                  Se diseñó un sistema automatizado de generación y gestión de
                  actas con IA, adaptado al flujo real de trabajo del equipo.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Captura ágil",
                      text: "El técnico introduce la información de la obra mediante texto o audio a través de un chatbot",
                    },
                    {
                      title: "IA Inteligente",
                      text: "Un sistema de IA conversacional estructura y valida los datos",
                    },
                    {
                      title: "Generación Automática",
                      text: "Se genera automáticamente el acta usando la plantilla propia de la empresa",
                    },
                    {
                      title: "Google Docs",
                      text: "El documento se crea directamente en Google Docs",
                    },
                    {
                      title: "Organización en Drive",
                      text: "El sistema organiza el acta en la carpeta correcta del proyecto",
                    },
                    {
                      title: "Registro y control",
                      text: "Cada acta queda registrada para control y seguimiento",
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
                    Todo el proceso se realiza sin trabajo manual posterior.
                  </p>
                </div>
              </motion.div>

              {/* Resultados (JOYITA - Rediseñado) */}
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
                    "Actas generadas en el momento de salir de obra",
                    "Eliminación del trabajo administrativo repetitivo",
                    "Entrega inmediata al cliente",
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
                      Impacto directo en el día a día del negocio:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Mejor organización y trazabilidad de la documentación",
                        "Reducción de errores humanos",
                        "Ahorro significativo de tiempo operativo",
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
                      El equipo puede centrarse en la obra y el cliente, no en
                      tareas administrativas.
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
                            Análisis del problema operativo real
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Diseño de la arquitectura del sistema
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm font-bold">
                            Diseño y desarrollo de la automatización end-to-end,
                            alineada con la operativa real del cliente
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Integración con las herramientas del cliente
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" />
                          <span className="text-sm">
                            Ajustes finales basados en feedback real
                          </span>
                        </li>
                      </ul>
                      <p className="mt-6 text-xs text-white/70 italic">
                        El cliente solo participó validando necesidades
                        prácticas del día a día.
                      </p>
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
                  Este tipo de solución es ideal para diversos sectores
                  profesionales que requieren documentación recurrente tras
                  visitas técnicas.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {[
                    "Empresas de reformas",
                    "Estudios de arquitectura",
                    "Ingeniería y dirección de obra",
                    "Inspecciones técnicas",
                    "Negocios con partes de trabajo",
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
                  La automatización se adapta a cada cliente manteniendo el
                  mismo núcleo operativo.
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
                    Este caso demuestra cómo la IA aplicada a procesos reales
                    permite eliminar fricción operativa, mejorar la experiencia
                    del cliente y profesionalizar la gestión interna.
                  </p>
                  <p className="font-semibold text-foreground">
                    No se trata de usar IA por tendencia, sino de resolver
                    problemas concretos del negocio.
                  </p>
                </div>

                <div className="bg-gradient-card border border-secondary/30 rounded-3xl p-10 shadow-elevated relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">
                      ¿Tienes un proceso similar en tu empresa?
                    </h3>
                    <p className="text-muted-foreground text-xl mb-10">
                      Analizamos tu operativa y diseñamos una automatización
                      adaptada a tu flujo real de trabajo.
                    </p>
                    <div className="flex justify-center">
                      <Button
                        variant="hero"
                        size="xl"
                        onClick={() => navigate("/#contacto")}
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

export default SistemaActasIA;
