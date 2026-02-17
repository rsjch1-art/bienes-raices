import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Contáctame
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Estoy aquí para ayudarte a encontrar tu próximo hogar. ¡Hablemos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center hover:shadow-yellow-600/20 transition-all transform hover:-translate-y-1 border border-yellow-600/20 hover:border-yellow-500/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-lg text-white mb-2">
              Teléfono
            </h3>
            <a
              href="tel:+525512345678"
              className="text-gray-400 hover:text-yellow-500 transition-colors"
            >
              +52 55 1234 5678
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center hover:shadow-yellow-600/20 transition-all transform hover:-translate-y-1 border border-yellow-600/20 hover:border-yellow-500/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-lg text-white mb-2">
              Email
            </h3>
            <a
              href="mailto:contacto@premiumhomes.com"
              className="text-gray-400 hover:text-yellow-500 transition-colors break-all"
            >
              contacto@premiumhomes.com
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center hover:shadow-yellow-600/20 transition-all transform hover:-translate-y-1 border border-yellow-600/20 hover:border-yellow-500/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-lg text-white mb-2">
              Ubicación
            </h3>
            <p className="text-gray-400">
              Ciudad de México, México
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl text-center hover:shadow-yellow-600/20 transition-all transform hover:-translate-y-1 border border-yellow-600/20 hover:border-yellow-500/50">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-lg text-white mb-2">
              Horario
            </h3>
            <p className="text-gray-400">
              Lun - Vie: 9:00 - 18:00
              <br />
              Sáb: 10:00 - 14:00
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-2xl shadow-yellow-600/30 max-w-3xl mx-auto text-center">
          <p className="text-lg text-black mb-6">
            ¿Listo para encontrar tu hogar ideal? Contáctame por WhatsApp y te responderé inmediatamente.
          </p>
          <a
            href="https://wa.me/525512345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-yellow-500 px-8 py-4 rounded-full text-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}