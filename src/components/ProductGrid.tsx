import { ProductCard } from './ProductCard';
import { Product } from '../types/product';

export const produtos: Product[] = [
  { 
    nome: "Porta vinho", 
    preco: "R$ 75,00", 
    img: "/prod/porta_vinho.webp", 
    personalizacao: true,
    slug: "porta_vinho",
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Porta vinho artesanal em sintético, perfeito para presentear ou para uso pessoal. Ideal para transportar sua garrafa favorita com estilo e elegância.",
    caracteristicas: [
      "Sintético de alta qualidade",
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Necessaire compacta e funcional, ideal para viagens e uso diário. Com múltiplos compartimentos para organizar seus itens essenciais.",
    caracteristicas: [
      "Design compacto e funcional",
      "Múltiplos compartimentos",
      "Sintético resistente e durável",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Porta passaporte duplo", 
    preco: "R$ 40,00", 
    img: "/prod/porta_passaporte_duplo.webp", 
    personalizacao: true,
    slug: "porta_passaporte_duplo",
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Porta passaporte duplo em sintético, perfeito para casais ou famílias que viajam juntas. Protege e organiza documentos importantes.",
    caracteristicas: [
      "Compartimento duplo",
      "Sintético artesanal",
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
    descricao: "Tag de mala retangular personalizada, ideal para identificar suas bagagens com estilo. Feita em sintético com acabamento premium.",
    caracteristicas: [
      "Design retangular elegante",
      "Sintético premium",
      "Personalização disponível",
      "Ideal para identificação"
    ]
  },
  { 
    nome: "Porta óculos", 
    preco: "R$ 45,00", 
    img: "/prod/porta_oculos.webp", 
    personalizacao: true,
    slug: "porta_oculos",
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Porta óculos em sintético, protegendo seus óculos com estilo e sofisticação. Perfeito para presentear ou uso pessoal.",
    caracteristicas: [
      "Proteção para óculos",
      "Sintético premium",
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Necessaire Nina, elegante e funcional, ideal para organizar seus itens de beleza e cuidados pessoais com estilo.",
    caracteristicas: [
      "Design elegante e feminino",
      "Organização funcional",
      "Sintético de alta qualidade",
      "Personalização disponível"
    ]
  },
  { 
    nome: "Lixeiras", 
    preco: "R$ 60,00", 
    img: "/prod/lixeiras.webp", 
    personalizacao: true,
    slug: "lixeiras",
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Lixeiras artesanais em sintético, combinando funcionalidade com design elegante. Perfeitas para escritório ou ambiente doméstico.",
    caracteristicas: [
      "Design funcional e elegante",
      "Sintético resistente",
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Chaveiro slim em sintético, design minimalista e elegante. Perfeito para organizar suas chaves com estilo.",
    caracteristicas: [
      "Design slim e minimalista",
      "Sintético elegante",
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Chaveiro em formato de coração, feito em sintético. Ideal para presentear ou para quem ama detalhes românticos.",
    caracteristicas: [
      "Formato de coração romântico",
      "Sintético premium",
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Carteira RB compacta e funcional, feita em sintético. Perfeita para organizar documentos e cartões com estilo.",
    caracteristicas: [
      "Design compacto e funcional",
      "Sintético de qualidade",
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
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
    precoPersonalizacao: "R$ 10,00 por letra",
    coresMetal: ["Prata"],
    descricao: "Necessaire Travel, perfeita para suas aventuras. Design funcional e resistente, ideal para viagens e uso diário.",
    caracteristicas: [
      "Design funcional para viagens",
      "Sintético resistente e durável",
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