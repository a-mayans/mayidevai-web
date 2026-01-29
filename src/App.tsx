import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SistemaActasIA from "./pages/cases/SistemaActasIA";
import AutomatizacionFacturas from "./pages/cases/AutomatizacionFacturas";
import ChatbotsAtencionCliente from "./pages/cases/ChatbotsAtencionCliente";
import GestionCitasReservas from "./pages/cases/GestionCitasReservas";
import AutomatizacionEcommerce from "./pages/cases/AutomatizacionEcommerce";
import OnboardingClientes from "./pages/cases/OnboardingClientes";
import AlertasNotificaciones from "./pages/cases/AlertasNotificaciones";
import SincronizacionMultiplataforma from "./pages/cases/SincronizacionMultiplataforma";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/casos/sistema-actas-ia" element={<SistemaActasIA />} />
          <Route
            path="/casos/automatizacion-facturas"
            element={<AutomatizacionFacturas />}
          />
          <Route
            path="/casos/chatbots-atencion-cliente"
            element={<ChatbotsAtencionCliente />}
          />
          <Route
            path="/casos/gestion-citas"
            element={<GestionCitasReservas />}
          />
          <Route
            path="/casos/automatizacion-ecommerce"
            element={<AutomatizacionEcommerce />}
          />
          <Route
            path="/casos/onboarding-clientes"
            element={<OnboardingClientes />}
          />
          <Route
            path="/casos/alertas-notificaciones"
            element={<AlertasNotificaciones />}
          />
          <Route
            path="/casos/sincronizacion-multiplataforma"
            element={<SincronizacionMultiplataforma />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
