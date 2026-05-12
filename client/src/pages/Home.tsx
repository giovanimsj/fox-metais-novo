import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MaterialsGallery from '@/components/MaterialsGallery';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Design Philosophy: Industrial Moderno com Toque Sustentável
 * - Paleta: Cinza escuro, laranja queimado, verde musgo
 * - Tipografia: Montserrat Bold para títulos, Roboto para corpo
 * - Layout: Assimétrico com grid variado
 * - Elementos: Texturas industriais, linhas diagonais, ícones geométricos
 * - Animações: Fade-in ao scroll, parallax suave, hover effects elegantes
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MaterialsGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
