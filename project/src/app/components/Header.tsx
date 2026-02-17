import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg z-50 border-b border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <Home className="w-8 h-8 text-yellow-500" />
            <span className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Premium Homes</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('propiedades')}
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Propiedades
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Contacto
            </button>
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-600/50 hover:shadow-xl hover:shadow-yellow-500/50 transform hover:scale-105"
            >
              Solicitar Información
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-500"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-yellow-600/30">
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('propiedades')}
              className="block w-full text-left text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Propiedades
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Contacto
            </button>
            <button
              onClick={() => {
                onContactClick();
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-600/30"
            >
              Solicitar Información
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}