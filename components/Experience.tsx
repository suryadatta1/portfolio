'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const experiences = [
  {
    company: 'Aiphant Technologies',
    role: 'Backend Lead',
    period: 'Oct 2024 - Present',
    status: 'active',
    technologies: ['NodeJS v18', 'Express v4', 'Docker', 'Postgres', 'Terraform', 'AWS'],
    achievements: [
      'Developed secure REST APIs for patient data management',
      'Integrated Twilio for seamless user authentication',
      'Embedded an LLM to analyze health records',
      'Automated infrastructure with Terraform and Docker'
    ]
  },
  {
    company: 'Aiphant Technologies',
    role: 'Software Engineer',
    period: 'April 2020 - Present',
    status: 'active',
    technologies: ['NodeJS v13', 'MongoDB v4', 'Express v4', 'Docker', 'AWS'],
    achievements: [
      'Developed API for live event metadata streaming',
      'Designed ETL process for data ingestion',
      'Created Docker containers for multi-environment deployment',
      'Implemented unit and integration tests'
    ]
  },
  {
    company: 'Automated Parking Platform',
    role: 'Project Lead',
    period: 'April 2024 - July 2024',
    status: 'completed',
    technologies: ['JWT', 'Docker', 'Microservices', 'REST APIs'],
    achievements: [
      'Developed secure authentication with JWT',
      'Created modular API endpoints for order management',
      'Deployed microservices using Docker',
      'Integrated APIs with payment systems'
    ]
  }
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-8 bg-terminal-black/80 backdrop-blur-sm text-terminal-green font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="mr-2">{'>'}</span> cat work_history.log
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-terminal-dim/30 bg-terminal-black/50 hover:border-terminal-green/50 transition-all duration-300"
            >
              {/* Header - Always Visible */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <span className={`px-2 py-1 text-xs border ${exp.status === 'active'
                          ? 'border-terminal-green text-terminal-green'
                          : 'border-terminal-dim text-terminal-dim'
                        }`}>
                        {exp.status.toUpperCase()}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                      <span className="text-white">{exp.company}</span>
                      <span className="hidden sm:inline text-terminal-dim">|</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <button className="text-terminal-green hover:text-white transition-colors mt-1">
                    {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </div>

              {/* Expandable Content */}
              {expandedIndex === index && (
                <div className="border-t border-terminal-dim/30 p-6 pt-6 space-y-6 animate-fade-in">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-bold mb-3 text-terminal-dim uppercase tracking-wider">
                      $ tech_stack --list
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-terminal-dim/10 border border-terminal-dim/50 text-gray-300 text-sm hover:border-terminal-green hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-bold mb-3 text-terminal-dim uppercase tracking-wider">
                      $ cat achievements.txt
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-300">
                          <span className="text-terminal-green mt-1">{'>'}</span>
                          <span className="flex-1">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-12 p-6 border border-terminal-dim/30 bg-terminal-black/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-terminal-dim">
            <div>
              <span className="text-terminal-green font-bold">!</span> Total Experience: {experiences.length} positions
            </div>
            <div>
              <span className="text-terminal-green font-bold">@</span> Active Projects: {experiences.filter(e => e.status === 'active').length}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
