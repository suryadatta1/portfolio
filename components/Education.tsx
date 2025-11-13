'use client'

interface EducationItem {
  institution: string
  degree: string
  period?: string
  icon: string
}

const education: EducationItem[] = [
  {
    institution: 'School of Accelerated Learning',
    degree: 'Product engineering',
    period: 'Dec 2018 - April 2019',
    icon: '🎓',
  },
  {
    institution: 'Sri Vasavi Engineering College',
    degree: 'Bachelor of Technology (Electronics and Communication Engineering)',
    icon: '🏛️',
  },
]

export default function Education() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Learning <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 border border-primary-cyan/30 hover:border-primary-cyan/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-cyan/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/0 to-primary-cyan/0 group-hover:from-primary-blue/10 group-hover:to-primary-cyan/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-gray-300 mb-3">{edu.degree}</p>
                    {edu.period && (
                      <p className="text-sm text-primary-cyan font-medium">{edu.period}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
