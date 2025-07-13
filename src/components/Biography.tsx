'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { Calendar, MapPin, Award, GraduationCap, Briefcase, Heart, Code, Users, TrendingUp, Target, Coffee, Gamepad2 } from 'lucide-react'

export function Biography() {
  const timelineItems = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Bangalore',
      description: 'Leading a team of 5 frontend developers, architecting scalable React applications for enterprise clients. Implemented micro-frontend architecture that improved deployment speed by 60%. Mentoring junior developers and establishing coding standards across multiple product teams.',
      location: 'Bangalore, India',
      type: 'work',
      skills: ['React', 'TypeScript', 'Micro-frontends', 'Team Leadership', 'Architecture'],
      achievements: ['60% deployment speed improvement', 'Led team of 5 developers', 'Established coding standards']
    },
    {
      year: '2023',
      title: 'Frontend Team Lead',
      company: 'Digital Innovation Lab',
      description: 'Promoted to team lead role, managing frontend development for 3 major client projects simultaneously. Introduced automated testing practices that reduced bugs by 40%. Built reusable component library used across 15+ projects.',
      location: 'Bangalore, India',
      type: 'work',
      skills: ['Vue.js', 'Testing', 'Component Library', 'Project Management', 'Agile'],
      achievements: ['40% bug reduction', 'Component library for 15+ projects', 'Managed 3 major projects']
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Digital Innovation Lab',
      description: 'Developed responsive web applications and collaborated with UX teams to create exceptional user experiences. Specialized in React and Vue.js development, working on e-commerce and fintech applications with focus on performance optimization.',
      location: 'Bangalore, India',
      type: 'work',
      skills: ['React', 'Vue.js', 'E-commerce', 'Fintech', 'Performance Optimization'],
      achievements: ['Built 20+ responsive applications', 'Optimized performance by 35%', 'UX collaboration']
    },
    {
      year: '2021',
      title: 'Bachelor of Computer Science',
      company: 'Indian Institute of Technology',
      description: 'Graduated with honors (CGPA: 8.7/10), specializing in web technologies and software engineering principles. Final year project: "Real-time Collaborative Code Editor" built with React and WebSocket technology.',
      location: 'Karnataka, India',
      type: 'education',
      skills: ['Computer Science', 'Web Technologies', 'Software Engineering', 'Data Structures'],
      achievements: ['CGPA: 8.7/10', 'Graduated with honors', 'Real-time collaborative project']
    },
    {
      year: '2020-2021',
      title: 'Freelance Web Developer',
      company: 'Independent',
      description: 'Built custom websites for 15+ small businesses and startups while completing my degree. Gained expertise in full-stack development, client communication, and project management. Maintained 4.9/5 average project rating.',
      location: 'Remote',
      type: 'work',
      skills: ['Full-stack', 'Client Relations', 'WordPress', 'PHP', 'Project Management'],
      achievements: ['15+ successful projects', '4.9/5 client rating', 'Full-stack expertise']
    },
    {
      year: '2019',
      title: 'Web Development Internship',
      company: 'StartupTech Incubator',
      description: 'First professional experience as a frontend developer intern. Worked on landing pages and marketing websites for 5 different startups. Learned modern development workflows, version control, and professional coding practices.',
      location: 'Bangalore, India',
      type: 'work',
      skills: ['HTML/CSS', 'JavaScript', 'Git', 'Responsive Design', 'Modern Workflows'],
      achievements: ['5 startup projects', 'Modern workflow adoption', 'Professional coding practices']
    }
  ]

  const personalInfo = [
    { 
      icon: Heart, 
      label: 'Interests', 
      value: 'Photography, Anime, Gaming, Traveling',
      description: 'Creative pursuits and exploration',
      color: 'bg-red-50 border-red-200 text-red-700'
    },
    { 
      icon: Code, 
      label: 'Coding Since', 
      value: '2018 (6+ years)',
      description: 'Continuous learning and growth',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    { 
      icon: Users, 
      label: 'Team Size Managed', 
      value: 'Up to 8 developers',
      description: 'Leadership and mentoring experience',
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    { 
      icon: Award, 
      label: 'Projects Completed', 
      value: '50+ professional projects',
      description: 'Diverse industry experience',
      color: 'bg-purple-50 border-purple-200 text-purple-700'
    }
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
      className="max-w-7xl mx-auto space-y-12"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-center space-y-6">
        <div className="space-y-4">
          <Badge className="bg-blue-100 text-blue-800 border-2 border-blue-300 px-4 py-2 rounded-full poppins-semibold">
            Professional Journey
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black comic-title poppins-bold">
            My Journey
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed poppins-regular max-w-4xl mx-auto">
          From a curious student learning HTML/CSS to a senior frontend developer leading teams and 
          building enterprise applications. Here's my professional and educational journey that shaped 
          who I am today.
        </p>
      </motion.div>

      {/* Personal Info Cards */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {personalInfo.map((info, index) => {
          const IconComponent = info.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className={`border-2 comic-shadow hover-lift bg-white transition-all duration-300 group-hover:shadow-lg ${info.color}`}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white border-2 border-gray-200 group-hover:scale-110 transition-transform">
                      <IconComponent size={28} className="text-gray-700" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wide poppins-semibold text-gray-500">
                      {info.label}
                    </p>
                    <p className="text-lg poppins-bold text-black">
                      {info.value}
                    </p>
                    <p className="text-xs text-gray-600 poppins-regular">
                      {info.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Timeline Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl text-black poppins-bold">Professional Timeline</h2>
          <p className="text-gray-600 poppins-regular">A detailed look at my career progression and achievements</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 border-4 border-white rounded-full hidden lg:block z-10 shadow-lg ${
                  item.type === 'work' 
                    ? 'bg-blue-500 group-hover:bg-blue-600' 
                    : 'bg-green-500 group-hover:bg-green-600'
                } transition-colors`}></div>
                
                <Card className="ml-0 lg:ml-20 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow hover-lift bg-white group-hover:shadow-lg">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-black poppins-bold group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            {item.type === 'work' ? <Briefcase size={16} className="text-blue-500" /> : <GraduationCap size={16} className="text-green-500" />}
                            <span className="poppins-semibold">{item.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="poppins-regular">{item.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={item.type === 'work' ? 'default' : 'secondary'}
                        className="w-fit border-2 border-gray-300 poppins-bold text-sm px-3 py-1 group-hover:border-blue-400 transition-colors"
                      >
                        {item.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-700 poppins-regular leading-relaxed">{item.description}</p>
                    
                    {/* Key Achievements */}
                    <div className="space-y-3">
                      <h4 className="text-sm poppins-semibold text-gray-800 flex items-center gap-2">
                        <TrendingUp size={16} className="text-green-500" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 poppins-regular">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="space-y-3">
                      <h4 className="text-sm poppins-semibold text-gray-800 flex items-center gap-2">
                        <Target size={16} className="text-blue-500" />
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="border-2 border-gray-300 text-xs poppins-medium hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group-hover:border-blue-300"
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
        </div>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        variants={itemVariants}
        className="text-center space-y-6"
      >
        <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 comic-shadow rounded-2xl">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto border-2 border-blue-300">
              <Coffee size={32} className="text-blue-600" />
            </div>
            <blockquote className="text-xl lg:text-2xl italic text-gray-800 poppins-medium leading-relaxed">
              "Code is like humor. When you have to explain it, it's bad. I strive to write code 
              that speaks for itself and creates experiences that users love."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <Separator className="flex-1 max-w-24" />
              <cite className="text-lg text-black poppins-bold">Prathik P</cite>
              <Separator className="flex-1 max-w-24" />
            </div>
            <p className="text-sm text-gray-600 poppins-regular">
              Senior Frontend Developer & Team Lead
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}