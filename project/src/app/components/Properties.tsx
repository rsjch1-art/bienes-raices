import { ImageWithFallback } from './figma/ImageWithFallback';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

export function Properties() {
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MTIzMzMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Casa Moderna de Lujo',
      location: 'Zona Residencial Premium',
      price: '$8,500,000',
      beds: 4,
      baths: 3.5,
      sqft: '450 m²'
    },
    {
      image: 'https://images.unsplash.com/photo-1770381142493-075344e6fc9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG91c2UlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxMjA3ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Residencia Elegante',
      location: 'Centro de la Ciudad',
      price: '$6,200,000',
      beds: 3,
      baths: 2.5,
      sqft: '320 m²'
    },
    {
      image: 'https://images.unsplash.com/photo-1613545564245-62b2c9ef8055?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBob21lJTIwa2l0Y2hlbiUyMG1vZGVybnxlbnwxfHx8fDE3NzEyOTczMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Casa Contemporánea',
      location: 'Zona Exclusiva',
      price: '$5,800,000',
      beds: 3,
      baths: 3,
      sqft: '380 m²'
    },
    {
      image: 'https://images.unsplash.com/photo-1694967832949-09984640b143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzcxMjk3MzMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Villa de Lujo con Alberca',
      location: 'Zona Privada',
      price: '$12,500,000',
      beds: 5,
      baths: 4.5,
      sqft: '650 m²'
    },
    {
      image: 'https://images.unsplash.com/photo-1627141234469-24711efb373c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzEyOTczMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Arquitectura Moderna',
      location: 'Desarrollo Nuevo',
      price: '$7,200,000',
      beds: 4,
      baths: 3,
      sqft: '420 m²'
    },
    {
      image: 'https://images.unsplash.com/photo-1770199105714-a5a349546346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByZWFsJTIwZXN0YXRlJTIwYWdlbnR8ZW58MXx8fHwxNzcxMjM0NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Casa Ejecutiva Premium',
      location: 'Fraccionamiento VIP',
      price: '$9,800,000',
      beds: 4,
      baths: 4,
      sqft: '500 m²'
    }
  ];

  return (
    <section id="propiedades" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Propiedades Destacadas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Una selección cuidadosa de las mejores propiedades disponibles en el mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-yellow-600/20 transition-all transform hover:-translate-y-2 border border-yellow-600/20 hover:border-yellow-500/50"
            >
              <div className="relative h-64 overflow-hidden group">
                <ImageWithFallback
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-4 py-2 rounded-full shadow-lg">
                  {property.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-white mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-yellow-500" />
                  <span>{property.location}</span>
                </div>

                <div className="flex justify-between text-gray-300 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-1">
                    <Bed className="w-5 h-5 text-yellow-500" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-5 h-5 text-yellow-500" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-5 h-5 text-yellow-500" />
                    <span>{property.sqft}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}