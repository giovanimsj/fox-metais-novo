
export default function LocationSection() {

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container">
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d742.6232957743254!2d-50.12746609551411!3d-25.1070675477031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1726792730603!5m2!1spt-BR!2sbr"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
