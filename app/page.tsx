import Navigation from '@/components/Navigation'
import ScrollProgress from '@/components/ScrollProgress'
import ScrollToTop from '@/components/ScrollToTop'
import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Terminal from '@/components/Terminal'
import MatrixBackground from '@/components/MatrixBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-terminal-black selection:bg-terminal-green selection:text-terminal-black">
      <MatrixBackground />
      <Navigation />
      <ScrollProgress />
      <Header />
      <div className="relative z-10 space-y-0">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
      <ScrollToTop />
      <Terminal />
    </main>
  )
}
