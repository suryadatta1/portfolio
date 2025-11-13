'use client'

import FadeInOnScroll from './FadeInOnScroll'

export default function About() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual element */}
          <FadeInOnScroll>
            <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-primary-cyan/20 to-primary-purple/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8 md:p-12 border border-primary-cyan/30">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue/20 to-primary-cyan/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-blue to-primary-cyan bg-clip-text text-transparent">Innovation Driven</h3>
                <p className="text-gray-400">Transforming ideas into scalable solutions</p>
              </div>
            </div>
            </div>
          </FadeInOnScroll>

          {/* Right side - Content */}
          <FadeInOnScroll delay={200}>
            <div>
            <div className="inline-block mb-6">
              <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate about{' '}
              <span className="gradient-text">building products</span>{' '}
              that matter
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I am a Software Engineer with a passion for developing products that contribute to an organization&apos;s growth. 
              I thrive on embracing new challenges and seeking out learning opportunities to expand my knowledge and skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary-blue/10 border border-primary-blue/30 rounded-full">
                <span className="text-blue-400 text-sm">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-primary-cyan/10 border border-primary-cyan/30 rounded-full">
                <span className="text-cyan-400 text-sm">Team Player</span>
              </div>
              <div className="px-4 py-2 bg-primary-purple/10 border border-primary-purple/30 rounded-full">
                <span className="text-purple-400 text-sm">Team Leader</span>
              </div>
              <div className="px-4 py-2 bg-primary-blue/10 border border-primary-blue/30 rounded-full">
                <span className="text-blue-400 text-sm">Continuous Learner</span>
              </div>
            </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
