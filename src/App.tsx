import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEO } from './SEO';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CategoriesRail } from './components/CategoriesRail';
import { CollectionsGrid } from './components/CollectionsGrid';
import { ProductGrid } from './components/ProductGrid';
import { FormPedido } from './components/FormPedido';
import { ProductPage } from './pages/ProductPage';
import { Palette, Leaf, Factory, Truck, Mail, Instagram as InstagramIcon } from 'lucide-react';

function HomePage() {
  return (
    <>
      <SEO path="/" />
      
      {/* PIX Top Bar - promoção não ativa no momento */} 
      {/* <div className="bg-[var(--bege)] text-[var(--ink)] py-2">
        <div className="container-page text-center">
          <p className="text-sm font-medium">🔥 10% de desconto no PIX | Frete grátis acima de R$ 150</p>
        </div>
      </div> */}

      {/* Hero Section */}
      <section className="container-page py-16 text-center">
        <img 
          src="/alma_lg.png" 
          alt="Alma Goiana Logo" 
          className="mx-auto mb-8 sm:mb-6 sm:h-6 2xl:h-64 animate-float"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `data:image/svg+xml;base64,${btoa(`
              <svg width="200" height="64" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="64" fill="#D9C8B6"/>
                <text x="100" y="40" text-anchor="middle" font-family="Arial" font-size="18" font-weight="bold" fill="#111">ALMA GOIANA</text>
              </svg>
            `)}`;
          }}
        />
        <h1 className="heading-hero mb-6">
          Presentes Únicos<br />
          <span className="text-[var(--muted)]">Feitos com Amor</span>
        </h1>
        <p className="text-xl text-[var(--muted)] mb-8 max-w-3xl mx-auto">
          Produtos artesanais em sintético com personalização exclusiva. 
          Transformamos momentos especiais em presentes inesquecíveis.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="chip">✨ Personalização única</span>
          <span className="chip">🏭 Produção artesanal</span>
          <span className="chip">🌱 Materiais sustentáveis</span>
          <span className="chip">🚚 Entrega em todo Brasil</span>
        </div>
        
        <a href="#produtos" className="btn-primary text-lg">
          Personalize agora
        </a>
      </section>

      <CategoriesRail />
      <CollectionsGrid />
      <ProductGrid />

      {/* Why Choose Section */}
      <section className="container-page py-16">
        <div className="text-center mb-12">
          <h2 className="heading-sec mb-4">Por que escolher a Alma Goiana?</h2>
          <p className="text-lg text-[var(--muted)]">Qualidade e tradição em cada produto</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Palette,
              titulo: 'Design Exclusivo',
              desc: 'Cada peça é única e personalizada conforme seu gosto'
            },
            {
              icon: Leaf,
              titulo: 'Sustentável',
              desc: 'Materiais ecológicos e processos responsáveis'
            },
            {
              icon: Factory,
              titulo: 'Artesanal',
              desc: 'Produção 100% artesanal por mestres artesãos'
            },
            {
              icon: Truck,
              titulo: 'Entrega Rápida',
              desc: 'Enviamos para todo o Brasil com segurança'
            }
          ].map((item) => (
            <div key={item.titulo} className="card-soft p-6 text-center">
              <div className="w-12 h-12 bg-[var(--bege)] bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-[var(--ink)]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.titulo}</h3>
              <p className="text-[var(--muted)] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FormPedido />

      {/* Newsletter */}
      <section className="container-page py-16">
        <div className="bg-[var(--bege)] bg-opacity-10 rounded-2xl p-12 text-center">
          <h2 className="heading-sec mb-4">Receba nossas novidades</h2>
          <p className="text-lg text-[var(--muted)] mb-8">
            Seja o primeiro a saber sobre lançamentos e promoções especiais
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 border border-[var(--line)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--bege)]"
            />
            <button className="btn-primary whitespace-nowrap">
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--ink)] text-white py-16">
        <div className="container-page">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Alma Goiana</h3>
              <p className="text-gray-300">
                Presentes personalizados em sintético artesanal. 
                Transformando momentos especiais em memórias eternas.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <a 
                  href="https://wa.me/5562993881515" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  📱 (62) 99388-1515
                </a>
                <a 
                  href="mailto:contato@almagoiana.com.br"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@almagoiana.com.br
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <a 
                href="https://www.instagram.com/almagoianapresentes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                @almagoianapresentes
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Alma Goiana</span> ∴ 
              <br className="sm:hidden" />
              Desenvolvido pelo <span className="text-white font-semibold">Protocolo NΞØ</span>.
              <br />
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produto/:slug" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;