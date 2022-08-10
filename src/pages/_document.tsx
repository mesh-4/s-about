import Script from "next/script"
import { Html, Head, Main, NextScript } from "next/document"

function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
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
