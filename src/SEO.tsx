import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;     // pode ser relativo (/og/alma-og.png) ou absoluto
  path?: string;        // caminho da página, ex: "/porta-vinho-personalizado"
  locale?: string;
  noindex?: boolean;
}

const SITE = 'alma-presentes-webapp.web.app'; // domínio oficial

function absUrl(maybeRel?: string) {
  if (!maybeRel) return undefined;
  if (/^https?:\/\//i.test(maybeRel)) return maybeRel;
  return `${SITE}${maybeRel.startsWith('/') ? '' : '/'}${maybeRel}`;
}

function canonicalOf(path?: string) {
  const cleanPath = path?.startsWith('/') ? path : `/${path ?? ''}`;
  // remove barra dupla e trailing slash (exceto raiz)
  const url = `${SITE}${cleanPath}`.replace(/([^:]\/)\/+/g, '$1');
  return url !== `${SITE}/` && url.endsWith('/') ? url.slice(0, -1) : url;
}

export function SEO({
  title = 'Alma Goiana – Presentes Personalizados em Goiânia e para todo o Brasil',
  description = 'Presentes personalizados em sintético, zero origem animal e fabricação própria. Entregamos para Goiânia e todo o Brasil, sem pedido mínimo.',
  ogImage = '/og/alma-og.png',
  path = '/',
  locale = 'pt_BR',
  noindex = false,
}: SEOProps) {
  const canonical = canonicalOf(path);
  const ogImageAbs = absUrl(ogImage);

  return (
    <Helmet>
      {/* Indexação */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index,follow" />
      )}

      {/* Title / Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Geo / Local SEO */}
      <meta name="geo.region" content="BR-GO" />
      <meta name="geo.placename" content="Goiânia" />
      <meta name="geo.position" content="-16.6869;-49.2648" />
      <meta name="ICBM" content="-16.6869, -49.2648" />

      {/* Open Graph */}
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Alma Goiana – Presentes Personalizados" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageAbs} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageAbs} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />

      {/* JSON-LD LocalBusiness (ajuda MUITO no SEO local) */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Alma Goiana – Presentes Personalizados',
          url: SITE,
          image: ogImageAbs,
          description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Goiânia',
            addressRegion: 'GO',
            addressCountry: 'BR',
          },
          areaServed: 'BR',
          telephone: '+55-62-99388-1515',
          sameAs: [
            'https://www.instagram.com/almagoianapresentes/',
          ],
        })}
      </script>
    </Helmet>
  );
}