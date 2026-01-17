const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-4 flex flex-col items-center gap-3">
        
        <p className="text-primary-foreground/70 text-sm text-center">
          © {new Date().getFullYear()} MayidevAI. Todos los derechos reservados.
        </p>

        {/* Enlaces legales */}
        <nav className="flex gap-4 text-sm">
          <a
            href="/aviso-legal.html"
            className="text-primary-foreground/70 hover:text-primary-foreground transition"
          >
            Aviso Legal
          </a>
          <a
            href="/politica-privacidad.html"
            className="text-primary-foreground/70 hover:text-primary-foreground transition"
          >
            Política de Privacidad
          </a>
          <a
            href="/politica-cookies.html"
            className="text-primary-foreground/70 hover:text-primary-foreground transition"
          >
            Política de Cookies
          </a>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
