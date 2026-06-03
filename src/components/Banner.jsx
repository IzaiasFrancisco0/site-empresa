
export default function Banner() {
    return (
      <section id="servicos" className="relative py-28 overflow-hidden diagonal-cut-rev"
        style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 50%, #b91c1c 100%)" }}>
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10"
          style={{ background: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800') center/cover" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <p className="font-cond font-bold tracking-[0.4em] uppercase text-red-200 mb-4 text-sm">Frete incluso em pedidos acima de 5 toneladas</p>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-6 leading-none">
            ENTREGA RÁPIDA<br />NA SUA OBRA
          </h2>
          <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Nossa frota própria garante que seu material chegue no prazo certo, sem atrasos na sua construção.
          </p>
          <button onClick={() => scrollTo("contato")}
            className="bg-white text-red-700 font-cond font-black text-xl tracking-widest uppercase px-10 py-4 hover:bg-gray-100 transition-colors rounded-sm">
            Agendar Entrega
          </button>
        </div>
      </section>
    )
}