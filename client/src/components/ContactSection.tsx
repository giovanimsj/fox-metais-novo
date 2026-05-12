import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-6"></div>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender você com qualidade e agilidade. Fale conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2">Telefone</h3>
                  <p className="font-roboto text-gray-600">(11) 98765-4321</p>
                  <p className="font-roboto text-gray-600">(11) 3456-7890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2">Email</h3>
                  <p className="font-roboto text-gray-600">contato@foxmetais.com.br</p>
                  <p className="font-roboto text-gray-600">vendas@foxmetais.com.br</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2">Localização</h3>
                  <p className="font-roboto text-gray-600">Rua Industrial, 123</p>
                  <p className="font-roboto text-gray-600">São Paulo, SP - Brasil</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-gray-900 mb-2">Horário de Funcionamento</h3>
                  <p className="font-roboto text-gray-600">Segunda a Sexta: 08:00 - 18:00</p>
                  <p className="font-roboto text-gray-600">Sábado: 08:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-roboto font-semibold text-gray-900 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block font-roboto font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 transition-all"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label className="block font-roboto font-semibold text-gray-900 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 transition-all"
                  placeholder="(11) 98765-4321"
                />
              </div>

              <div>
                <label className="block font-roboto font-semibold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-100 transition-all resize-none"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary bg-orange-600 hover:bg-orange-700 text-white font-roboto font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                {submitted ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
              </button>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-roboto text-green-700 text-center">
                    Obrigado! Entraremos em contato em breve.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-8 text-center">
            Nossa Localização
          </h3>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0485652987246!2d-46.6560847!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa001%3A0xab35da2f5ca62674!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
