const categories = [
  { nome: 'Viagem', img: '/cats/viagem.webp' },
  { nome: 'Escritório', img: '/cats/escritorio.webp' },
  { nome: 'Casa', img: '/cats/casa.webp' },
  { nome: 'Acessórios', img: '/cats/acessorios.webp' },
  { nome: 'Presentes', img: '/cats/presentes.webp' },
  { nome: 'Personalizados', img: '/cats/personalizados.webp' }
];

export function CategoriesRail() {
  return (
    <section className="container-page py-8">
      {/* Header compacto */}
      <div className="text-center mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--ink)] mb-2">
          Filtrar por categoria
        </h2>
      </div>

      {/* Filtros compactos */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {categories.map((category) => (
          <button
            key={category.nome}
            className="filter-chip group"
            onClick={() => console.log(`Filtro: ${category.nome}`)}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden mr-2 flex-shrink-0">
              <img 
                src={category.img} 
                alt={category.nome}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" fill="#F3F4F6"/>
                      <text x="20" y="25" text-anchor="middle" font-family="Arial" font-size="12" font-weight="bold" fill="#6B7280">${category.nome[0]}</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            <span className="text-sm font-medium text-[var(--muted)] group-hover:text-[var(--ink)] whitespace-nowrap">
              {category.nome}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}