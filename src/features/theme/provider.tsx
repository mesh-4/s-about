import * as React from "react"

import { THEME, LOCAL_STORAGE_KEY } from "@/constants"
import type { Theme } from "@/types"

type StoreTheme = Theme | undefined
type SetTheme = React.Dispatch<React.SetStateAction<StoreTheme>>

type ThemeContextValue = { theme: StoreTheme; setTheme: SetTheme }

const ThemeContext = React.createContext<ThemeContextValue>({ theme: undefined, setTheme: () => {} })

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<StoreTheme>(undefined)

  React.useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY.theme) as StoreTheme
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  React.useEffect(() => {
    if (!theme) return
    const root = document.documentElement
    const prevTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
    root.classList.remove(prevTheme)
    root.classList.add(theme)

    localStorage.setItem(LOCAL_STORAGE_KEY.theme, theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => React.useContext(ThemeContext)
