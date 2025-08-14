import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  produto: Product;
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <div className="card p-4 group">
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
      
      {produto.personalizacao && (
        <div className="text-sm text-[var(--muted)] mb-2">
          <p className="font-medium">✨ Personalização disponível</p>
          {produto.precoPersonalizacao && (
            <p className="text-xs">{produto.precoPersonalizacao}</p>
          )}
          {produto.coresMetal && produto.coresMetal.length > 0 && (
            <p className="text-xs">Cor do metal: {produto.coresMetal.join(', ')}</p>
          )}
        </div>
      )}
      
      <div className="flex gap-2 mt-4">
        <Link 
          to={`/produto/${produto.slug}`}
          className="btn-primary flex-1 text-center"
        >
          Ver Detalhes
        </Link>
        <a 
          href={`https://wa.me/5562993881515?text=Olá! Tenho interesse no produto: ${produto.nome}`}
          className="btn-ghost flex-1 text-center"
        >
          Encomendar
        </a>
      </div>
    </div>
  );
}
