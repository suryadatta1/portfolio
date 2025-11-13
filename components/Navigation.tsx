'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg sm:text-xl md:text-2xl font-bold gradient-text hover:scale-105 active:scale-95 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2 focus:ring-offset-black rounded-lg px-2"
            >
              SD
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2 focus:ring-offset-black ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50 focus:text-yellow-400 focus:bg-yellow-400/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-all"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-2 bg-black/95 backdrop-blur-md border-t border-gray-800/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400/60 focus:ring-offset-2 focus:ring-offset-black ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50 focus:text-yellow-400 focus:bg-yellow-400/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

    </>
  )
}

