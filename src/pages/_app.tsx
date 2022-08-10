import "../styles/globals.css"
import type { AppProps } from "next/app"

import { ThemeProvider } from "@/features/theme/provider"
import Navbar from "@/components/navbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
