import { useState } from 'react';

export function FormPedido() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    produto: '',
    personalizacao: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de fazer um pedido:
Nome: ${formData.nome}
WhatsApp: ${formData.whatsapp}
Produto: ${formData.produto}
Personalização: ${formData.personalizacao}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5562993881515?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="container-page py-16">
      <div className="max-w-2xl mx-auto">
        <div className="card p-8">
          <h2 className="heading-sec mb-6 text-center">Faça seu Pedido</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nome completo</label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bege)]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">WhatsApp</label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bege)]"
                placeholder="(62) 99999-9999"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Produto de interesse</label>
              <select
                required
                value={formData.produto}
                onChange={(e) => setFormData(prev => ({ ...prev, produto: e.target.value }))}
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bege)]"
              >
                <option value="">Selecione um produto</option>
                {produtos.map((produto) => (
                  <option key={produto.nome} value={produto.nome}>
                    {produto.nome} - {produto.preco}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Personalização desejada</label>
              <textarea
                value={formData.personalizacao}
                onChange={(e) => setFormData(prev => ({ ...prev, personalizacao: e.target.value }))}
                className="w-full px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bege)] h-24"
                placeholder="Descreva como gostaria que fosse a personalização..."
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Enviar Pedido via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Import produtos for the select options
import { produtos } from './ProductGrid';