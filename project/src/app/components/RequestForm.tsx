import { X } from 'lucide-react';
import { useState, FormEvent } from 'react';

interface RequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestForm({ isOpen, onClose }: RequestFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    descripcion: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí se manejaría el envío del formulario
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        descripcion: ''
      });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-yellow-500/50">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black p-6 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl md:text-3xl">
            Cuéntanos tu Idea de Hogar Ideal
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:bg-black/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 md:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre Completo */}
              <div>
                <label htmlFor="nombre" className="block text-white mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all placeholder-gray-500"
                />
              </div>

              {/* Correo Electrónico */}
              <div>
                <label htmlFor="correo" className="block text-white mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all placeholder-gray-500"
                />
              </div>

              {/* Número de Contacto */}
              <div>
                <label htmlFor="telefono" className="block text-white mb-2">
                  Número de Contacto
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+52 123 456 7890"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all placeholder-gray-500"
                />
              </div>

              {/* Descripción del Hogar Perfecto */}
              <div>
                <label htmlFor="descripcion" className="block text-white mb-2">
                  Describe tu Hogar Perfecto
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={5}
                  placeholder="¿Cómo sería tu casa ideal? Cuéntame sobre el número de habitaciones, ubicación, estilo, presupuesto, o cualquier característica importante para ti..."
                  required
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all resize-none placeholder-gray-500"
                />
              </div>

              {/* Botón Enviar */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-lg text-lg hover:from-yellow-400 hover:to-yellow-500 transition-all transform hover:scale-[1.02] shadow-lg shadow-yellow-600/50 hover:shadow-xl"
              >
                Enviar Información
              </button>

              <p className="text-sm text-gray-400 text-center">
                Tu información está segura y será tratada con confidencialidad.
              </p>
            </form>
          ) : (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-white mb-4">
                ¡Gracias por tu Interés!
              </h3>
              <p className="text-lg text-gray-400">
                Me pondré en contacto contigo muy pronto para ayudarte a encontrar tu hogar ideal.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}