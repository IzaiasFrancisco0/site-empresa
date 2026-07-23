const STATS = [
  { value: "Alta", label: "Qualidade dos materiais" },
  { value: "24h", label: "Entrega rápida" },
  { value: "100%", label: "Compromisso com o cliente" },
  { value: "Uberlândia", label: "Atendimento regional" },
];



export default function Hero() {
  const agora = new Date();
  const dia = agora.getDay(); // 0 = Domingo, 1 = Segunda...
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  const horarioAtual = hora + minuto / 60;

  const aberto =
    ((dia >= 1 && dia <= 5) && horarioAtual >= 7 && horarioAtual < 17) ||
    (dia === 6 && horarioAtual >= 7 && horarioAtual < 12);

  return (
    <section
      id="inicio"
      className="hero-bg diagonal-cut min-h-screen flex items-center relative overflow-hidden pb-32"
    >
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <div className="absolute left-0 top-0 bottom-0 w-1 red-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-16 relative z-10">
        <div className="max-w-3xl">

          <div
            className={`inline-flex items-center gap-2 badge text-white text-[10px] sm:text-xs font-cond font-bold tracking-[0.25em] uppercase px-3 sm:px-4 py-2 rounded-sm mb-6 sm:mb-8 animate-fade-up ${aberto ? "bg-green-700" : "bg-red-700"
              }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${aberto ? "bg-green-300" : "bg-red-300"
                }`}
            />

            {aberto ? "Aberto Agora" : "Fechado Agora"}
          </div>

          <h1
            className="font-display leading-none mb-4 animate-fade-up
        text-5xl
        xs:text-6xl
        sm:text-7xl
        md:text-8xl
        lg:text-9xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-white">
              QUALIDADE
            </span>

            <span className="block text-stroke">
              QUE CONSTRÓI
            </span>

            <span className="block text-red-500">
              CONFIANÇA.
            </span>
          </h1>

          <p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mb-8 sm:mb-10 leading-relaxed animate-fade-up font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Areia e brita selecionadas de alta qualidade,
            entregues diretamente na sua obra.
            O depósito mais confiável da região.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => {
                const mensagem = `Olá!

Gostaria de solicitar um orçamento para minha obra.

Poderia me informar os preços dos materiais e as condições de entrega?

Obrigado!`;

                window.open(
                  `https://wa.me/5534999508040?text=${encodeURIComponent(mensagem)}`,
                  "_blank"
                );
              }}
              className="btn-pulse bg-red-600 hover:bg-red-700 text-white font-cond font-bold
    text-sm sm:text-lg
    tracking-widest uppercase
    px-6 sm:px-8
    py-3 sm:py-4
    transition-all duration-200 rounded-sm w-full sm:w-auto"
            >
              Solicitar Orçamento →
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("produtos")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white/30 hover:border-red-500 text-white font-cond font-bold
  text-sm sm:text-lg
  tracking-widest uppercase
  px-6 sm:px-8
  py-3 sm:py-4
  transition-all duration-200 rounded-sm w-full sm:w-auto"
            >
              Ver Produtos →
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-red-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl text-red-500">
                {s.value}
              </div>

              <div className="text-gray-400 text-[10px] sm:text-xs font-cond uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}