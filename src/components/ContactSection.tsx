import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "¡Mensaje enviado!",
      description: "Me pondré en contacto contigo pronto.",
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-hero relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
              ¿Listo para{" "}
              <span className="text-gradient">automatizar tu negocio</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cuéntame sobre tu proyecto y te ayudaré a encontrar la mejor
              solución de automatización para tu empresa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-5 gap-8"
          >
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display">Email</h3>
                    <a
                      href="mailto:mayidevai@gmail.com"
                      className="text-secondary hover:underline"
                    >
                      mayidevai@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Respondo en menos de 24 horas. ¡Escríbeme y hablamos de cómo
                  puedo ayudarte!
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold font-display mb-3">
                  ¿Qué incluye la consultoría?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Análisis de tus procesos actuales
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Propuesta de automatización personalizada
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Estimación de ahorro de tiempo y costes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Plan de implementación detallado
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-card space-y-6"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold font-display mb-2">
                      ¡Gracias por tu mensaje!
                    </h3>
                    <p className="text-muted-foreground">
                      Me pondré en contacto contigo muy pronto.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Nombre
                        </label>
                        <Input
                          name="name"
                          placeholder="Tu nombre"
                          required
                          className="bg-muted/50"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          className="bg-muted/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Empresa
                      </label>
                      <Input
                        name="company"
                        placeholder="Nombre de tu empresa"
                        className="bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        ¿Cómo puedo ayudarte?
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Cuéntame qué procesos te gustaría automatizar..."
                        rows={4}
                        required
                        className="bg-muted/50 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
