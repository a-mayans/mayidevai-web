import logo from "@/assets/logo-mayidevai.png";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MayidevAI" className="h-8 w-auto brightness-0 invert" />
          </div>
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} MayidevAI. Todos los derechos reservados.
          </p>
          <a
            href="mailto:mayidevai@gmail.com"
            className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
          >
            mayidevai@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
