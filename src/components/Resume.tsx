'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Separator } from './ui/separator'
import { Download, Award, Code, Briefcase, GraduationCap, Languages, Zap, Target, Star, MapPin, Calendar, TrendingUp, Users, CheckCircle } from 'lucide-react'

export function Resume() {
  const [skillFilter, setSkillFilter] = useState('all')

  const technicalSkills = [
    { name: 'React/Next.js', level: 95, category: 'frontend', icon: '⚛️' },
    { name: 'TypeScript', level: 90, category: 'frontend', icon: '🔵' },
    { name: 'JavaScript (ES6+)', level: 95, category: 'frontend', icon: '🟨' },
    { name: 'Vue.js/Nuxt.js', level: 85, category: 'frontend', icon: '🟢' },
    { name: 'HTML5/CSS3', level: 98, category: 'frontend', icon: '🔴' },
    { name: 'Tailwind CSS', level: 92, category: 'styling', icon: '🌊' },
    { name: 'Styled Components', level: 88, category: 'styling', icon: '💅' },
    { name: 'SASS/SCSS', level: 90, category: 'styling', icon: '🎨' },
    { name: 'Node.js', level: 80, category: 'backend', icon: '🟢' },
    { name: 'Express.js', level: 78, category: 'backend', icon: '🚀' },
    { name: 'MongoDB', level: 75, category: 'database', icon: '🍃' },
    { name: 'PostgreSQL', level: 70, category: 'database', icon: '🐘' },
    { name: 'Git/GitHub', level: 90, category: 'tools', icon: '🐙' },
    { name: 'Docker', level: 75, category: 'tools', icon: '🐳' },
    { name: 'AWS/Vercel', level: 80, category: 'tools', icon: '☁️' },
    { name: 'Figma/Adobe XD', level: 85, category: 'design', icon: '🎨' }
  ]

  const softSkills = [
    { name: 'Team Leadership', level: 90, icon: '👥' },
    { name: 'Project Management', level: 85, icon: '📊' },
    { name: 'Problem Solving', level: 95, icon: '🧩' },
    { name: 'Communication', level: 88, icon: '💬' },
    { name: 'Mentoring', level: 85, icon: '🎓' },
    { name: 'Time Management', level: 90, icon: '⏰' }
  ]

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Bangalore',
      duration: 'Jan 2024 - Present',
      location: 'Bangalore, India',
      type: 'Full-time',
      responsibilities: [
        'Lead a team of 5 frontend developers on enterprise React applications',
        'Architect and implement micro-frontend solutions for scalable applications',
        'Establish coding standards and best practices across development teams',
        'Conduct code reviews and mentor junior developers',
        'Collaborate with product managers and designers on feature planning'
      ],
      achievements: [
        'Reduced application load time by 45% through optimization techniques',
        'Implemented automated testing that reduced bugs by 60%',
        'Led migration of legacy jQuery codebase to React, improving maintainability'
      ],
      technologies: ['React', 'TypeScript', 'Micro-frontends', 'Team Leadership']
    },
    {
      title: 'Frontend Team Lead',
      company: 'Digital Innovation Lab',
      duration: 'Jun 2023 - Dec 2023',
      location: 'Bangalore, India',
      type: 'Full-time',
      responsibilities: [
        'Managed frontend development for 3 concurrent client projects',
        'Built and maintained component library used across 15+ projects',
        'Introduced modern development practices and CI/CD pipelines',
        'Coordinated with cross-functional teams for project delivery'
      ],
      achievements: [
        'Delivered all projects on time with 98% client satisfaction rate',
        'Reduced development time by 30% through reusable component library',
        'Trained team of 8 developers on modern React patterns'
      ],
      technologies: ['Vue.js', 'Component Library', 'CI/CD', 'Team Management']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovation Lab',
      duration: 'Aug 2022 - May 2023',
      location: 'Bangalore, India',
      type: 'Full-time',
      responsibilities: [
        'Developed responsive web applications using React and Vue.js',
        'Collaborated with UX/UI designers to implement pixel-perfect designs',
        'Integrated RESTful APIs and handled state management',
        'Optimized applications for performance and accessibility'
      ],
      achievements: [
        'Built 12+ production-ready web applications',
        'Achieved 95+ lighthouse performance scores on all projects',
        'Implemented accessibility features reaching WCAG 2.1 AA compliance'
      ],
      technologies: ['React', 'Vue.js', 'API Integration', 'Performance']
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Indian Institute of Technology',
      year: '2018 - 2021',
      grade: 'CGPA: 8.7/10',
      details: [
        'Specialization in Web Technologies and Software Engineering',
        'Final Year Project: Real-time Collaborative Code Editor',
        'Core Subjects: Data Structures, Algorithms, Database Systems, Computer Networks',
        'Relevant Coursework: Web Development, Mobile App Development, UI/UX Design'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      year: '2023',
      credentialId: 'META-FE-2023-456',
      logo: '📘',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Version Control']
    },
    {
      name: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2023',
      credentialId: 'GOOGLE-UX-2023-789',
      logo: '🎨',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing']
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2022',
      credentialId: 'AWS-CCP-2022-123',
      logo: '☁️',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing']
    },
    {
      name: 'Certified ScrumMaster (CSM)',
      issuer: 'Scrum Alliance',
      year: '2022',
      credentialId: 'CSM-2022-456',
      logo: '🏃',
      skills: ['Agile Methodology', 'Team Leadership', 'Sprint Planning', 'Retrospectives']
    }
  ]

  const languages = [
    { name: 'English', level: 'Fluent', flag: '🇺🇸' },
    { name: 'Hindi', level: 'Native', flag: '🇮🇳' },
    { name: 'Kannada', level: 'Native', flag: '🇮🇳' },
    { name: 'Tamil', level: 'Conversational', flag: '🇮🇳' }
  ]

  const achievements = [
    {
      title: 'Led enterprise project worth $2M+',
      description: 'Successfully managed frontend team of 5 developers',
      icon: '💰',
      category: 'Leadership'
    },
    {
      title: 'Improved application performance by 40%',
      description: 'Through advanced optimization techniques and best practices',
      icon: '🚀',
      category: 'Performance'
    },
    {
      title: 'Built 20+ responsive websites',
      description: 'Serving 100K+ users monthly across different industries',
      icon: '🌐',
      category: 'Development'
    },
    {
      title: 'Mentored 10+ junior developers',
      description: '8 received promotions within 18 months',
      icon: '🎓',
      category: 'Mentoring'
    },
    {
      title: 'Tech conference speaker',
      description: 'Spoke at 3 conferences on modern frontend development',
      icon: '🎤',
      category: 'Speaking'
    },
    {
      title: 'Open source contributor',
      description: '500+ GitHub stars across projects',
      icon: '⭐',
      category: 'Community'
    }
  ]

  const filteredSkills = technicalSkills.filter(skill => 
    skillFilter === 'all' || skill.category === skillFilter
  )

  const skillCategories = [
    { id: 'all', label: 'All Skills', icon: '📚' },
    { id: 'frontend', label: 'Frontend', icon: '⚛️' },
    { id: 'styling', label: 'Styling', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '🔧' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
    { id: 'design', label: 'Design', icon: '🎯' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-7xl mx-auto space-y-8 sm:space-y-12 pb-8"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
      >
        <div className="space-y-4">
          <Badge className="bg-orange-100 text-orange-800 border-2 border-orange-300 px-4 py-2 rounded-full poppins-semibold">
            Professional Resume
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-black comic-title poppins-bold">
            Resume
          </h1>
          <div className="w-24 h-1 bg-orange-600 rounded-full"></div>
          <p className="text-gray-600 text-base sm:text-lg poppins-regular max-w-2xl">
            Comprehensive overview of my skills, experience, and qualifications as a Senior Frontend Developer
          </p>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0"
        >
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-600 gap-2 poppins-semibold hover-lift comic-shadow-blue"
          >
            <Download size={20} />
            <span className="hidden sm:inline">Download PDF Resume</span>
            <span className="sm:hidden">Download PDF</span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Resume Tabs */}
      <motion.div variants={itemVariants} className="space-y-6">
        <Tabs defaultValue="skills" className="w-full">
          {/* Tab Navigation */}
          <div className="sticky top-0 z-10 bg-gradient-to-br from-slate-50 to-blue-50 pb-4 mb-6 sm:mb-8">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 border-2 border-black comic-shadow bg-white h-auto p-1">
              <TabsTrigger 
                value="skills" 
                className="poppins-medium gap-1 sm:gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white flex flex-col sm:flex-row items-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm"
              >
                <Code size={14} className="sm:w-4 sm:h-4" />
                <span>Skills</span>
              </TabsTrigger>
              <TabsTrigger 
                value="experience" 
                className="poppins-medium gap-1 sm:gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white flex flex-col sm:flex-row items-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm"
              >
                <Briefcase size={14} className="sm:w-4 sm:h-4" />
                <span>Experience</span>
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="poppins-medium gap-1 sm:gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white flex flex-col sm:flex-row items-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm"
              >
                <GraduationCap size={14} className="sm:w-4 sm:h-4" />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger 
                value="certifications" 
                className="poppins-medium gap-1 sm:gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white flex flex-col sm:flex-row items-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm"
              >
                <Award size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Certifications</span>
                <span className="sm:hidden">Certs</span>
              </TabsTrigger>
              <TabsTrigger 
                value="achievements" 
                className="poppins-medium gap-1 sm:gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white flex flex-col sm:flex-row items-center py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm col-span-2 lg:col-span-1"
              >
                <Target size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Achievements</span>
                <span className="sm:hidden">Achievements</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content with proper spacing */}
          <div className="relative z-0">
            <TabsContent value="skills" className="space-y-6 sm:space-y-8 mt-0">
              {/* Technical Skills */}
              <Card className="border-2 border-gray-200 hover:border-blue-400 transition-colors comic-shadow bg-white">
                <CardHeader className="space-y-4">
                  <CardTitle className="flex items-center gap-3 text-black poppins-bold text-lg sm:text-xl">
                    <div className="p-2 bg-blue-100 rounded-full border-2 border-blue-300">
                      <Code size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    Technical Skills
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {skillCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={skillFilter === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSkillFilter(category.id)}
                        className={`border-2 border-black poppins-medium gap-1 sm:gap-2 transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                          skillFilter === category.id
                            ? 'bg-blue-500 text-white comic-shadow-blue hover:bg-blue-600'
                            : 'bg-white text-black comic-shadow hover:bg-gray-50 hover:scale-105'
                        }`}
                      >
                        <span>{category.icon}</span>
                        <span className="hidden sm:inline">{category.label}</span>
                        <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={skillFilter}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                    >
                      {filteredSkills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.3 }}
                          className="space-y-2 sm:space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-base sm:text-lg">{skill.icon}</span>
                              <span className="text-xs sm:text-sm text-black poppins-semibold truncate">{skill.name}</span>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-600 poppins-regular">{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <Progress 
                              value={skill.level} 
                              className="h-2 sm:h-3 border-2 border-gray-300 bg-gray-100"
                            />

                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </CardContent>
              </Card>

              {/* Soft Skills */}
              <Card className="border-2 border-gray-200 hover:border-blue-400 transition-colors comic-shadow bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-black poppins-bold text-lg sm:text-xl">
                    <div className="p-2 bg-blue-100 rounded-full border-2 border-blue-300">
                      <Zap size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="space-y-2 sm:space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-base sm:text-lg">{skill.icon}</span>
                            <span className="text-xs sm:text-sm text-black poppins-semibold">{skill.name}</span>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 poppins-regular">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2 sm:h-3 border-2 border-gray-300 bg-gray-100"
                          />

                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="border-2 border-gray-200 hover:border-green-400 transition-colors comic-shadow bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-black poppins-bold text-lg sm:text-xl">
                    <div className="p-2 bg-green-100 rounded-full border-2 border-green-300">
                      <Languages size={20} className="sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {languages.map((language, index) => (
                      <motion.div
                        key={language.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 sm:p-4 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all duration-300 comic-shadow"
                      >
                        <div className="text-xl sm:text-2xl mb-2">{language.flag}</div>
                        <p className="text-black poppins-bold text-xs sm:text-sm">{language.name}</p>
                        <p className="text-xs text-gray-600 poppins-regular">{language.level}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6 sm:space-y-8 mt-0">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow bg-white hover:shadow-lg">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 rounded-full border-2 border-blue-300">
                              <Briefcase size={18} className="sm:w-5 sm:h-5 text-blue-600" />
                            </div>
                            <CardTitle className="text-lg sm:text-xl text-black poppins-bold">{exp.title}</CardTitle>
                          </div>
                          <p className="text-blue-600 poppins-semibold text-base sm:text-lg">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span className="poppins-medium">{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span className="poppins-medium">{exp.location}</span>
                            </div>
                            <Badge variant="outline" className="border-2 border-gray-300 poppins-medium text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-xs sm:text-sm poppins-bold text-black flex items-center gap-2">
                          <CheckCircle size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 poppins-regular">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-xs sm:text-sm poppins-bold text-black flex items-center gap-2">
                          <TrendingUp size={14} className="sm:w-4 sm:h-4 text-green-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 poppins-regular">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-xs sm:text-sm poppins-bold text-black flex items-center gap-2">
                          <Code size={14} className="sm:w-4 sm:h-4 text-orange-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-2 border-gray-300 text-xs poppins-medium hover:border-blue-400 hover:bg-blue-50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="education" className="space-y-6 sm:space-y-8 mt-0">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow bg-white hover:shadow-lg">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-blue-100 rounded-full border-2 border-blue-300">
                          <GraduationCap size={24} className="sm:w-7 sm:h-7 text-blue-600" />
                        </div>
                        <div className="space-y-2">
                          <CardTitle className="text-lg sm:text-xl text-black poppins-bold">{edu.degree}</CardTitle>
                          <p className="text-blue-600 poppins-semibold text-base sm:text-lg">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <Badge className="border-2 border-black poppins-medium bg-blue-500 text-white text-xs sm:text-sm">
                          {edu.year}
                        </Badge>
                        <Badge variant="outline" className="border-2 border-green-400 text-green-700 poppins-medium text-xs sm:text-sm">
                          {edu.grade}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 poppins-regular">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="certifications" className="space-y-6 sm:space-y-8 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow bg-white hover:shadow-lg h-full">
                      <CardHeader className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 sm:p-3 bg-blue-100 rounded-full border-2 border-blue-300">
                            <span className="text-xl sm:text-2xl">{cert.logo}</span>
                          </div>
                          <div className="space-y-1">
                            <CardTitle className="text-sm sm:text-lg text-black poppins-bold leading-tight">
                              {cert.name}
                            </CardTitle>
                            <p className="text-blue-600 poppins-semibold text-xs sm:text-sm">{cert.issuer}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className="border-2 border-black poppins-medium bg-blue-500 text-white text-xs sm:text-sm">
                            {cert.year}
                          </Badge>
                          <p className="text-xs text-gray-500 poppins-regular">
                            ID: {cert.credentialId}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs sm:text-sm poppins-bold text-black">Skills Covered:</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className="border-2 border-gray-300 text-xs poppins-regular hover:border-blue-400 hover:bg-blue-50 transition-colors"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6 sm:space-y-8 mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow bg-white hover:shadow-lg h-full">
                      <CardHeader className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 sm:p-3 bg-blue-100 rounded-full border-2 border-blue-300">
                            <span className="text-xl sm:text-2xl">{achievement.icon}</span>
                          </div>
                          <Badge variant="outline" className="border-2 border-blue-400 text-blue-700 poppins-medium text-xs">
                            {achievement.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm sm:text-base text-black poppins-bold leading-tight">
                          {achievement.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs sm:text-sm text-gray-600 poppins-regular leading-relaxed">
                          {achievement.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}