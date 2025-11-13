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
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">Education</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            Learning <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative glass rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-primary-cyan/30 hover:border-primary-cyan/60 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-2xl hover:shadow-primary-cyan/20"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/0 to-primary-cyan/0 group-hover:from-primary-blue/10 group-hover:to-primary-cyan/10 rounded-xl sm:rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                  <div className="text-3xl sm:text-4xl md:text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform flex-shrink-0">
                    {edu.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2 group-hover:text-white transition-colors leading-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-2 sm:mb-3 leading-relaxed">{edu.degree}</p>
                    {edu.period && (
                      <p className="text-xs sm:text-sm text-primary-cyan font-medium">{edu.period}</p>
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
