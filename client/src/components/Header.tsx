import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-orange-600">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-montserrat font-bold text-lg">FM</span>
            </div>
            <h1 className="font-montserrat font-bold text-xl text-gray-900">Fox Metais</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="font-roboto text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('materiais')}
              className="font-roboto text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Materiais
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="font-roboto text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="font-roboto text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('contato')}
            className="hidden md:block btn-primary"
          >
            Fale Conosco
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left font-roboto text-gray-700 hover:text-orange-600 py-2 px-4 hover:bg-gray-50 rounded transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('materiais')}
                className="text-left font-roboto text-gray-700 hover:text-orange-600 py-2 px-4 hover:bg-gray-50 rounded transition-colors"
              >
                Materiais
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left font-roboto text-gray-700 hover:text-orange-600 py-2 px-4 hover:bg-gray-50 rounded transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left font-roboto text-gray-700 hover:text-orange-600 py-2 px-4 hover:bg-gray-50 rounded transition-colors"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary w-full text-center mt-2"
              >
                Fale Conosco
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
