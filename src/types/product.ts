export interface Product {
  nome: string;
  preco: string;
  img: string;
  personalizacao: boolean;
  slug: string;
  descricao?: string;
  caracteristicas?: string[];
  precoPersonalizacao?: string;
  coresMetal?: string[];
}

export interface PersonalizacaoOptions {
  custoPorLetra: number;
  coresDisponiveis: string[];
  observacoes?: string;
}
