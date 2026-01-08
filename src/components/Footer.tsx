const Footer = () => {
  return (
    <footer className="py-8 bg-primary">
      <div className="container mx-auto px-4">
        <p className="text-primary-foreground/70 text-sm text-center">
          © {new Date().getFullYear()} MayidevAI. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
