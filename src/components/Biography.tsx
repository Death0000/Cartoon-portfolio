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
      year: '2022-2025',
      title: 'Senior Cloud Engineer',
      company: 'Dhruthzuci Tech solutions pvt Ltd',
      description: 'Lead infrastructure automation, multi-cloud integration, and self-service cloud management solutions. Designed and developed the MWM Portal for Azure Virtual Desktops, built multi-cloud automation with Terraform and GitHub Actions, and engineered cost-saving automation for cloud resources.',
      location: 'Bangalore, India',
      type: 'work',
      skills: ['Azure', 'AWS', 'OCI', 'Terraform', 'GitHub Actions', 'Python', 'PowerShell'],
      achievements: ['Automated AVD management', 'Multi-cloud CI/CD', 'Cost optimization']
    },
    {
      year: '2021-2022',
      title: 'Support Engineer',
      company: 'Cloud Champions Ventures',
      description: 'Provided technical support and guidance on AWS platform, designed and deployed scalable cloud infrastructure, and assisted students in practical AWS labs.',
      location: 'Remote',
      type: 'work',
      skills: ['AWS', 'EC2', 'VPC', 'RDS', 'CloudFront'],
      achievements: ['Deployed scalable AWS infra', 'Student mentoring', 'Hands-on AWS labs']
    },
    {
      year: '2019-2021',
      title: 'Bachelor of Commerce (E-Commerce)',
      company: 'Dr. Babasaheb Ambedkar University',
      description: 'Graduated with a focus on E-Commerce and cloud technology fundamentals.',
      location: 'Aurangabad, India',
      type: 'education',
      skills: ['E-Commerce', 'Cloud Fundamentals'],
      achievements: ['Degree completed', 'Cloud fundamentals']
    },
    {
      year: '2018',
      title: 'Higher Secondary Education',
      company: 'Rashtramata College, Jalna',
      description: 'Completed 12th Grade with a focus on science and technology.',
      location: 'Jalna, India',
      type: 'education',
      skills: ['Science', 'Technology'],
      achievements: ['12th Grade completed']
    }
  ]

  const personalInfo = [
    { 
      icon: Heart, 
      label: 'Interests', 
      value: 'Cloud Automation, Scripting, Tech Blogging, Cricket',
      description: 'Innovation and continuous learning',
      color: 'bg-red-50 border-red-200 text-red-700'
    },
    { 
      icon: Code, 
      label: 'Cloud Experience', 
      value: '4+ years',
      description: 'Multi-cloud hands-on expertise',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    { 
      icon: Users, 
      label: 'Users Impacted', 
      value: '1000+',
      description: 'Enterprise-scale automation',
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    { 
      icon: Award, 
      label: 'Cloud Projects', 
      value: '20+',
      description: 'Multi-cloud, automation, security',
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
          From a passionate cloud enthusiast to a Senior Cloud Engineer automating multi-cloud infrastructure and driving efficiency at scale. Here’s my professional and educational journey in the world of cloud technology.
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
              <cite className="text-lg text-black poppins-bold">Rehan Ghanchi</cite>
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