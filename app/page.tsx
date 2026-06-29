import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Articles from '@/components/Articles'
import Certifications from '@/components/Certifications'
import Metrics from '@/components/Metrics'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Metrics />
        <Projects />
        <Articles />
        <Certifications />
      </main>
      <Footer />
    </>
  )
}
