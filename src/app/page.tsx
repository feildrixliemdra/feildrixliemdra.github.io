'use client'

import { useState, useEffect } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Menu,
  Database,
  Server,
  Laptop,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Component() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    // Handle form submission logic here
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const navbarHeight = 56 // Adjust this value based on your navbar height
      const sectionTop = section.offsetTop - navbarHeight
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const sectionId = window.location.hash.substring(1)
        scrollToSection(sectionId)
      }
    }

    handleHashChange() // Handle initial hash on page load
    window.addEventListener('hashchange', handleHashChange)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section')
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const NavLinks = () => (
    <>
      <a
        className='text-lg font-medium hover:underline underline-offset-4 hover:scale-110 hover:font-semibold'
        href='#about'
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
      >
        About
      </a>
      <a
        className='text-lg font-medium hover:underline underline-offset-4 hover:scale-110 hover:font-semibold'
        href='#skills'
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('skills')
        }}
      >
        Skills
      </a>
      <a
        className='text-lg font-medium hover:underline underline-offset-4 hover:scale-110 hover:font-semibold'
        href='#services'
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('services')
        }}
      >
        Services
      </a>
      <a
        className='text-lg font-medium hover:underline underline-offset-4 hover:scale-110 hover:font-semibold'
        href='#contact'
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('contact')
        }}
      >
        Contact
      </a>
    </>
  )

  return (
    <div className='flex flex-col min-h-screen w-full'>
      <header className='sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='mx-auto container flex h-14 items-center justify-between flex-row-reverse sm:flex-row px-6 py-4 sm:px-0 '>
          <a
            className='flex items-center justify-center'
            href=''
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('about')
            }}
          >
            <span className='sr-only'>Feildrix</span>
            <h2 className='text-4xl font-bold'>FLDX</h2>
          </a>
          <nav className='ml-auto hidden md:flex gap-4 sm:gap-6'>
            <NavLinks />
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                className='px-0 text-base hover:bg-transparent focus:ring-0 md:hidden'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <nav className='flex flex-col gap-4'>
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className='flex-1'>
        <section
          id='about'
          className={`w-full mx-auto py-12 md:py-12 lg:py-14 xl:py-20 transition-opacity duration-1000 ${
            isVisible.about ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='container mx-auto px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <Avatar className='w-32 h-32 md:w-64 md:h-64 border-4 border-white shadow-lg animate-fade-in'>
                <AvatarImage src='/images/fldx.jpg' alt='John Doe' />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='space-y-2'
              >
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fade-in-up'>
                  Feildrix Liemdra
                </h1>

                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up animation-delay-200'>
                  <TypeAnimation
                    sequence={['Fullstack Developer', 2000]}
                    wrapper='span'
                    speed={10}
                    repeat={Infinity}
                    color='#ADB7BE'
                  />
                  <br />
                  Based in Indonesia 🇮🇩
                </p>
              </motion.div>
              <p className='mx-auto max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-in-up animation-delay-400'>
                {` 
              As a passionate full-stack developer, I specialize in crafting comprehensive web applications that blend seamless user experiences with robust back-end functionality.
              My technical toolkit includes a wide range of technologies such as JavaScript, HTML, CSS, React, Node.js, Go and SQL, allowing me to handle every aspect of the development process.
            `}
              </p>
              <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600'>
                <Button asChild>
                  <a
                    href='#contact'
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('contact')
                    }}
                  >
                    Get in touch
                  </a>
                </Button>
                <Button variant='outline' asChild>
                  <a
                    href='#services'
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('services')
                    }}
                  >
                    View Services
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id='skills'
          className={`w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-opacity duration-1000 ${
            isVisible.skills ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='container mx-auto  px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-up'>
              Skills
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              <Card className='animate-fade-in-up animation-delay-200'>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Laptop size={80} />
                  <h3 className='text-xl font-bold'>Frontend Development</h3>
                  <p className='text-md text-gray-500 dark:text-gray-400 text-center'>
                    HTML, CSS, Javascript, Typescript, NextJS
                  </p>
                </CardContent>
              </Card>
              <Card className='animate-fade-in-up animation-delay-400'>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Server size={80} />
                  <h3 className='text-xl font-bold'>Backend Development</h3>
                  <p className='text-md text-gray-500 dark:text-gray-400 text-center'>
                    Node.js, Golang
                  </p>
                </CardContent>
              </Card>
              <Card className='animate-fade-in-up animation-delay-600'>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Database size={80}></Database>
                  <h3 className='text-xl font-bold'>Database Management</h3>
                  <p className='text-md text-gray-500 dark:text-gray-400 text-center'>
                    MySQL, PostgreSQL, MongoDB, Redis
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id='services'
          className={`w-full py-12 md:py-24 lg:py-32 transition-opacity duration-1000 ${
            isVisible.services ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='container  mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-up'>
              Services
            </h2>
            <p className='mb-10 mx-auto leading-relaxed max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400'>
              Currently working with my team, we specialize in delivering
              high-quality, tailor-made digital solutions to meet your business
              needs. Whether you're looking to build a sleek and responsive
              website, develop a powerful mobile app, or craft a reliable and
              scalable backend infrastructure, I've got you covered. With a
              focus on modern design, clean code, and performance, I ensure that
              your project not only looks great but also runs seamlessly. Let’s
              collaborate to turn your ideas into reality and elevate your
              digital presence.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Card className='animate-fade-in-up animation-delay-200'>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Image
                    alt='Project 1'
                    className='aspect-video overflow-hidden rounded-lg object-cover object-center'
                    height='225'
                    src='/images/mobile-app-development-illustration.jpg'
                    width='400'
                  />
                  <h3 className='text-xl font-bold'>Mobile App Development</h3>
                  <p className='text-md text-gray-500 dark:text-gray-400 text-center'>
                    Intuitive and feature-rich mobile apps for both iOS and
                    Android platforms, designed to provide a smooth user
                    experience and meet your business goals.
                  </p>
                </CardContent>
              </Card>
              <Card className='animate-fade-in-up animation-delay-400'>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Image
                    alt='Project 2'
                    className='aspect-video overflow-hidden rounded-lg object-cover object-center'
                    height='225'
                    src='/images/web-development-illustration.jpg'
                    width='400'
                  />
                  <h3 className='text-xl font-bold'>Website Development</h3>
                  <p className='text-md text-gray-500 dark:text-gray-400 text-center'>
                    Responsive, user-friendly websites that are visually
                    appealing and optimized for performance, ensuring a seamless
                    experience across all devices.
                  </p>
                </CardContent>
              </Card>
              <Card className='animate-fade-in-up animation-delay-600'>
                <CardContent className='flex flex-col items-center space-y-2 p-6'>
                  <Image
                    alt='Project 3'
                    className='aspect-video overflow-hidden rounded-lg object-cover object-center'
                    height='225'
                    src='/images/api-development-illustration.svg'
                    width='400'
                  />
                  <h3 className='text-xl font-bold'>Backend Development</h3>
                  <p className='text-md text-gray-500 dark:text-gray-400 text-center'>
                    Robust, scalable backend systems that power your
                    applications, ensuring reliability, security, and efficiency
                    for your digital infrastructure.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id='contact'
          className={`w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-opacity duration-1000 ${
            isVisible.contact ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className='container mx-auto  px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 animate-fade-in-up'>
              Contact Me
            </h2>
            <Card className='mx-auto max-w-[600px] animate-fade-in-up animation-delay-200'>
              <CardContent className='p-6'>
                <form className='space-y-4' onSubmit={handleSubmit}>
                  <div className='space-y-2'>
                    <label htmlFor='name'>Name</label>
                    <Input
                      id='name'
                      placeholder='Enter your name'
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email'>Email</label>
                    <Input
                      id='email'
                      placeholder='Enter your email'
                      required
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message'>Message</label>
                    <Textarea
                      id='message'
                      placeholder='Enter your message'
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button className='w-full' type='submit'>
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className='mx-auto  container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Feildrix Liemdra. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='https://github.com/feildrixliemdra'
          >
            <Github className='h-6 w-6' />
            <span className='sr-only'>GitHub</span>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='https://linkedin.com/in/feildrix-liemdra'
          >
            <Linkedin className='h-6 w-6' />
            <span className='sr-only'>LinkedIn</span>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='text-xs hover:underline underline-offset-4'
            href='mailto:feildrixliemdra@gmail.com'
          >
            <Mail className='h-6 w-6' />
            <span className='sr-only'>Email</span>
          </a>
        </nav>
      </footer>
    </div>
  )
}
