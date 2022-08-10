import * as React from "react"
import dynamic from "next/dynamic"

const ThemeToggler = dynamic(() => import("@/features/theme/theme-toggler"), {
  ssr: false,
  loading: () => <div className="w-[24px] h-[24px]" />,
})

const Navbar = () => {
  return (
    <div className="w-full px-8 py-4 flex items-center">
      <div className="flex-1" />
      <div className="flex-1 grid justify-items-end items-center">
        <ThemeToggler />
      </div>
    </div>
  )
}

export default React.memo(Navbar)
