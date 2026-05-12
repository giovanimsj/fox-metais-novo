import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg transform -rotate-3"></div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663538864508/5vnjvwTwmiAHZhNTVx5NhD/hero-fox-metais-UPZAtbjQLtKb5XGfk5XLFY.webp"
              alt="Fox Metais"
              className="relative rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
              Sobre a Fox Metais
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mb-6"></div>

            <p className="font-roboto text-lg text-gray-700 mb-6 leading-relaxed">
              A Fox Metais é uma empresa especializada em reciclagem responsável de materiais. Com anos de experiência no mercado, nos comprometemos em oferecer os melhores preços e um atendimento de qualidade para nossos clientes.
            </p>

            <p className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa missão é promover a sustentabilidade ambiental através da coleta e reciclagem de materiais, contribuindo para um futuro mais limpo e responsável.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900">Qualidade Garantida</h3>
                  <p className="font-roboto text-gray-600 text-sm">Todos os materiais são verificados e garantem qualidade superior.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900">Melhores Preços</h3>
                  <p className="font-roboto text-gray-600 text-sm">Oferecemos os melhores preços do mercado para seus materiais.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900">Coleta Disponível</h3>
                  <p className="font-roboto text-gray-600 text-sm">Realizamos coleta em sua localização com agilidade e segurança.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900">Sustentabilidade</h3>
                  <p className="font-roboto text-gray-600 text-sm">Comprometidos com o meio ambiente e práticas responsáveis.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="#contato" className="btn-primary">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
