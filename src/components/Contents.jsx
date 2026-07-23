
const DIFERENCIAIS = [
  {
    icon: "🛡️",
    title: "Produtos de Qualidade",
    desc: "Material selecionado e peneirado com rigoroso controle de qualidade.",
  },
  {
    icon: "🚛",
    title: "Entrega na Sua Obra",
    desc: "Frota própria garantindo pontualidade e segurança na entrega.",
  },
  {
    icon: "🤝",
    title: "Atendimento de Confiança",
    desc: "Equipe especializada pronta para te orientar na compra certa.",
  },
  {
    icon: "📍",
    title: "Pertinho de Você",
    desc: "Localização estratégica para atender toda a região com agilidade.",
  },
];

export default function Contents() {
    return (
      <section className="bg-[#0f0f0f] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFERENCIAIS.map((d, i) => (
              <div key={d.title} className="card-hover border border-red-900/30 bg-[#141414] p-8 rounded-sm group cursor-default">
                <div className="text-4xl mb-5">{d.icon}</div>
                <div className="w-10 h-0.5 red-line mb-4 group-hover:w-full transition-all duration-500" />
                <h3 className="font-cond font-bold text-lg tracking-wide uppercase mb-2 text-white/90">{d.title}</h3>
                <p className="text-gray-400 text-[15px] md:text-base leading-7">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}