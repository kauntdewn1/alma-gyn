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
    <div className="container-page py-8">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-4 sm:gap-6 sm:justify-center sm:px-0">
        {categories.map((category) => (
          <div key={category.nome} className="flex flex-col items-center min-w-fit shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden mb-2">
              <img 
                src={category.img} 
                alt={category.nome}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                      <rect width="64" height="64" fill="#D9C8B6"/>
                      <text x="32" y="38" text-anchor="middle" font-family="Arial" font-size="10" fill="#111">${category.nome[0]}</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium text-center whitespace-nowrap">{category.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}