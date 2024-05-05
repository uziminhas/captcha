import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="ChatGPT Caption Generator" />
        <meta
          name="description"
          content="Content for Instagram, Threads, or TikTok in seconds with ChatGPT. This Instagram Threads generator will help you grow followers with the help of AI."
        />
        <meta property="og:site_name" content="captiongen.com" />
        <meta
          property="og:description"
          content="Content for Instagram, Threads, or TikTok in seconds with ChatGPT. This Instagram Threads generator will help you grow followers with the help of AI."
        />
        <meta property="og:title" content="Instagram Caption Generator" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Instagram Caption Generator." />
        <meta
          property="twitter:description"
          content="Content for Instagram, Threads, or TikTok in seconds with ChatGPT."
        />
        <meta
          property="og:image"
          content="https://captiongen.com/preview.png"
        />
        <meta
          property="twitter:image"
          content="https://captiongen.com/preview.png"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        {/* Google Adsense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4285102984128110" crossorigin="anonymous"></script>
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
