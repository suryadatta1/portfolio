'use client'

import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLaptopCode
} from 'react-icons/fa'

const skillCategories = [
  {
    title: 'LANGUAGES',
    icon: FaCode,
    skills: ['JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'BACKEND & API',
    icon: FaServer,
    skills: ['Node.js', 'Express.js', 'Nest.js', 'Microservices', 'REST APIs', 'GraphQL']
  },
  {
    title: 'DATABASE & CLOUD',
    icon: FaCloud,
    skills: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'FRONTEND',
    icon: FaLaptopCode,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 bg-terminal-black/80 backdrop-blur-sm text-terminal-green font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="mr-2">{'>'}</span> cat tech_stack.json
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border border-terminal-green/30 bg-terminal-black/50 p-6 md:p-8 hover:border-terminal-green transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6 border-b border-terminal-green/20 pb-4 border-dashed">
                <category.icon className="w-6 h-6 text-terminal-green" />
                <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-terminal-green transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <span className="text-terminal-green mr-2">{'>'}</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60 text-sm">
          <div className="border-t border-terminal-dim pt-4">
            <span className="text-terminal-green font-bold">!</span> SYSTEM_CHECK: ALL_MODULES_OPTIMIZED
          </div>
          <div className="border-t border-terminal-dim pt-4 md:text-right">
            <span className="text-terminal-green font-bold">@</span> LAST_UPDATE: {new Date().toISOString().split('T')[0]}
          </div>
        </div>
      </div>
    </section>
  )
}
