import { useState } from "react";
import { PRODUCTS } from "../data/products.js";

export default function Contact() {
  const phone = "5534999508040";

  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    cidade: "",
    produto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = () => {
    const texto = `Olá! 

Gostaria de solicitar um orçamento.

*Nome:* ${form.nome}

*Telefone:* ${form.telefone}

*Cidade/Bairro:* ${form.cidade}

*Produto:* ${form.produto}

*Mensagem:*
${form.mensagem}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="bg-[#0f0f0f] py-14 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">

          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 red-line" />

              <span className="text-red-500 font-cond font-bold tracking-[0.3em] uppercase text-sm">
                Fale Conosco
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              SOLICITE SEU
              <br />
              <span className="text-red-500">ORÇAMENTO</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-10">
              Envie sua solicitação e entraremos em contato rapidamente com a
              melhor proposta para sua obra.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "📱",
                  label: "WhatsApp",
                  val: "(34) 99950-8040",
                },
                {
                  icon: "📍",
                  label: "Localização",
                  val: "Uberlândia - MG",
                },
                {
                  icon: "⏰",
                  label: "Horário",
                  val: "Seg–Sex, 07h às 17h - Sáb, 07h às 12h",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="
                    flex items-start sm:items-center 
                    gap-3 sm:gap-4 
                    p-3 sm:p-4 
                    bg-[#141414] 
                    border border-red-700/30 
                    rounded-sm
                  "
                >
                  <span className="text-2xl shrink-0">
                    {c.icon}
                  </span>

                  <div className="min-w-0">
                    <div className="text-gray-500 text-xs font-cond uppercase tracking-widest">
                      {c.label}
                    </div>

                    <div className="text-white font-semibold break-words text-sm sm:text-base">
                      {c.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              bg-[#141414] 
              border border-red-700/30 
              p-5 sm:p-8 
              rounded-sm
              overflow-hidden
            "
          >
            <h3 className="font-cond font-bold text-xl uppercase tracking-wide mb-6 text-white">
              Envie sua solicitação
            </h3>

            <div className="space-y-4">

              <div>
                <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">
                  Nome completo
                </label>

                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm placeholder-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">
                  Telefone / WhatsApp
                </label>

                <input
                  type="tel"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  value={form.telefone}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm placeholder-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">
                  Cidade / Bairro
                </label>

                <input
                  type="text"
                  name="cidade"
                  placeholder="Onde será a entrega?"
                  value={form.cidade}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm placeholder-gray-600"
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">
                  Produto de Interesse
                </label>

                <select
                  name="produto"
                  value={form.produto}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm"
                >
                  <option value="">
                    Selecione o produto...
                  </option>

                  {PRODUCTS.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name}
                    </option>
                  ))}

                  <option value="Mais de um produto">
                    Mais de um produto
                  </option>
                </select>
              </div>

              <div>
                <label className="text-gray-400 text-xs font-cond uppercase tracking-widest mb-2 block">
                  Mensagem
                </label>

                <textarea
                  rows={3}
                  name="mensagem"
                  placeholder="Descreva sua necessidade, quantidade estimada..."
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full bg-[#1a1a1a] border border-red-900/30 focus:border-red-600 text-white px-4 py-3 rounded-sm outline-none transition-colors text-sm placeholder-gray-600 resize-none"
                />
              </div>

              <button
                onClick={enviarWhatsApp}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-cond font-bold text-lg tracking-widest uppercase py-4 transition-colors rounded-sm"
              >
                Enviar Solicitação
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}