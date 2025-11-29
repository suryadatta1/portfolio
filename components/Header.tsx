'use client'

import { useState, useEffect } from 'react'
import { FaTerminal, FaCode, FaRocket } from 'react-icons/fa'

export default function Header() {
  const [bootSequence, setBootSequence] = useState<string[]>([])
  const [isBooted, setIsBooted] = useState(false)

  useEffect(() => {
    const sequence = [
      '> initializing_portfolio.exe...',
      '> loading_kernel_modules... [OK]',
      '> mounting_file_system... [OK]',
      '> establishing_secure_connection... [OK]',
      '> loading_user_profile(surya_datta)... [OK]',
      '> access_granted'
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < sequence.length) {
        setBootSequence(prev => [...prev, sequence[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setIsBooted(true), 100)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: FaCode, label: 'Years Experience', value: '5+' },
    { icon: FaRocket, label: 'Projects Deployed', value: '5+' },
    { icon: FaTerminal, label: 'Technologies', value: '12+' }
  ]

  return (
    <header className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 pt-20 font-mono text-terminal-green relative">
      <div className="max-w-6xl mx-auto w-full">
        {/* Boot Sequence */}
        <div className={`space-y-2 text-sm sm:text-base transition-opacity duration-1000 mb-8 ${isBooted ? 'opacity-30' : 'opacity-70'}`}>
          {bootSequence.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        {/* Main Content - Appears after boot */}
        <div className={`transition-all duration-1000 transform ${isBooted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Main Hero */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-white">
                  <span className="text-terminal-green">{'>'}</span> Surya Datta
                </h1>
                <p className="text-xl sm:text-2xl text-gray-400 mb-4">
                  Backend Lead @ Aiphant Technologies
                </p>
                <p className="text-lg text-gray-300 max-w-2xl">
                  Specializing in scalable infrastructure, healthcare tech, and cloud architecture. Building production-ready systems with Node.js, AWS, and Terraform.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Node.js', 'AWS', 'Docker', 'Terraform', 'PostgreSQL', 'Microservices'].map((tech, i) => (
                  <span key={i} className="px-3 py-1 border border-terminal-dim/30 text-gray-300 text-sm hover:border-terminal-green hover:text-terminal-green transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#experience" className="px-6 py-3 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-black transition-all duration-300">
                  View Experience
                </a>
                <a href="#contact" className="px-6 py-3 border border-terminal-green text-white hover:bg-terminal-green hover:text-terminal-black transition-all duration-300">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="lg:col-span-1 space-y-4">
              {stats.map((stat, i) => (
                <div key={i} className="border border-terminal-dim/30 bg-terminal-black/50 p-4 hover:border-terminal-green/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-terminal-green" />
                    <span className="text-xs text-terminal-dim uppercase tracking-wider">{stat.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hover:text-terminal-green transition-all duration-1000 cursor-pointer ${isBooted ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll to content"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </header>
  )
}
