import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SEO } from './SEO';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CollectionsGrid } from './components/CollectionsGrid';
import { ProductGrid } from './components/ProductGrid';
import { FormPedido } from './components/FormPedido';
import { CategoriesRail } from './components/CategoriesRail';
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
      <section className="w-full py-20 sm:py-24 lg:py-32 text-center relative overflow-hidden" style={{
        background: `
          linear-gradient(135deg, 
            rgba(220, 193, 165, 0.3) 0%, 
            rgba(232, 213, 192, 0.25) 25%, 
            rgba(212, 184, 154, 0.35) 50%, 
            rgba(220, 193, 165, 0.3) 75%, 
            rgba(232, 213, 192, 0.25) 100%
          )
        `
      }}>
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-page relative z-10 max-w-5xl mx-auto">
          {/* Logo com animação aprimorada */}
          <div className="mb-12 sm:mb-16">
            <img 
              src="/alma_lg.png" 
              alt="Alma Goiana Logo" 
              className="mx-auto mb-8 sm:mb-6 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 animate-float drop-shadow-lg"
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
          </div>

          {/* Título principal com melhor tipografia */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="heading-hero mb-4 sm:mb-6 leading-tight">
              <span className="block text-[var(--ink)]">Presentes Únicos</span>
              <span className="block text-[var(--muted)] font-light">Feitos com Amor</span>
            </h1>
            
            {/* Linha decorativa */}
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--bege)] to-[var(--line)] mx-auto rounded-full mb-6"></div>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--muted)] max-w-4xl mx-auto text-center">
              <strong>Produtos artesanais</strong> em sintético com <strong>personalização exclusiva</strong>. 
              <br className="hidden sm:block" />
              Transformamos <strong>momentos especiais</strong> em <strong>presentes inesquecíveis</strong>.
            </p>
          </div>
          
          {/* CTA aprimorado com elementos visuais */}
          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <a href="#produtos" className="btn-primary-enhanced bg-green-500 text-lg sm:text-xl px-10 sm:px-16 py-5 sm:py-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
                <span className="relative z-10">Personalize agora</span>
                <div className="absolute inset-0 bg-green-500/90 from-[var(--bege)]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              
              {/* Elementos decorativos ao redor do botão */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-[var(--bege)] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[var(--line)] rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-[var(--muted)] opacity-80 font-medium">
                ✨ Comece sua jornada personalizada hoje
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--muted)] opacity-60">
                <span className="w-2 h-2 bg-[var(--bege)] rounded-full"></span>
                <span>100% artesanal</span>
                <span className="w-2 h-2 bg-[var(--bege)] rounded-full"></span>
                <span>Entrega rápida</span>
                <span className="w-2 h-2 bg-[var(--bege)] rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoriesRail />
      <ProductGrid />
      <CollectionsGrid />

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
                  href="mailto:almapresentes.mkt@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  almapresentes.mkt@gmail.com
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