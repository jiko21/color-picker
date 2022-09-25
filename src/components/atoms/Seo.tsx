import Head from 'next/head'
import React from 'react';

interface SeoProps {
  colors: string[];
}
export const Seo: React.FC<SeoProps> = ({ colors }) => {
  const ogpUrl = React.useMemo( () => {
    if (colors.length > 0) {
      const urlSearchParams = new URLSearchParams();
      colors.forEach((color) => {
        urlSearchParams.append('color', color);
      });
      return `https://colory-ogp.jiko21.workers.dev/?${urlSearchParams.toString()}`;
    } else {
      return 'https://colory-ogp.jiko21.workers.dev';
    }
  }, [colors]);

  return (
    <Head>
      <title>Colory</title>
      <meta name="description" content="color select app" />
      <meta property="og:title" content="Colory" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://colory.vercel.app" />
      <meta property="og:image" content={ogpUrl} />
      <meta property="og:site_name" content="Colory" />
      <meta property="og:description" content="color select app" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jiko_21" />
    </Head>
  )
};
