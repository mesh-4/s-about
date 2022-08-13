import * as React from "react"
import { FiSun, FiMoon } from "react-icons/fi"
import { motion, AnimatePresence } from "framer-motion"

import { THEME } from "@/constants"
import { useTheme } from "@/features/theme/provider"

import { variants } from "./variants"

const ThemeToggler = () => {
  const { theme = THEME.LIGHT, setTheme } = useTheme()

  const handleClick = React.useCallback(() => {
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
  }, [])

  return (
    <button
      type="button"
      className="overflow-y-hidden h-[24px] dark:text-white ease-in-out duration-100"
      onClick={handleClick}
      aria-label="toggle theme">
      <AnimatePresence exitBeforeEnter>
        {theme === THEME.LIGHT ? (
          <motion.div key="sun" variants={variants} initial="initial" animate="enter" exit="exit">
            <FiSun size="20" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial="initial" animate="enter" exit="exit">
            <FiMoon size="20" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default React.memo(ThemeToggler)
