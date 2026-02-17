import { Home, Key, Shield, TrendingUp, Heart, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Home,
      title: 'Asesoría Personalizada',
      description: 'Te guío personalmente en cada etapa del proceso de compra o venta de tu propiedad.'
    },
    {
      icon: Key,
      title: 'Propiedades Exclusivas',
      description: 'Acceso a las mejores propiedades del mercado antes que nadie.'
    },
    {
      icon: Shield,
      title: 'Transacciones Seguras',
      description: 'Garantizo transparencia y seguridad en cada transacción inmobiliaria.'
    },
    {
      icon: TrendingUp,
      title: 'Valuación Profesional',
      description: 'Análisis de mercado y valuación precisa para maximizar tu inversión.'
    },
    {
      icon: Heart,
      title: 'Servicio Premium',
      description: 'Atención dedicada y personalizada para encontrar tu hogar ideal.'
    },
    {
      icon: Users,
      title: 'Red de Contactos',
      description: 'Amplia red de colaboradores para facilitar tu experiencia.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Mis Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ofrezco un servicio integral y profesional para hacer realidad tus objetivos inmobiliarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-yellow-600/20 transition-all transform hover:-translate-y-2 border border-yellow-600/20 hover:border-yellow-500/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-full flex items-center justify-center mb-6 group-hover:from-yellow-500/30 group-hover:to-yellow-600/20 transition-all">
                  <Icon className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}