'use client'

import { 
  SiJavascript, 
  SiNodedotjs, 
  SiExpress, 
  SiReact, 
  SiMongodb, 
  SiPostgresql,
  SiPostman,
  SiDocker,
  SiAmazon,
  SiGithubactions,
  SiGithub,
  SiTerraform,
  SiJenkins
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express JS', icon: SiExpress },
  { name: 'React JS', icon: SiReact },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'RESTful APIs', icon: SiPostman },
  { name: 'Docker', icon: SiDocker },
  { name: 'Docker-Compose', icon: SiDocker },
  { name: 'AWS', icon: SiAmazon },
  { name: 'CI/CD', icon: SiJenkins },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Git & GitHub', icon: SiGithub },
  { name: 'Terraform', icon: SiTerraform },
]

export default function Skills() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-black text-white overflow-hidden" id="skills">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 via-primary-cyan/5 to-primary-purple/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 block">Technical Skills</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4 text-white mb-3 sm:mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
            A collection of tools and technologies I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group relative glass rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 border border-primary/20 hover:border-primary/60 focus:border-yellow-400 focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-yellow-400/60 focus:ring-offset-1 sm:focus:ring-offset-2 focus:ring-offset-black transition-all duration-500 hover:scale-105 active:scale-95 focus:scale-105 hover:shadow-2xl hover:shadow-primary/30 focus:shadow-2xl focus:shadow-yellow-400/40 cursor-pointer animate-fade-in touch-manipulation"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationFillMode: 'both'
                }}
                tabIndex={0}
                role="button"
                aria-label={`${skill.name} skill`}
              >
                {/* Hover glow effect - only on hover, not focus */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-xl sm:rounded-2xl transition-all duration-500 ${
                  index % 3 === 0 ? 'from-primary-blue/0 to-primary-cyan/0 group-hover:from-primary-blue/25 group-hover:to-primary-cyan/25' :
                  index % 3 === 1 ? 'from-primary-cyan/0 to-primary-purple/0 group-hover:from-primary-cyan/25 group-hover:to-primary-purple/25' :
                  'from-primary-purple/0 to-primary-blue/0 group-hover:from-primary-purple/25 group-hover:to-primary-blue/25'
                }`} />
                
                {/* Focus glow effect - distinct yellow color */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-yellow-400/0 group-focus:bg-yellow-400/15 transition-all duration-500" />
                
                {/* Pulse effect on hover only */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary-blue/20 blur-xl animate-pulse" />
                </div>
                
                <div className="relative z-10 text-center flex flex-col items-center justify-center min-h-[90px] sm:min-h-[100px] md:min-h-[120px]">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 transform group-hover:scale-110 group-hover:rotate-3 group-focus:scale-110 transition-all duration-500 flex justify-center">
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white group-hover:text-cyan-400 group-focus:text-yellow-400 transition-all duration-500 drop-shadow-lg" />
                  </div>
                  <p className="font-semibold text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-100 group-hover:text-white group-focus:text-yellow-300 transition-all duration-500 mt-auto leading-tight sm:leading-normal px-1">
                    {skill.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 sm:top-20 right-4 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-primary-blue/10 rounded-full blur-2xl animate-float opacity-50 sm:opacity-100" />
        <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 bg-primary-cyan/10 rounded-full blur-2xl animate-float-delayed opacity-50 sm:opacity-100" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 sm:w-36 sm:h-36 bg-primary-purple/10 rounded-full blur-2xl animate-float opacity-50 sm:opacity-100" />
      </div>
    </section>
  )
}
