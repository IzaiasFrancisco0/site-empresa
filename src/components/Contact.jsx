import {PRODUCTS} from '../data/products.js';

export default function Contact() {
    return (
      <section id="contato" className="bg-[#0f0f0f] py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* INFO */}
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px w-12 red-line" />
                <span className="text-red-500 font-cond font-bold tracking-[0.3em] uppercase text-sm">Fale Conosco</span>
              </div>
              <h2 className="font-display text-6xl text-white leading-none mb-6">
                SOLICITE SEU<br /><span className="text-red-500">ORÇAMENTO</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-10">
                Envie sua solicitação e entraremos em contato rapidamente com a melhor proposta para sua obra.
              </p>

              <div className="space-y-5">
                {[
                  { icon: "📞", label: "Telefone", val: "(34) 9 9999-0000" },
                  { icon: "📱", label: "WhatsApp", val: "(34) 9 9999-0000" },
                  { icon: "📍", label: "Localização", val: "Uberlândia - MG" },
                  { icon: "⏰", label: "Horário", val: "Seg–Sáb, 07h às 17h" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4 p-4 bg-[#141414] border border-red-900/20 rounded-sm">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <div className="text-gray-500 text-xs font-cond uppercase tracking-widest">{c.label}</div>
                      <div className="text-white font-semibold">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-[#141414] border border-red-900/30 p-8 rounded-sm">
              <h3 className="font-cond font-bold text-xl uppercase tracking-wide mb-6 text-white">Envie sua solicitação</h3>
              <div className="space-y-4">
                {[
                  { label: "Nome completo", type: "text", placeholder: "Seu nome" },
                  { label: "Telefone / WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
                  { label: "Cidade / Bairro", type: "text", placeholder: "Onde será a entrega?" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm placeholder-gray-600" />
                  </div>
                ))}
                <div>
                  <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">Produto de Interesse</label>
                  <select className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm">
                    <option value="">Selecione o produto...</option>
                    {PRODUCTS.map((p) => <option key={p.name}>{p.name}</option>)}
                    <option>Mais de um produto</option>
                  </select>
                </div>
                <div>
                  <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">Mensagem</label>
                  <textarea rows={3} placeholder="Descreva sua necessidade, quantidade estimada..."
                    className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm placeholder-gray-600 resize-none" />
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-cond font-bold text-lg tracking-widest uppercase py-4 transition-colors rounded-sm">
                  Enviar Solicitação
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}