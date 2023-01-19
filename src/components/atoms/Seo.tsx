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
      return `https://color-picker-jiko21.vercel.app/api/og?${urlSearchParams.toString()}`;
    } else {
      return 'https://color-picker-jiko21.vercel.app/api/og';
    }
  }, [colors]);

  return (
    <Head>
      <title>color picker</title>
      <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
      <link rel="manifest" href="favicon/site.webmanifest" />
      <meta name="description" content="color selegct app" />
      <meta property="og:title" content="color picker" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://color-picker-jiko21.vercel.app" />
      <meta property="og:image" content={ogpUrl} />
      <meta property="og:site_name" content="Colory" />
      <meta property="og:description" content="color select app" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jiko_21" />
    </Head>
  )
};
