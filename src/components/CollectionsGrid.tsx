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
    <div className="container-page py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="heading-sec mb-3 sm:mb-4">Nossas Coleções</h2>
        <p className="text-base sm:text-lg text-[var(--muted)]">Produtos cuidadosamente selecionados para cada ocasião</p>
      </div>
      
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {collections.map((collection) => (
          <div key={collection.titulo} className="card p-0 overflow-hidden group">
            <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-gray-50">
              <span className="pill absolute top-2 sm:top-4 left-2 sm:left-4 z-10 text-xs sm:text-sm">{collection.tag}</span>
              <img 
                src={collection.img} 
                alt={collection.titulo}
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
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
            <div className="p-3 sm:p-4 lg:p-6">
              <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-2">{collection.titulo}</h3>
              <p className="text-xs sm:text-sm lg:text-base text-[var(--muted)] mb-2 sm:mb-3 lg:mb-4">{collection.descricao}</p>
              <button className="btn-ghost text-xs sm:text-sm lg:text-base">Ver Coleção</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}