import { ProductCard } from './ProductCard';
import { produtos } from '../data/products';

export function ProductGrid() {
  return (
    <div className="container-page py-16" id="produtos">
      <div className="text-center mb-12">
        <h2 className="heading-sec mb-4">Nossos Produtos</h2>
        <p className="text-lg text-[var(--muted)]">Presentes únicos com personalização exclusiva</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <ProductCard key={produto.slug} produto={produto} />
        ))}
      </div>
    </div>
  );
}