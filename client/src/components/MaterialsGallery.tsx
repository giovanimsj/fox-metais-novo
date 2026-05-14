import { useState } from 'react';
import Latinhas from '@/images/Latinhas.jpeg'
import ImagemAluminios from "@/images/ImagemAluminios.jpeg"
import ImagemFerro from '@/images/ImagemMista.jpeg'
import ImagemBateria from '@/images/ImagemBaterias.jpeg'
import ImagemEletronicos from '@/images/ImagemSucataEletronicos.jpeg'
import imagemMista from '@/images/ImagemMistaComGarra.jpeg'

interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

const materials: Material[] = [
  {
    id: 'eletronicos',
    name: 'Eletrônicos',
    description: 'Computadores, celulares, tablets, placas eletrônicas e componentes diversos.',
    image: `${ImagemEletronicos}`,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'ferro',
    name: 'Ferro',
    description: 'Ferro estrutural, chapas, tubos, sucata de ferro e aço de qualidade.',
    image: `${ImagemFerro}`,
    color: 'from-gray-600 to-gray-700',
  },
  {
    id: 'aluminio',
    name: 'Alumínio',
    description: 'Alumínio em pó, sucata de alumínio, perfis e chapas de primeira qualidade.',
    image: `${ImagemAluminios}`,
    color: 'from-slate-400 to-slate-500',
  },
  {
    id: 'latinha',
    name: 'Latinha',
    description: 'Latas de alumínio, sucata de alumínio e materiais similares.',
    image: `${Latinhas}`,
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    id: 'baterias',
    name: 'Baterias',
    description: 'Baterias automotivas, baterias recarregáveis e componentes eletrônicos.',
    image: `${ImagemBateria}`,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'Ferro Misto',
    name: 'Ferro Misto',
    description: 'Materiais ferrosos, como geladeiras, micro-ondas, chapas, grades e outros itens metálicos.',
    image: `${imagemMista}`,
    color: 'from-orange-500 to-orange-600',
  },
];

export default function MaterialsGallery() {
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

  return (
    <section id="materiais" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Nossos Materiais
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6"></div>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Compramos diversos tipos de materiais reciclados com qualidade garantida e os melhores preços do mercado.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material) => (
            <div
              key={material.id}
              onClick={() => setSelectedMaterial(selectedMaterial === material.id ? null : material.id)}
              className="industrial-card cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${material.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-2">
                  {material.name}
                </h3>
                <p className="font-roboto text-gray-600 text-sm leading-relaxed">
                  {material.description}
                </p>

                {/* Expandable Details */}
                {selectedMaterial === material.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2">
                    <p className="font-roboto text-sm text-orange-600 font-semibold mb-3">
                      Características:
                    </p>
                    <ul className="font-roboto text-sm text-gray-600 space-y-2">
                      <li>✓ Qualidade garantida</li>
                      <li>✓ Melhor preço do mercado</li>
                      <li>✓ Atendimento rápido</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="font-roboto text-gray-600 mb-6">
            Tem material para vender? Entre em contato conosco!
          </p>
          <a href="#contato" className="btn-primary">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
