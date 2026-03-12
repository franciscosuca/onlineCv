'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const navItems = {
  '#about': { name: 'About' },
  '#work': { name: 'Work' },
  '#skills': { name: 'Skills' },
  '#projects': { name: 'Projects' },
  '#volunteering': { name: 'Volunteering' },
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <aside className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-all">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none p-2"
            aria-label="Toggle Menu">
            {isMenuOpen ? <FiX/> : <FiMenu/>}
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative`} id="nav">
            <div className={`flex ${isMenuOpen ? 'flex-col' : 'flex-row'} space-x-0 pr-10 items-start`}>
              {Object.entries(navItems).map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-cyber-blue flex align-middle relative py-1 px-2 m-1 font-mono text-sm uppercase tracking-widest"
                >
                  {name}
                </Link>
              ))}
            </div>
          </nav>

          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-xl"
            aria-label="Toggle Theme"
          >
            {mounted && (resolvedTheme === 'dark' ? <FiSun className="text-cyber-blue" /> : <FiMoon />)}
          </button>
        </div>
      </div>
    </aside>
  )
}
