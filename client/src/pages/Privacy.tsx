import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container max-w-4xl">
            <p className="font-roboto text-sm font-semibold text-orange-600 mb-3">
              Ultima atualizacao: 16/05/2026
            </p>
            <h1 className="font-montserrat text-gray-900 mb-6">
              Politica de Privacidade
            </h1>
            <div className="space-y-6 font-roboto text-gray-700 leading-relaxed">
              <p>
                A Fox Metais respeita a sua privacidade. Esta politica explica,
                de forma simples, como usamos os dados enviados pelo formulario
                de contato do site.
              </p>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                  Dados coletados
                </h2>
                <p>
                  Podemos coletar nome, email, telefone, tipo de material e a
                  mensagem enviada voluntariamente pelo usuario.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                  Como usamos os dados
                </h2>
                <p>
                  Os dados sao usados apenas para responder solicitacoes, enviar
                  orcamentos, continuar o atendimento pelo WhatsApp e prestar
                  informacoes sobre compra de materiais reciclaveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                  Compartilhamento
                </h2>
                <p>
                  Nao vendemos dados pessoais. Quando o usuario envia uma
                  mensagem pelo formulario, as informacoes podem ser abertas no
                  WhatsApp para facilitar o contato com a Fox Metais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                  Direitos do usuario
                </h2>
                <p>
                  O usuario pode solicitar acesso, correcao ou exclusao dos seus
                  dados pessoais entrando em contato pelo email
                  foxmetaispr@gmail.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-montserrat font-bold text-gray-900 mb-3">
                  Seguranca
                </h2>
                <p>
                  Mantemos cuidado no uso das informacoes recebidas e limitamos
                  o tratamento dos dados ao necessario para atendimento e
                  comunicacao comercial.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
