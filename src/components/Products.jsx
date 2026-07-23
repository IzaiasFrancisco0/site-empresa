import { PRODUCTS } from "../data/products.js";

export default function Products() {
  const phone = "5534999508040";

  const solicitarOrcamento = (produto) => {
    const mensagem = `Olá!

Gostaria de solicitar um orçamento para o seguinte

Produto: ${produto}

Poderia me informar o valor e as formas de pagamento?`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="produtos" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-12 red-line" />
            <span className="text-red-500 font-cond font-bold tracking-[0.3em] uppercase text-sm">
              Nosso Catálogo
            </span>
          </div>

          <h2 className="font-display text-6xl md:text-7xl text-white leading-none">
            NOSSOS <span className="text-red-500">PRODUTOS</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl">
            Material de construção certificado, direto da pedreira para a sua
            obra.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="card-hover group relative h-[420px] rounded-sm overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />

              {/* TAG */}
              <div className="absolute top-4 right-4 badge bg-red-700 text-white text-[10px] font-cond font-bold tracking-widest uppercase px-3 py-1 rounded-sm z-10">
                {p.tag}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <h3 className="font-display text-3xl text-white mb-3 tracking-wide">
                  {p.name}
                </h3>

                <div className="w-8 h-0.5 bg-red-600 mb-4 group-hover:w-20 transition-all duration-500" />

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>

                <button
                  onClick={() => solicitarOrcamento(p.name)}
                  className="text-red-500 font-cond font-bold text-sm tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 group/btn"
                >
                  Solicitar Orçamento

                  <span className="group-hover/btn:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}