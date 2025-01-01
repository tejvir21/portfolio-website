import React from 'react';
import { SEO_CONFIG } from '../../utils/constants/seo';

const SEO = () => {
  return (
    <>
      <title>{SEO_CONFIG.title}</title>
      <meta name="description" content={SEO_CONFIG.description} />
      <meta name="keywords" content={SEO_CONFIG.keywords.join(', ')} />
      <meta name="author" content={SEO_CONFIG.author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={SEO_CONFIG.title} />
      <meta property="og:description" content={SEO_CONFIG.description} />
      <meta property="og:image" content={SEO_CONFIG.image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SEO_CONFIG.title} />
      <meta name="twitter:description" content={SEO_CONFIG.description} />
      <meta name="twitter:image" content={SEO_CONFIG.image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={SEO_CONFIG.url} />
    </>
  );
};

export default SEO;