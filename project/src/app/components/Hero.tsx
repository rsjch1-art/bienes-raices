import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTIzMzMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Modern House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 font-bold">
          Encuentra el Hogar
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">de tus Sueños</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Experto en bienes raíces premium. Te acompaño en cada paso hacia tu hogar perfecto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onExploreClick}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-full text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-yellow-600/50"
          >
            Explorar Propiedades
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all border-2 border-yellow-500/50 hover:border-yellow-400"
          >
            Contáctame
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-500/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}