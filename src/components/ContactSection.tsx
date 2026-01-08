import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const N8N_WEBHOOK_URL =
  "https://workflows.n8nmayidevai.site/webhook-test/lead-web";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
        source: "landing-mayidevai",
        submittedAt: new Date().toISOString(),
      };

      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setIsSubmitted(true);
      toast({
        title: "Mensaje enviado",
        description: "Revisaré tu caso y te responderé en breve.",
      });
    } catch (error) {
      toast({
        title: "Error al enviar",
        description:
          "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-4">
              ¿Hablamos de{" "}
              <span className="text-gradient">automatizar tu negocio</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cuéntame tu caso y analizaré qué procesos se pueden automatizar
              para ahorrar tiempo, reducir errores y escalar tu operativa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-5 gap-8"
          >
            {/* Info lateral */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-display">
                      Contacto directo
                    </h3>
                    <a
                      href="mailto:mayidevai@gmail.com"
                      className="text-secondary hover:underline"
                    >
                      mayidevai@gmail.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Respondo personalmente en menos de 24 horas.
                  Analizamos tu caso sin compromiso.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold font-display mb-3">
                  ¿Qué incluye la consultoría?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Análisis de procesos actuales
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Propuesta de automatización adaptada a tu negocio
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Estimación real de ahorro de tiempo y costes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    Plan de implementación claro y accionable
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulario */}
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
                      Mensaje recibido
                    </h3>
                    <p className="text-muted-foreground">
                      Revisaré tu caso y te contactaré muy pronto.
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
                        ¿Qué quieres automatizar?
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Describe brevemente el proceso, problema o idea que tienes en mente..."
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
