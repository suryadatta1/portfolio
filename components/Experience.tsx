'use client'

interface ExperienceItem {
  title: string
  company: string
  period: string
  project?: string
  technologies: string[]
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Backend Lead',
    company: 'Aiphant Technologies',
    period: 'October 2024 - Present',
    project: 'Health Tech Platform',
    technologies: ['NodeJS v18', 'Express v4', 'Docker', 'Docker Compose', 'Postgres', 'Terraform', 'GitHub Actions'],
    achievements: [
      'Developed secure REST APIs for patient data management, ensuring compliance with healthcare data security standards.',
      'Integrated Twilio for seamless user authentication and verification.',
      'Embedded an LLM to analyze health records and provide actionable insights.',
      'Automated infrastructure provisioning and deployment with Terraform and Docker, minimizing deployment time and errors.',
      'Enhanced patient care decisions with AI-driven analytics for real-time insights.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Aiphant Technologies',
    period: 'April 2020 - Present',
    project: 'Leading Media Client',
    technologies: ['NodeJS v13', 'MongoDB v4', 'Express v4', 'BottleJS', 'Docker', 'Docker Compose', 'Postgres', 'Terraform', 'GitHub Actions'],
    achievements: [
      'Developed an API to deliver metadata necessary for displaying and streaming live events.',
      'Designed an ETL process to retrieve data from upstream sources and construct the database for the API.',
      'Created Docker containers to deploy the API and ETL across various environments.',
      'Implemented unit and integration tests.',
      'Utilized Argo Jobs to manage data ingestion processes.',
    ],
  },
  {
    title: 'Project Lead',
    company: 'Automated Parking Platform',
    period: 'April 2024 - July 2024',
    technologies: ['JWT', 'Docker', 'Microservices'],
    achievements: [
      'Developed secure authentication and order management APIs with JWT for improved session security and workflows.',
      'Created modular API endpoints for efficient order management and integration.',
      'Utilized Docker to deploy microservices, enhancing scalability and fault isolation.',
      'Collaborated with frontend and operations teams to integrate APIs with payment and notification systems, increasing reliability.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Work Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Glowing */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-primary-cyan to-primary-purple transform md:-translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-primary-blue blur-sm opacity-50" />
          </div>
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue via-primary-cyan to-primary-purple md:hidden">
            <div className="absolute inset-0 bg-primary-blue blur-sm opacity-50" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-20">
            {experiences.map((exp, index) => {
              const isBlue = index % 3 === 0
              const isCyan = index % 3 === 1
              const isPurple = index % 3 === 2
              
              return (
                <div
                  key={index}
                  className="relative flex items-start gap-8 group"
                >
                  {/* Timeline Node - Circular with glow */}
                  <div className={`relative z-20 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl ${
                    isBlue ? 'bg-primary-blue group-hover:shadow-primary-blue/50' :
                    isCyan ? 'bg-primary-cyan group-hover:shadow-primary-cyan/50' :
                    'bg-primary-purple group-hover:shadow-primary-purple/50'
                  }`}>
                    <div className={`absolute inset-0 rounded-full blur-md opacity-50 animate-pulse ${
                      isBlue ? 'bg-primary-blue' :
                      isCyan ? 'bg-primary-cyan' :
                      'bg-primary-purple'
                    }`} />
                    <div className="absolute inset-2 rounded-full bg-white/20" />
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 ml-4 md:ml-0">
                    <div className={`bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl group-hover:scale-[1.02] ${
                      isBlue ? 'hover:shadow-primary-blue/10' :
                      isCyan ? 'hover:shadow-primary-cyan/10' :
                      'hover:shadow-primary-purple/10'
                    }`}>
                      {/* Header Section */}
                      <div className="mb-6">
                        {/* Period */}
                        <div className="mb-3">
                          <span className={`text-xs font-semibold tracking-wider uppercase ${
                            isBlue ? 'text-primary-blue' :
                            isCyan ? 'text-primary-cyan' :
                            'text-primary-purple'
                          }`}>
                            {exp.period}
                          </span>
                        </div>
                        
                        {/* Title - Large Colored */}
                        <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${
                          isBlue ? 'text-primary-blue' :
                          isCyan ? 'text-primary-cyan' :
                          'text-primary-purple'
                        }`}>
                          {exp.title}
                        </h3>
                        
                        {/* Company - White */}
                        <p className="text-xl md:text-2xl text-white font-semibold mb-2">
                          {exp.company}
                        </p>
                        
                        {/* Project/Client - Light Colored */}
                        {exp.project && (
                          <p className={`text-lg font-medium ${
                            isBlue ? 'text-blue-400' :
                            isCyan ? 'text-cyan-400' :
                            'text-purple-400'
                          }`}>
                            {exp.project}
                          </p>
                        )}
                      </div>

                      {/* Technologies - Colored Tags */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border ${
                              isBlue ? 'bg-primary-blue/20 border-primary-blue/50 text-blue-300' :
                              isCyan ? 'bg-primary-cyan/20 border-primary-cyan/50 text-cyan-300' :
                              'bg-primary-purple/20 border-primary-purple/50 text-purple-300'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements with Checkmarks */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group/item"
                          >
                            {/* Checkmark */}
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors border ${
                              isBlue ? 'bg-primary-blue/20 border-primary-blue/50 group-hover/item:bg-primary-blue/30' :
                              isCyan ? 'bg-primary-cyan/20 border-primary-cyan/50 group-hover/item:bg-primary-cyan/30' :
                              'bg-primary-purple/20 border-primary-purple/50 group-hover/item:bg-primary-purple/30'
                            }`}>
                              <svg 
                                className={`w-3 h-3 ${
                                  isBlue ? 'text-primary-blue' :
                                  isCyan ? 'text-primary-cyan' :
                                  'text-primary-purple'
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={3} 
                                  d="M5 13l4 4L19 7" 
                                />
                              </svg>
                            </div>
                            
                            {/* Achievement Text */}
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed flex-1 group-hover/item:text-gray-200 transition-colors">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
