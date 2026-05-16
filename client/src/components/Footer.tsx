import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from "@/images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src={logo} alt="Logo da Fox Metais - Comércio de Sucatas" />
              </div>
              <h3 className="font-montserrat font-bold text-xl">Fox Metais</h3>
            </div>
            <p className="font-roboto text-gray-400 text-sm leading-relaxed">
              Especializada em reciclagem responsável de materiais. Compramos eletrônicos, ferro, alumínio, latinha e baterias com os melhores preços.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#materiais" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Materiais
                </a>
              </li>
              <li>
                <a href="#sobre" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#location" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#materiais" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Compra de Materiais
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <FaWhatsapp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="https://wa.me/message/6YVLUY7G4IGTK1" 
                  className="font-roboto text-gray-400 text-sm hover:text-orange-600 transition-colors" 
                  target="_blank"
                  >(42) 99145-4793</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="font-roboto text-gray-400 text-sm">foxmetaispr@gmail.com</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="font-roboto text-gray-400 text-sm">Rua Jacob Faintyck - 86<br />Ponta Grossa, PR - Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="font-roboto text-gray-400 text-sm text-center md:text-left">
            &copy; {currentYear} Fox Metais. Todos os direitos reservados
            <a
              href="https://www.linkedin.com/in/giovani-moreira-santos-junior-b0949027a/"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:inline md:ml-1 hover:text-orange-600 transition-colors"
            >
              &bull; Desenvolvido por Giovani Moreira
            </a>
          </p>
          {/* Social Links */}
          <div className="flex gap-4 md:-translate-x-12">
            <a
              href="https://www.facebook.com/profile.php?id=61564824015275"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Facebook"
              target="_blank"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/foxmetaispr/"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Instagram"
              target="_blank"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4">
            <a href="/privacidade" className="font-roboto text-gray-400 hover:text-orange-600 text-sm transition-colors">
              Politica de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
