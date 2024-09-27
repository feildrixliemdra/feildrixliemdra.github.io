import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import SkillSection from './components/SkillSection'
import ExperienceSection from './components/ExperienceSection'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-white'>
      <Navbar />
      <div className='container mt-24 mx-auto px-12 py-4 max-w-full'>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
