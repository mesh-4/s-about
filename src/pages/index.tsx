import { FiGithub, FiTwitter } from "react-icons/fi"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <div>
      <main className="mx-auto w-[95%] md:w-7/12 lg:5/12">
        <h1 className="text-2xl font-semibold">Hi. I'm Senlima Sun</h1>
        <h2 className="text-lg text-zinc-400 font-light mb-4">Build efficient, flexible web interface.</h2>

        <nav className="flex text-lg">
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
      </main>
    </div>
  )
}

export default Home
