import Script from "next/script"
import { Html, Head, Main, NextScript } from "next/document"

function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="A engineer who focus on web and software development. Love startup and new idea."
        />
        <meta name="author" content="Senlima Sun" />
        <meta name="theme-color" content="#000000" />

        <link rel="canonical" href="https://about.senlima.dev" />
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@senlima4" />
        <meta name="twitter:title" content="Senlima Sun's Portfolio" />
        <meta
          name="twitter:description"
          content="A engineer who focus on web and software development. Love startup and new idea."
        />
        <meta name="twitter:creator" content="@senlima4" />
        <meta name="twitter:image" content="https://assets.senlima.dev/landing-cover.png" />

        <meta property="og:title" content="Senlima Sun's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://about.senlima.dev" />
        <meta property="og:image" content="https://assets.senlima.dev/landing-cover.png" />
        <meta
          property="og:description"
          content=" A engineer who focus on web and software development. Love startup and new idea."
        />
        <meta property="og:site_name" content="Senlima Sun's Portfolio" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "image": "https://assets.senlima.dev/2021-avatar.png",
              "jobTitle": "Full Stack Developer",
              "name": "Senlima Sun",
              "gender": "male",
              "nationality": "Taiwan",
              "url": "https://about.senlima.dev",
              "sameAs": [
                "https://www.linkedin.com/in/senlima",
                "https://twitter.com/senlima4",
                "https://github.com/senlima4"
              ]
            }`,
          }}
        />

        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

        <title>Senlima Sun's Portfolio</title>
      </Head>
      <body>
        <Main />
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var d=document.documentElement.classList;const t=localStorage.getItem("theme") || 'light';if(t==='dark'){d.remove('light');d.add('dark')}`,
          }}
        />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
