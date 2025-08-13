import { ProductCard } from './ProductCard';

export const produtos = [
  { 
    nome: "Porta vinho", 
    preco: "R$ 75,00", 
    img: "/prod/porta_vinho.webp", 
    personalizacao: true,
    slug: "porta_vinho",
    descricao: "Porta vinho artesanal em couro genuíno, perfeito para presentear ou para uso pessoal. Ideal para transportar sua garrafa favorita com estilo e elegância.",
    caracteristicas: [
      "Couro genuíno de alta qualidade",
      "Acabamento artesanal",
      "Personalização disponível",
      "Tamanho ideal para garrafas padrão"
    ]
  },
  { 
    nome: "Necessaire Tur", 
    preco: "R$ 48,00", 
    img: "/prod/necessaire_tur.webp", 
    personalizacao: true,
    slug: "necessaire_tur",
    descricao: "Necessaire compacta e funcional, ideal para viagens e uso diário. Com múltiplos compartimentos para organizar seus itens essenciais.",
    caracteristicas: [
      "Design compacto e funcional",
      "Múltiplos compartimentos",
      "Couro resistente e durável",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Porta passaporte duplo", 
    preco: "R$ 40,00", 
    img: "/prod/porta_passaporte _duplo.webp", 
    personalizacao: true,
    slug: "porta_passaporte_duplo",
    descricao: "Porta passaporte duplo em couro artesanal, perfeito para casais ou famílias que viajam juntas. Protege e organiza documentos importantes.",
    caracteristicas: [
      "Compartimento duplo",
      "Couro genuíno artesanal",
      "Proteção para documentos",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Tag de mala retângulo", 
    preco: "R$ 32,00", 
    img: "/prod/tag_mala_retangulo.webp", 
    personalizacao: true,
    slug: "tag_mala_retangulo",
    descricao: "Tag de mala retangular personalizada, ideal para identificar suas bagagens com estilo. Feita em couro artesanal com acabamento premium.",
    caracteristicas: [
      "Design retangular elegante",
      "Couro artesanal premium",
      "Personalização disponível",
      "Ideal para identificação"
    ]
  },
  { 
    nome: "Porta óculos", 
    preco: "R$ 75,00", 
    img: "/prod/porta_oculos.webp", 
    personalizacao: true,
    slug: "porta_oculos",
    descricao: "Porta óculos em couro artesanal, protegendo seus óculos com estilo e sofisticação. Perfeito para presentear ou uso pessoal.",
    caracteristicas: [
      "Proteção premium para óculos",
      "Couro genuíno artesanal",
      "Design elegante e sofisticado",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Necessaire Nina", 
    preco: "R$ 55,00", 
    img: "/prod/necessaire_nina.webp", 
    personalizacao: true,
    slug: "necessaire_nina",
    descricao: "Necessaire Nina, elegante e funcional, ideal para organizar seus itens de beleza e cuidados pessoais com estilo.",
    caracteristicas: [
      "Design elegante e feminino",
      "Organização funcional",
      "Couro de alta qualidade",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Lixeiras", 
    preco: "R$ 60,00", 
    img: "/prod/lixeiras.webp", 
    personalizacao: true,
    slug: "lixeiras",
    descricao: "Lixeiras artesanais em couro, combinando funcionalidade com design elegante. Perfeitas para escritório ou ambiente doméstico.",
    caracteristicas: [
      "Design funcional e elegante",
      "Couro artesanal resistente",
      "Ideal para escritório",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Chaveiro Slim", 
    preco: "R$ 35,00", 
    img: "/prod/chaveiro_slim.webp", 
    personalizacao: true,
    slug: "chaveiro_slim",
    descricao: "Chaveiro slim em couro artesanal, design minimalista e elegante. Perfeito para organizar suas chaves com estilo.",
    caracteristicas: [
      "Design slim e minimalista",
      "Couro artesanal elegante",
      "Organização funcional",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Chaveiro Coração", 
    preco: "R$ 35,00", 
    img: "/prod/chaveiro_coracao.webp", 
    personalizacao: true,
    slug: "chaveiro_coracao",
    descricao: "Chaveiro em formato de coração, feito em couro artesanal. Ideal para presentear ou para quem ama detalhes românticos.",
    caracteristicas: [
      "Formato de coração romântico",
      "Couro artesanal premium",
      "Ideal para presentes",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Carteira RB", 
    preco: "R$ 32,00", 
    img: "/prod/carteira_rb.webp", 
    personalizacao: true,
    slug: "carteira_rb",
    descricao: "Carteira RB compacta e funcional, feita em couro artesanal. Perfeita para organizar documentos e cartões com estilo.",
    caracteristicas: [
      "Design compacto e funcional",
      "Couro artesanal de qualidade",
      "Organização eficiente",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Necessaire Maletinha", 
    preco: "R$ 110,00", 
    img: "/prod/necessaire_maletinha.webp", 
    personalizacao: true,
    slug: "necessaire_maletinha",
    descricao: "Necessaire Maletinha premium, com design exclusivo e múltiplos compartimentos. Ideal para viagens longas e organização profissional.",
    caracteristicas: [
      "Design premium exclusivo",
      "Múltiplos compartimentos",
      "Ideal para viagens longas",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Necessaire Travel", 
    preco: "R$ 48,00", 
    img: "/prod/necessaire_travel.webp", 
    personalizacao: true,
    slug: "necessaire_travel",
    descricao: "Necessaire Travel, perfeita para suas aventuras. Design funcional e resistente, ideal para viagens e uso diário.",
    caracteristicas: [
      "Design funcional para viagens",
      "Couro resistente e durável",
      "Ideal para aventuras",
      "Personalização disponível"
    ]
  },
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
          <ProductCard key={produto.slug} produto={produto} />
        ))}
      </div>
    </div>
  );
}