'use client'

import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-8 bg-terminal-black/80 backdrop-blur-sm text-terminal-green font-mono">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 flex items-center">
          <span className="mr-2">{'>'}</span> ssh contact@surya_datta
        </h2>

        <div className="border border-terminal-dim/30 p-6 md:p-8 bg-terminal-black/50">
          <div className="space-y-4 mb-8">
            <p className="text-white">Connecting to server...</p>
            <p className="text-white">Connection established.</p>
            <p className="text-terminal-dim"># You can reach me via the following channels:</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <HiMail className="w-6 h-6 text-terminal-green flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                <span className="text-terminal-green font-bold min-w-[100px]">$ email</span>
                <a href="mailto:suryadattatangirala@outlook.com" className="text-white hover:text-terminal-green hover:underline decoration-terminal-green underline-offset-4 transition-all">
                  suryadattatangirala@outlook.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiPhone className="w-6 h-6 text-terminal-green flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                <span className="text-terminal-green font-bold min-w-[100px]">$ phone</span>
                <a href="tel:9948568657" className="text-white hover:text-terminal-green hover:underline decoration-terminal-green underline-offset-4 transition-all">
                  +91 9948568657
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="w-6 h-6 text-terminal-green flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                <span className="text-terminal-green font-bold min-w-[100px]">$ linkedin</span>
                <a href="https://www.linkedin.com/in/surya-datta-80732a113/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terminal-green hover:underline decoration-terminal-green underline-offset-4 transition-all">
                  linkedin.com/in/surya-datta
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="w-6 h-6 text-terminal-green flex-shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-1">
                <span className="text-terminal-green font-bold min-w-[100px]">$ github</span>
                <a href="https://github.com/suryadatta1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terminal-green hover:underline decoration-terminal-green underline-offset-4 transition-all">
                  github.com/suryadatta1
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-terminal-dim/30 flex items-center gap-2">
            <span className="text-terminal-green font-bold">$</span>
            <span className="animate-blink bg-terminal-green w-3 h-5 block"></span>
          </div>
        </div>

        <footer className="mt-20 text-center text-terminal-dim text-sm">
          <p>
            Process finished with exit code 0
            <br />
            © {new Date().getFullYear()} Surya Datta. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}
