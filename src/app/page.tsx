'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Moon, Sun, Code, Globe, Database, BookOpen, Briefcase, GraduationCap, Award, GitBranch } from 'lucide-react'
import FloatingElements from './FloatingElements'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)


const toggleDarkMode = () => {
  setDarkMode(!darkMode)
  document.documentElement.classList.toggle('dark')
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

return (
  <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
    <FloatingElements />
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="container mx-auto px-4 py-6 sm:py-8">
        <nav className="flex flex-col sm:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
            <AvatarImage 
                src={'/khushi.jpg'} 
                alt="KK" 
                width={60} 
                height={60}
              />
              <AvatarFallback>KK</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 z-10">
              Khushi Kumari
            </h1>
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full mt-4 sm:mt-0"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">BCA Student & Aspiring Full Stack Developer</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700 dark:text-gray-300">Tech enthusiast with a passion for web development and emerging technologies</p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com/nullpointerv" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://www.linkedin.com/in/khushi-kumari-445542245/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="mailto:khushi.khus.1207@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.section>

          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">About Me</h3>
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-indigo-900">
                <p className="mb-4 text-sm sm:text-base">
                  As a third-year BCA student at CMR University, I'm on an exciting journey to become a full-stack developer. My passion for technology and its potential to transform lives drives me to constantly expand my skills and knowledge.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                  My tech journey began with mastering the fundamentals of programming and has evolved to developing e-commerce solutions using WordPress. I'm currently diving deep into frontend frameworks, aiming to bridge the gap between design and functionality.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                  With a strong foundation in web technologies and a certification in Python from NPTEL IIT Madras, I bring a blend of theoretical knowledge and practical skills to the table. My experience as a web developer intern at Picraft, where I built an e-commerce platform for 3D printers, has given me valuable insights into real-world project development and client interactions.
                </p>
                <p className="text-sm sm:text-base">
                  I'm an active participant in the tech community, contributing to open-source projects during Hacktoberfest and constantly seeking new challenges. I'm eager to leverage my skills in innovative projects and continue growing as a developer in this ever-evolving tech landscape.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-400 to-indigo-500 dark:from-purple-600 dark:to-indigo-700">
                  <CardTitle className="text-base sm:text-lg font-semibold text-white">Web Development</CardTitle>
                  <Code className="h-5 w-5 text-white" />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xs sm:text-sm">HTML, CSS, JavaScript</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-indigo-400 to-blue-500 dark:from-indigo-600 dark:to-blue-700">
                  <CardTitle className="text-base sm:text-lg font-semibold text-white">CMS</CardTitle>
                  <Globe className="h-5 w-5 text-white" />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xs sm:text-sm">WordPress</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-400 to-cyan-500 dark:from-blue-600 dark:to-cyan-700">
                  <CardTitle className="text-base sm:text-lg font-semibold text-white">Programming</CardTitle>
                  <Code className="h-5 w-5 text-white" />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xs sm:text-sm">C++, Python</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-cyan-400 to-teal-500 dark:from-cyan-600 dark:to-teal-700">
                  <CardTitle className="text-base sm:text-lg font-semibold text-white">Learning</CardTitle>
                  <BookOpen className="h-5 w-5 text-white" />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xs sm:text-sm">Frontend Frameworks</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-400 to-green-500 dark:from-teal-600 dark:to-green-700">
                  <CardTitle className="text-base sm:text-lg font-semibold text-white">Goal</CardTitle>
                  <Database className="h-5 w-5 text-white" />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xs sm:text-sm">Full Stack Developer</p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Experience</h3>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 text-white">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Briefcase className="h-5 w-5 mr-2" />
                  Web Developer Intern
                </CardTitle>
                <CardDescription className="text-indigo-100 text-xs sm:text-sm">                  <a 
                    href="https://picraft.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-white transition-colors"
                  >
                    Picraft
                  </a>
                  </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6">
                <p className="mb-4 text-sm sm:text-base">
                  Developed an e-commerce website for selling 3D printers using WordPress technologies and plugins.
                  This experience enhanced my skills in web development and gave me practical insights into the 3D printing industry.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">WordPress</Badge>
                  <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                  <Badge variant="secondary" className="text-xs">Web Development</Badge>
                  <Badge variant="secondary" className="text-xs">3D Printing</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Open Source Contributions</h3>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-pink-600 dark:from-orange-700 dark:to-pink-800 text-white">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <GitBranch className="h-5 w-5 mr-2" />
                  Hacktoberfest Participant
                </CardTitle>
                <CardDescription className="text-orange-100 text-xs sm:text-sm">Open Source Contribution</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6">
                <p className="mb-4 text-sm sm:text-base">
                  Actively participated in Hacktoberfest, contributing to various open-source projects and enhancing my skills in collaborative development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">Git</Badge>
                  <Badge variant="secondary" className="text-xs">Open Source</Badge>
                  <Badge variant="secondary" className="text-xs">Collaboration</Badge>
                  <Badge variant="secondary" className="text-xs">Version Control</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Education</h3>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 text-white">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Bachelor of Computer Applications (BCA)
                </CardTitle>
                <CardDescription className="text-blue-100 text-xs sm:text-sm">CMR University, Bangalore</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6">
                <p className="text-sm sm:text-base">3rd Year Student</p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section className="mb-12 sm:mb-16" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Certifications</h3>
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-700 dark:to-pink-800 text-white">
                <CardTitle className="flex items-center text-base sm:text-lg">
                  <Award className="h-5 w-5 mr-2" />
                  Python Certification
                </CardTitle>
                <CardDescription className="text-purple-100 text-xs sm:text-sm">NPTEL IIT Madras</CardDescription>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6">
                <p className="text-sm sm:text-base">Successfully completed the Python course, demonstrating proficiency in Python programming concepts and applications.</p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Get in Touch</h3>
            <Card className="overflow-hidden">
              <CardContent className="p-4 sm:p-6 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-indigo-900">
                <p className="mb-4 text-sm sm:text-base">
                  I'm always excited to connect with fellow tech enthusiasts, potential employers, or anyone interested in web development and emerging technologies. 
                  Feel free to reach out for collaborations, opportunities, or just a friendly chat about the latest in tech!
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white w-full sm:w-auto" asChild>
                <a 
                    href="mailto:khushi.khus.1207@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Send me an email</a>
                </Button>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </main>

      <footer className="container mx-auto px-4 py-6 sm:py-8 text-center text-xs sm:text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Khushi Kumari. All rights reserved.</p>
      </footer>
    </div>
  </div>
)
}