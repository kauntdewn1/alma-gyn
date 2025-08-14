import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
}

export function SEO({ 
  title = 'Alma Goiana - Presentes Personalizados em Sintético',
  description = 'Presentes personalizados em sintético. Produtos únicos para viagem, escritório e casa com a qualidade Alma Goiana.',
  ogImage = '/og/alma-og.png',
  url = 'https://almagoiana.com'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}