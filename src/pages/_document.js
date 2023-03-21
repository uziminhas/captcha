import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>CaptionGen</title>
        <meta name="title" content="CaptionGen.io - Create captions for Instagram, Youtube, or TikTok 10x faster with ChatGPT." />
        <meta
          name="description"
          content="Create captions for Instagram, Youtube, or TikTok 10x faster with ChatGPT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://captiongen.io/" />
        <meta property="og:title" content="captiongen" />
        <meta
          property="og:description"
          content="Create captions for Instagram, Youtube, or TikTok 10x faster with ChatGPT."
        />
        <meta
          property="og:image"
          content="https://captiongen.io/preview.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://captiongen.io" />
        <meta property="twitter:title" content="captiongen" />
        <meta
          property="twitter:description"
          content="Create captions for Instagram, Youtube, or TikTok 10x faster with ChatGPT."
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
