'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Separator } from './ui/separator'
import { Download, MapPin, Calendar, Code2, Star, Award, Users, Briefcase, ArrowRight, Play, ExternalLink } from 'lucide-react'

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const typingTexts = [
    "Frontend Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Team Leader"
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % typingTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Calendar, value: "4+", label: "Years Experience", color: "text-blue-500" },
    { icon: Award, value: "50+", label: "Projects Completed", color: "text-green-500" },
    { icon: Users, value: "8+", label: "Team Members Led", color: "text-purple-500" },
    { icon: Star, value: "4.9", label: "Client Rating", color: "text-yellow-500" }
  ]

  const achievements = [
    "Led 5+ frontend developers in enterprise projects",
    "Improved deployment speed by 60% with micro-frontends",
    "Built reusable component library for 15+ projects",
    "Reduced bugs by 40% with automated testing"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  return (
    <div className="min-h-full flex items-center justify-center py-8 lg:py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Badge className="bg-green-100 text-green-800 border-2 border-green-400 px-4 py-2 rounded-full gap-2 poppins-semibold">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for Hire
              </Badge>
            </motion.div>

            {/* Main Title */}
            <div className="text-center lg:text-left space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-blue-600 poppins-semibold text-sm uppercase tracking-wider"
              >
                Welcome to my portfolio
              </motion.p>
              
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl text-black comic-title poppins-extrabold leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-blue-600 relative">
                  Sahil p
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>
              
              {/* Animated Job Title */}
              <motion.div
                variants={itemVariants}
                className="h-16 flex items-center justify-center lg:justify-start"
              >
                <motion.h2
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 poppins-bold"
                >
                  {typingTexts[currentText]}
                </motion.h2>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed poppins-regular max-w-2xl text-center lg:text-left"
            >
              Passionate Frontend Developer with 4+ years of experience creating stunning, 
              responsive web applications. I specialize in React, TypeScript, and modern web 
              technologies, leading teams to deliver exceptional user experiences.
            </motion.p>

            {/* Key Achievements */}
            <motion.div
              variants={itemVariants}
              className="space-y-3"
            >
              <h3 className="text-lg poppins-semibold text-gray-800 text-center lg:text-left">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm poppins-regular">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 gap-2 poppins-semibold hover-lift comic-shadow-blue group"
              >
                <Download size={18} />
                Download Resume
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-gray-50 gap-2 poppins-semibold hover-lift comic-shadow group"
              >
                <Play size={18} />
                View My Work
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Location & Contact */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-500" />
                <span className="poppins-medium">Bangalore, India</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <Briefcase size={16} className="text-blue-500" />
                <span className="poppins-medium">Open to Remote</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile & Stats Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <motion.div
              className="relative mx-auto lg:mx-0 w-fit"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Layers */}
              <div className="absolute -inset-4 bg-blue-400 rounded-xl transform rotate-3"></div>
              <div className="absolute -inset-2 bg-blue-300 rounded-xl transform -rotate-2"></div>
              
              {/* Main Frame */}
              <div className="relative bg-white p-1 rounded-xl comic-shadow-blue border-4 border-black">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=400&fit=crop&crop=face"
                    alt="Patan sahil khan - Frontend Developer"
                    className="w-72 h-80 object-cover rounded-lg border-2 border-gray-300"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full border-3 border-black comic-shadow"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-6 h-6 bg-red-400 rounded-full border-3 border-black comic-shadow"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow bg-white">
                      <CardContent className="p-4 text-center">
                        <IconComponent size={20} className={`mx-auto mb-2 ${stat.color}`} />
                        <p className="text-2xl poppins-bold text-black">{stat.value}</p>
                        <p className="text-xs text-gray-600 poppins-medium">{stat.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-200 rounded-lg comic-shadow">
                <p className="text-3xl text-black italic poppins-semibold mb-2" style={{ fontFamily: 'cursive, Poppins' }}>
                  -Patan sahil khan
                </p>
                <p className="text-xs text-gray-600 poppins-regular">
                  "Crafting digital experiences with passion"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}