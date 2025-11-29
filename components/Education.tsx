'use client'

const education = [
  {
    institution: 'School of Accelerated Learning',
    degree: 'Product Engineering',
    period: 'Dec 2018 - April 2019',
    status: 'COMPLETED'
  },
  {
    institution: 'Sri Vasavi Engineering College',
    degree: 'B.Tech (ECE)',
    period: '2014 - 2018',
    status: 'COMPLETED'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 md:px-8 bg-terminal-black/80 backdrop-blur-sm text-terminal-green font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="mr-2">{'>'}</span> cat education.log
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="border border-terminal-dim/30 bg-terminal-black/50 p-6 md:p-8 hover:border-terminal-green/50 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <p className="text-gray-300 mb-2">{edu.degree}</p>
                  <p className="text-terminal-dim text-sm">{edu.period}</p>
                </div>
                <span className="px-3 py-1 border border-terminal-dim text-terminal-dim text-xs self-start">
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-12 p-6 border border-terminal-dim/30 bg-terminal-black/30">
          <div className="text-sm text-terminal-dim">
            <span className="text-terminal-green font-bold">!</span> Academic credentials verified and validated
          </div>
        </div>
      </div>
    </section>
  )
}
