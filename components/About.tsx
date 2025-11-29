'use client'

export default function About() {
  const stats = [
    { label: 'YEARS_EXPERIENCE', value: '5+' },
    { label: 'PROJECTS_DEPLOYED', value: '5+' },
    { label: 'SYSTEMS_OPTIMIZED', value: '20+' }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8 bg-terminal-black/80 backdrop-blur-sm text-terminal-green font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="mr-2">{'>'}</span> whoami
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Bio */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-terminal-green/30 bg-terminal-black/50 p-6 md:p-8">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-white text-lg">
                  <span className="text-terminal-green">{'>'}</span> Backend Lead specializing in <span className="text-terminal-green">scalable infrastructure</span> and <span className="text-terminal-green">healthcare technology</span>.
                </p>

                <p>
                  Currently leading backend development at <span className="text-white">Aiphant Technologies</span>, where I architect secure REST APIs for patient data management and integrate cutting-edge AI solutions. My work bridges critical healthcare systems with modern cloud infrastructure using <span className="text-terminal-green">AWS</span>, <span className="text-terminal-green">Terraform</span>, and <span className="text-terminal-green">Docker</span>.
                </p>

                <p>
                  I&apos;ve automated infrastructure provisioning that reduced deployment time by 60%, embedded LLM models for real-time health record analysis, and built microservices handling millions of API requests. My approach combines clean architecture with DevOps best practices to deliver production-ready solutions.
                </p>

                <p>
                  Beyond code, I mentor developers, lead technical planning sessions, and drive system design decisions. I believe in writing code that&apos;s not just functional, but maintainable, testable, and documented.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="border border-terminal-dim/30 bg-terminal-black/30 p-6">
              <h3 className="text-lg font-bold mb-4 text-white flex items-center">
                <span className="text-terminal-green mr-2">$</span> current --focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Cloud Architecture', 'Healthcare APIs', 'Infrastructure as Code', 'LLM Integration', 'Team Leadership'].map((focus, i) => (
                  <span key={i} className="px-3 py-1 bg-terminal-dim/20 border border-terminal-dim text-gray-300 text-sm hover:border-terminal-green hover:text-white transition-colors">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Quick Facts */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats */}
            <div className="border border-terminal-green/30 bg-terminal-black/50 p-6">
              <h3 className="text-sm font-bold mb-6 text-terminal-dim uppercase tracking-wider">Performance Metrics</h3>
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <div key={i} className="border-b border-terminal-dim/20 pb-3 last:border-0">
                    <div className="text-terminal-dim text-xs mb-1">{stat.label}</div>
                    <div className="text-white text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="border border-terminal-dim/30 bg-terminal-black/30 p-6">
              <h3 className="text-sm font-bold mb-4 text-terminal-dim uppercase tracking-wider">System Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-terminal-dim">ROLE:</span>
                  <span className="text-white">Backend Lead</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-dim">SPECIALTY:</span>
                  <span className="text-white">Node.js</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-dim">STATUS:</span>
                  <span className="text-terminal-green">Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-terminal-dim">LOCATION:</span>
                  <span className="text-white">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
