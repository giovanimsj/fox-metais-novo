import { CheckCircle2 } from 'lucide-react';
import ImagemFoxMetais from '@/images/ImagemFoxMetais.jpeg';


export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg transform -rotate-3"></div>
            <img
              src={ImagemFoxMetais}
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
              Somos uma empresa especializada na comercialização de sucatas ferrosas e não ferrosas, para fins siderúrgicos e de fundição.
            </p>

            <p className="font-roboto text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa meta é facilitar e automatizar o processo, fornecendo opções eficazes para o cliente e a solução para o destino de materiais, sem prejudicar o meio ambiente.
              Fazemos sua coleta! Entre em contato para saber mais.
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
                  <h3 className="font-montserrat font-bold text-gray-900">Sustentabilidade</h3>
                  <p className="font-roboto text-gray-600 text-sm">Comprometidos com o meio ambiente e práticas responsáveis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
