export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663538864508/5vnjvwTwmiAHZhNTVx5NhD/hero-fox-metais-UPZAtbjQLtKb5XGfk5XLFY.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Animated Title */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-roboto font-semibold mb-4">
              Reciclagem Responsável
            </span>
          </div>

          <h1 className="font-montserrat font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in animation-delay-100">
            Fox Metais
          </h1>

          <p className="font-roboto text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in animation-delay-200">
            Especializada em reciclagem de materiais de qualidade. Compramos eletrônicos, ferro, alumínio, latinha e baterias com os melhores preços do mercado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <button
              onClick={() => scrollToSection('materiais')}
              className="btn-primary bg-orange-600 hover:bg-orange-700 text-white font-roboto font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block"
            >
              Ver Materiais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-secondary bg-white/20 hover:bg-white/30 text-white font-roboto font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block border-2 border-white"
            >
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
