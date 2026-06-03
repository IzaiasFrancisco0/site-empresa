
export default function Footer() {
    return (
      <footer className="bg-black border-t border-red-900/30 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-display text-sm">EL</span>
            </div>
            <div>
              <div className="font-display text-base tracking-wider">ESTAÇÃO LANA</div>
              <div className="text-red-500 text-[9px] font-cond tracking-[0.3em] uppercase">Depósito · Areia e Brita</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm text-center">
  © 2026 Estação Lana. Todos os direitos reservados.
</p>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "WhatsApp"].map((s) => (
              <button key={s} className="text-gray-500 hover:text-red-500 text-xs font-cond uppercase tracking-widest transition-colors">{s}</button>
            ))}
          </div>
        </div>
      </footer>
    )
}