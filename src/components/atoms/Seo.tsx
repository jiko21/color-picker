import Head from 'next/head'
import React from 'react';

interface SeoProps {
  colors: string[];
}
export const Seo: React.FC<SeoProps> = ({ colors }) => {
  const url = React.useMemo( () => {
    const urlSearchParams = new URLSearchParams();
    colors.forEach((color) => {
      urlSearchParams.append('color', color);
    });
    return `https://colory-ogp.jiko21.workers.dev/?${urlSearchParams.toString()}`;
  }, [colors]);

  return (
    <Head>
      <title>Colory</title>
      <meta name="description" content="color select app" />
      <meta property="og:title" content="Colory" />
      <meta property="og:type" content="website" />
       {/* <meta property="og:url" content="https://jiko21.me" />*/}
      <meta property="og:image" content={url} />
      <meta property="og:site_name" content="Colory" />
      <meta property="og:description" content="color select app" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jiko_21" />
    </Head>
  )
};
