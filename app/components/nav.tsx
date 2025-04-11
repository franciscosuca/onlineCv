'use client';

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navItems = {
  '/': {
    name: 'About',
  },
  '/workExperience': {
    name: 'Work Experience',
  },
  '/skills': {
    name: 'Skills',
  },
  '/projects': {
    name: 'Projects',
  },
  '/volunteering': {
    name: 'Volunteering',
  },
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        {/* Hamburger Button */}
        <div className='md:hidden'>
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label="Toggle Menu">
            {isMenuOpen ? <FiX/> : <FiMenu/>}
          </button>
        </div>
        {isMenuOpen? (
          <nav id='nav' className='flex flex-col space-y-2'>
            <ul>
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <li key={path} className='py-1'>
                    <Link href={path}>{name}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        ):
        (
            <nav
            className="hidden sm:hidden md:flex flex-col md:flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav">
            <div className="flex flex-row space-x-0 pr-10">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </nav>
        )}
      </div>
    </aside>
  )
}
