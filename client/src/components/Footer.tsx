import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">FM</span>
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
                <a href="#contato" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Contato
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
              <li>
                <a href="#materiais" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Coleta Agendada
                </a>
              </li>
              <li>
                <a href="#materiais" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Orçamento Online
                </a>
              </li>
              <li>
                <a href="#contato" className="font-roboto text-gray-400 hover:text-orange-600 transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-roboto text-gray-400 text-sm">(11) 98765-4321</p>
                  <p className="font-roboto text-gray-400 text-sm">(11) 3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="font-roboto text-gray-400 text-sm">contato@foxmetais.com.br</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <p className="font-roboto text-gray-400 text-sm">Rua Industrial, 123<br />São Paulo, SP</p>
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
          <p className="font-roboto text-gray-400 text-sm">
            &copy; {currentYear} Fox Metais. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-4">
            <a href="#" className="font-roboto text-gray-400 hover:text-orange-600 text-sm transition-colors">
              Privacidade
            </a>
            <a href="#" className="font-roboto text-gray-400 hover:text-orange-600 text-sm transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
