'use client'

import { useEffect, useState } from 'react'

export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 md:pt-20 pb-8 md:pb-0">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-primary-cyan/30 to-primary-purple/20 animate-gradient opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/10 via-transparent to-primary-blue/10 animate-gradient" style={{ animationDelay: '2s', animationDuration: '20s' }} />
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0',
            animation: 'gridMove 30s linear infinite'
          }}
        />
      </div>
      
      {/* Large floating orbs with mouse interaction - Reduced size on mobile */}
      <div 
        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary-blue/20 rounded-full blur-3xl animate-float transition-all duration-1000 ease-out"
        style={{
          left: `${50 + mousePosition.x / 40}%`,
          top: `${30 + mousePosition.y / 40}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-primary-cyan/25 rounded-full blur-3xl animate-float-delayed transition-all duration-1200 ease-out"
        style={{
          right: `${20 + mousePosition.x / 50}%`,
          bottom: `${20 + mousePosition.y / 50}%`,
          transform: 'translate(50%, 50%)',
        }}
      />
      <div 
        className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-primary-purple/20 rounded-full blur-3xl animate-float transition-all duration-1500 ease-out"
        style={{
          left: `${70 + mousePosition.x / 60}%`,
          bottom: `${30 + mousePosition.y / 60}%`,
          transform: 'translate(-50%, 50%)',
        }}
      />
      
      {/* Additional smaller animated orbs - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-64 h-64 bg-primary-cyan/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-purple/15 rounded-full blur-2xl animate-float-delayed" style={{ animationDelay: '3s' }} />
      
      {/* Animated particles effect - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-cyan/40 rounded-full animate-float hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 animate-fade-in w-full">
        <div className="mb-4 sm:mb-6 animate-slide-up">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-6 sm:mb-8 border border-primary-cyan/30">
            <span className="text-cyan-400 text-xs sm:text-sm font-medium">Available for Opportunities</span>
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 animate-slide-up leading-tight" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text">Surya</span>
          <br />
          <span className="text-white">Datta</span>
        </h1>
        
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-3 sm:mb-4 font-light">
            Software Engineer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2">
            Building scalable solutions that drive organizational growth
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 px-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-full font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-blue/50"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 glass border border-primary-cyan/30 text-primary-cyan rounded-full font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-300 hover:border-primary-cyan/60"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
