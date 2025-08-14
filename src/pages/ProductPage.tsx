import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Mail } from 'lucide-react';
import { produtos } from '../data/products';

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const produto = produtos.find(p => p.slug === slug);

  if (!produto) {
    return (
      <div className="container-page py-16 text-center">
        <h1 className="heading-sec mb-4">Produto não encontrado</h1>
        <p className="text-lg text-[var(--muted)] mb-8">
          O produto que você está procurando não existe.
        </p>
        <Link to="/" className="btn-primary">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-page py-4">
        <nav className="flex items-center gap-2 text-sm text-[var(--muted)]">
          <Link to="/" className="hover:text-[var(--ink)] transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link to="/#produtos" className="hover:text-[var(--ink)] transition-colors">
            Produtos
          </Link>
          <span>/</span>
          <span className="text-[var(--ink)] font-medium">{produto.nome}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="container-page py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl border border-[var(--line)]">
              <img 
                src={produto.img} 
                alt={produto.nome}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
                      <rect width="600" height="600" fill="#D9C8B6"/>
                      <text x="300" y="280" text-anchor="middle" font-family="Arial" font-size="24" fill="#111">${produto.nome}</text>
                      <text x="300" y="320" text-anchor="middle" font-family="Arial" font-size="20" fill="#111">${produto.preco}</text>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            
            {/* Additional Images Placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded-lg border border-[var(--line)] flex items-center justify-center">
                  <span className="text-xs text-gray-400">+{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
              <p className="text-2xl font-bold text-[var(--bege)]">{produto.preco}</p>
              {produto.personalizacao && (
                <span className="pill inline-block mt-2">✨ Personalização disponível</span>
              )}
            </div>

            {produto.descricao && (
              <div>
                <h3 className="font-semibold mb-2">Descrição</h3>
                <p className="text-[var(--muted)] leading-relaxed">{produto.descricao}</p>
              </div>
            )}

            {produto.caracteristicas && produto.caracteristicas.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Características</h3>
                <ul className="space-y-2">
                  {produto.caracteristicas.map((caracteristica, index) => (
                    <li key={index} className="flex items-center gap-2 text-[var(--muted)]">
                      <span className="w-2 h-2 bg-[var(--bege)] rounded-full"></span>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <a 
                href={`https://wa.me/5562993881515?text=Olá! Tenho interesse no produto: ${produto.nome} - ${produto.preco}`}
                className="btn-primary w-full text-center text-lg py-4"
              >
                Encomendar Agora
              </a>
              
              <div className="flex gap-3">
                <a 
                  href={`https://www.instagram.com/almagoianapresentes/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1 flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Ver no Instagram
                </a>
                <a 
                  href="mailto:contato@almagoiana.com.br"
                  className="btn-ghost flex-1 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contato
                </a>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[var(--line)]">
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--bege)] bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🏭</span>
                </div>
                <p className="text-sm text-[var(--muted)]">Produção Artesanal</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[var(--bege)] bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-2xl">🚚</span>
                </div>
                <p className="text-sm text-[var(--muted)]">Entrega Nacional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="container-page py-16">
        <h2 className="heading-sec mb-8 text-center">Produtos Relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos
            .filter(p => p.slug !== slug)
            .slice(0, 4)
            .map((produtoRelacionado) => (
              <Link 
                key={produtoRelacionado.slug}
                to={`/produto/${produtoRelacionado.slug}`}
                className="card p-4 group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src={produtoRelacionado.img} 
                    alt={produtoRelacionado.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{produtoRelacionado.nome}</h3>
                <p className="text-xl font-bold text-[var(--ink)]">{produtoRelacionado.preco}</p>
              </Link>
            ))}
        </div>
      </section>

      {/* Back to Top */}
      <div className="container-page pb-8">
        <Link 
          to="/#produtos" 
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para todos os produtos
        </Link>
      </div>
    </>
  );
}
