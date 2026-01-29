import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-mayidevai.png";

const ACTIVE_BLUE = "text-[#2DA8FF]";
const INACTIVE = "text-foreground/80 hover:text-[#2DA8FF]";

// Ajusta según la altura real de tu navbar
const NAVBAR_OFFSET_PX = 300;

const navLinks = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "sobre-mi", label: "Sobre mí", path: "/sobre-mi" },
  { id: "servicios", label: "Servicios", path: "/servicios" },
  { id: "casos", label: "Casos de éxito", path: "/casos" },
];

const SECTION_IDS = ["inicio", "sobre-mi", "servicios", "casos", "contacto"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navigate = useNavigate();
  const location = useLocation();

  // 🔒 Evita que el scroll spy pise un click manual
  const manualLockRef = useRef(false);
  const lockTimeoutRef = useRef<number | null>(null);

  const setManualActive = (id: string) => {
    manualLockRef.current = true;
    setActiveSection(id);

    if (lockTimeoutRef.current) {
      window.clearTimeout(lockTimeoutRef.current);
    }

    lockTimeoutRef.current = window.setTimeout(() => {
      manualLockRef.current = false;
    }, 700);
  };

  // Activo por pathname cuando NO estás en "/"
  const activeFromPath = useMemo(() => {
    const match = navLinks.find((l) => l.path === location.pathname);
    return match?.id ?? null;
  }, [location.pathname]);

  // 🔽 Scroll centralizado (desktop + mobile)
  const scrollToSection = (id: string, fromMobile = false) => {
    setManualActive(id);

    const doScroll = () => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        if (id === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    if (fromMobile) {
      setIsOpen(false);
      setTimeout(doScroll, 250); // espera a que cierre el menú
    } else {
      doScroll();
    }
  };

  // Scroll al volver desde páginas dedicadas
  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo as string | undefined;

    if (location.pathname === "/" && scrollTo) {
      setManualActive(scrollTo);

      setTimeout(() => {
        if (scrollTo === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(scrollTo)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        navigate("/", { replace: true });
      }, 120);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // 🧭 Scroll spy (subiendo y bajando)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const getActiveByScroll = () => {
      if (manualLockRef.current) return;

      if (window.scrollY < 80) {
        setActiveSection("inicio");
        return;
      }

      const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
        Boolean,
      ) as HTMLElement[];

      let currentId = "inicio";

      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= NAVBAR_OFFSET_PX) {
          currentId = el.id;
        }
      }

      setActiveSection(currentId);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        getActiveByScroll();
        ticking = false;
      });
    };

    getActiveByScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (lockTimeoutRef.current) {
        window.clearTimeout(lockTimeoutRef.current);
      }
    };
  }, []);

  const isLinkActive = (id: string) => {
    if (location.pathname !== "/") return activeFromPath === id;
    return activeSection === id;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2"
          >
            <img
              src={logoImage}
              alt="MayidevAI"
              className="h-10 md:h-12 w-auto"
            />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={[
                  "text-sm font-medium transition-colors",
                  isLinkActive(link.id) ? ACTIVE_BLUE : INACTIVE,
                ].join(" ")}
              >
                {link.label}
              </button>
            ))}

            <Button
              variant="hero"
              size="sm"
              onClick={() => scrollToSection("contacto")}
            >
              Hablemos
            </Button>
          </div>

          {/* Mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id, true)}
                  className={[
                    "py-2 text-left transition-colors font-medium",
                    isLinkActive(link.id) ? ACTIVE_BLUE : INACTIVE,
                  ].join(" ")}
                >
                  {link.label}
                </button>
              ))}

              <Button
                variant="hero"
                className="mt-2"
                onClick={() => scrollToSection("contacto", true)}
              >
                Hablemos
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
