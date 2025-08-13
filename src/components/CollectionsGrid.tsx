const collections = [
  {
    titulo: 'Mais Vendidos',
    descricao: 'Os produtos favoritos dos nossos clientes',
    img: '/mock/mais-vendidos.webp',
    tag: 'Popular'
  },
  {
    titulo: 'Linha Viagem',
    descricao: 'Acessórios essenciais para suas aventuras',
    img: '/mock/viagem.webp',
    tag: 'Viagem'
  },
  {
    titulo: 'Para Escritório',
    descricao: 'Organização e estilo no ambiente profissional',
    img: '/mock/escritorio.webp',
    tag: 'Profissional'
  }
];

export function CollectionsGrid() {
  return (
    <div className="container-page py-16">
      <div className="text-center mb-12">
        <h2 className="heading-sec mb-4">Nossas Coleções</h2>
        <p className="text-lg text-[var(--muted)]">Produtos cuidadosamente selecionados para cada ocasião</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.titulo} className="card p-0 overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <span className="pill absolute top-4 left-4 z-10">{collection.tag}</span>
              <img 
                src={collection.img} 
                alt={collection.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="300" fill="#D9C8B6"/>
                      <text x="200" y="150" text-anchor="middle" font-family="Arial" font-size="20" fill="#111">${collection.titulo}</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{collection.titulo}</h3>
              <p className="text-[var(--muted)] mb-4">{collection.descricao}</p>
              <button className="btn-ghost">Ver Coleção</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}