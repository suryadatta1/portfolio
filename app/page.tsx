import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <ScrollToTop />
      <Navigation />
      <section id="home" className="scroll-mt-16 md:scroll-mt-20">
        <Header />
      </section>
      <section id="about" className="scroll-mt-16 md:scroll-mt-20">
        <About />
      </section>
      <section id="experience" className="scroll-mt-16 md:scroll-mt-20">
        <Experience />
      </section>
      <section id="skills" className="scroll-mt-16 md:scroll-mt-20">
        <Skills />
      </section>
      <section id="education" className="scroll-mt-16 md:scroll-mt-20">
        <Education />
      </section>
      <section id="contact" className="scroll-mt-16 md:scroll-mt-20">
        <Contact />
      </section>
    </main>
  )
}

