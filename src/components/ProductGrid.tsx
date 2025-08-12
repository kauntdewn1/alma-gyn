export const produtos = [
  { nome: "Porta vinho", preco: "R$ 75,00", img: "/prod/porta-vinho.webp", personalizacao: true },
  { nome: "Mousepad", preco: "R$ 32,00", img: "/prod/mousepad.webp", personalizacao: true },
  { nome: "Porta treco", preco: "R$ 32,00", img: "/prod/porta-treco.webp", personalizacao: true },
  { nome: "Porta copos", preco: "R$ 25,00", img: "/prod/porta-copos.webp", personalizacao: true },
  { nome: "Porta canetas", preco: "R$ 32,00", img: "/prod/porta-canetas.webp", personalizacao: true },
  { nome: "Necessaire Tur", preco: "R$ 48,00", img: "/prod/necessaire-tur.webp", personalizacao: true },
  { nome: "Porta passaporte duplo", preco: "R$ 40,00", img: "/prod/porta-passaporte-duplo.webp", personalizacao: true },
  { nome: "Tag de mala retângulo", preco: "R$ 32,00", img: "/prod/tag-mala-ret.webp", personalizacao: true },
  { nome: "Porta óculos", preco: "R$ 32,00", img: "/prod/porta-oculos.webp", personalizacao: true },
  { nome: "Necessaire Nina", preco: "R$ 55,00", img: "/prod/necessaire-nina.webp", personalizacao: true },
  { nome: "Lixeiras", preco: "R$ 60,00", img: "/prod/lixeiras.webp", personalizacao: true },
  { nome: "Chaveiro Slim", preco: "R$ 35,00", img: "/prod/chaveiro-slim.webp", personalizacao: true },
  { nome: "Chaveiro Coração", preco: "R$ 35,00", img: "/prod/chaveiro-coracao.webp", personalizacao: true },
  { nome: "Carteira RB", preco: "R$ 32,00", img: "/prod/carteira-rb.webp", personalizacao: true },
  { nome: "Necessaire Maletinha", preco: "R$ 110,00", img: "/prod/necessaire-maletinha.webp", personalizacao: true },
  { nome: "Bolsa térmica", preco: "R$ 160,00", img: "/prod/bolsa-termica.webp", personalizacao: true },
  { nome: "Necessaire Travel", preco: "R$ 48,00", img: "/prod/necessaire-travel.webp", personalizacao: true },
];

export function ProductGrid() {
  return (
    <div className="container-page py-16" id="produtos">
      <div className="text-center mb-12">
        <h2 className="heading-sec mb-4">Nossos Produtos</h2>
        <p className="text-lg text-[var(--muted)]">Presentes únicos com personalização exclusiva</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div key={produto.nome} className="card p-4 group">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              {produto.personalizacao && (
                <span className="pill absolute top-2 right-2 z-10">Personalização</span>
              )}
              <img 
                src={produto.img} 
                alt={produto.nome}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                      <rect width="300" height="300" fill="#D9C8B6"/>
                      <text x="150" y="140" text-anchor="middle" font-family="Arial" font-size="14" fill="#111">${produto.nome}</text>
                      <text x="150" y="160" text-anchor="middle" font-family="Arial" font-size="12" fill="#111">${produto.preco}</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            <h3 className="font-semibold text-lg mb-1">{produto.nome}</h3>
            <p className="text-xl font-bold text-[var(--ink)]">{produto.preco}</p>
            <a 
              href={`https://wa.me/5562993881515?text=Olá! Tenho interesse no produto: ${produto.nome}`}
              className="btn-primary w-full mt-4"
            >
              Encomendar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}