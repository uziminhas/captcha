import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Captions for Instagram, Youtube, or TikTok in seconds with ChatGPT."
        />
        <meta property="og:site_name" content="captiongen.io" />
        <meta
          property="og:description"
          content="Captions for Instagram, Youtube, or TikTok 10x in seconds with ChatGPT."
        />
        <meta property="og:title" content="ChatGPT Caption Generator" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ChatGPT Caption Generator." />
        <meta
          property="twitter:description"
          content="Captions for Instagram, Youtube, or TikTok in seconds with ChatGPT."
        />
        <meta
          property="og:image"
          content="https://captiongen.io/preview.png"
        />
        <meta
          property="twitter:image"
          content="https://captiongen.io/preview.png"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
