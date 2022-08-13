import * as React from "react"
import dynamic from "next/dynamic"
import { FiGithub, FiTwitter } from "react-icons/fi"
import type { NextPage } from "next"

const ThemeToggler = dynamic(() => import("@/features/theme/theme-toggler"), {
  ssr: false,
  loading: () => <div className="w-[24px] h-[24px]" />,
})

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-[100vh] pt-12 animate-fadeIn">
      <main className="flex-auto mx-auto w-[95%] md:w-7/12 lg:5/12">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-bold">Hi. I'm Senlima Sun</h1>
          <ThemeToggler />
        </div>
        <h2 className="text-lg text-zinc-400 font-light mb-4">Build efficient, flexible web interface.</h2>

        <nav className="flex text-lg mb-8">
          <a
            className="mr-4 hover:text-indigo-700 hover:border-none transition duration-150 ease-in-out"
            href="https://github.com/senlima4"
            target="_blank"
            rel="noopener noreferrer">
            <FiGithub />
          </a>
          <a
            className="mr-4 hover:text-sky-500 hover:border-none transition duration-150 ease-in-out"
            href="https://twitter.com/senlima4"
            target="_blank"
            rel="noopener noreferrer">
            <FiTwitter />
          </a>
        </nav>

        <div className="w-full flex flex-col md:flex-row">
          <section className="flex-1">
            <h3 className="text-lg font-semibold mb-2">About Me</h3>
            <p>
              Have 3 years of experience in web development. Participate frontend, backend, design, and infra in
              various of startup company.
            </p>
          </section>

          <section className="flex-1">
            <h3 className="text-lg font-semibold mb-2">WIP</h3>
            <ul>
              <li>Online course platform</li>
              <li>News Product</li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="mt-auto pb-4">
        <p className="text-center text-sm">2022 &copy; Senlima Sun. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
