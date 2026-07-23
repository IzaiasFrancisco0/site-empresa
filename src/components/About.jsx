
export default function About() {
  return (
    <section id="sobre" className="bg-[#0f0f0f] py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 red-line" />

              <span className="text-red-500 font-cond font-bold tracking-[0.3em] uppercase text-sm">
                Nossa História
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl text-white leading-none mb-6">
              SOBRE A
              <br />
              <span className="text-red-500">
                ESTAÇÃO LANA
              </span>
            </h2>

            <p className="text-gray-300 text-[15px] md:text-[18px] leading-7 md:leading-9 max-w-2xl mb-5">
              A Estação Lana nasceu do sonho de construir algo sólido para a região:
              um depósito comprometido com qualidade, confiança e respeito ao cliente.
              Mais do que vender areia e brita, queremos fazer parte de cada obra,
              cada conquista e cada projeto que ajuda a transformar vidas.
            </p>

            <p className="text-gray-400 text-[15px] md:text-[18px] leading-7 md:leading-9 max-w-2xl">
              Sabemos que por trás de toda construção existe esforço, investimento
              e esperança. Por isso trabalhamos todos os dias para entregar materiais
              selecionados, atendimento transparente e a segurança de quem pode confiar
              em um parceiro que valoriza cada cliente e cada entrega.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center mt-8 md:mt-0 md:ml-16 rounded-sm overflow-hidden">
            <img
              src="/img-estacao.png"
              alt="Estação Lana"
              className="w-[85%] md:w-4/5 h-[260px] md:h-[400px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}