'use client'

import { useState, useEffect, useMemo } from 'react'

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = useMemo(() => [
    { name: '~/about', href: '#about' },
    { name: '~/experience', href: '#experience' },
    { name: '~/skills', href: '#skills' },
    { name: '~/contact', href: '#contact' },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // If near the top, clear active section
      if (window.scrollY < 300) {
        setActiveSection('')
        return
      }

      const sections = navItems.map(item => item.href.substring(1))

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/95 backdrop-blur-md border-b border-terminal-green/30 font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="text-terminal-green font-mono font-bold text-lg hover:text-white transition-colors cursor-pointer"
            >
              {' >'} Surya Datta
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-mono text-sm transition-colors duration-300 ${activeSection === item.href.substring(1)
                    ? 'text-terminal-green'
                    : 'text-terminal-dim hover:text-terminal-green'
                    }`}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && <span className="animate-blink">_</span>}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-terminal-green hover:text-terminal-dim transition-colors"
              aria-label="Toggle menu"
            >
              <span className="font-mono text-xl">{isMobileMenuOpen ? '[x]' : '[+]'}</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

