import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Logo from './Logo'
import { GithubIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink: React.FC<{
  href: string
  title: string
  className: string
}> = ({ href, title, className }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light 
        ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const clickHandler = () => {
    setIsOpen(!isOpen)
  }
  const toggleTheme = () => {
    ;(setMode as React.Dispatch<React.SetStateAction<string>>)((currentMode) =>
      currentMode === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex item-center justify-between dark:text-light">
      {/* <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={clickHandler}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          } `}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          } `}
        ></span>
      </button> */}

      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="mx-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="/"
          target={'_black'}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_black'}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_black'}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_black'}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="/"
          target={'_black'}
          whileTap={{ scale: 0.9 }}
          whileHover={{ y: -2 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <button
          onClick={toggleTheme}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
