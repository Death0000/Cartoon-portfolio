'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ExternalLink, Github, Star, Users, Calendar, Award, TrendingUp, Code2, Smartphone, Globe, Zap } from 'lucide-react'

export function Portfolio() {
  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: 'EcoMart - E-Commerce Platform',
      description: 'Full-featured e-commerce platform with advanced search, real-time inventory, payment integration, and admin dashboard. Built for sustainable products marketplace with 10K+ active users.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind', 'Stripe', 'Redux'],
      category: 'web',
      liveUrl: 'https://ecomart-demo.vercel.app',
      githubUrl: 'https://github.com/patansahilkhan/ecomart',
      stats: { users: '10K+', rating: 4.8, duration: '6 months' },
      featured: true,
      icon: Globe,
      highlights: ['Real-time inventory', 'Payment integration', 'Admin dashboard']
    },
    {
      title: 'DataViz Pro - Analytics Dashboard',
      description: 'Enterprise analytics dashboard with real-time data visualization, custom reports, and team collaboration features. Processes 1M+ data points daily with sub-second response times.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['Next.js', 'Chart.js', 'PostgreSQL', 'WebSocket', 'Docker'],
      category: 'web',
      liveUrl: 'https://dataviz-pro.example.com',
      githubUrl: 'https://github.com/patansahilkhan/dataviz-pro',
      stats: { users: '500+', rating: 4.9, duration: '8 months' },
      featured: true,
      icon: TrendingUp,
      highlights: ['Real-time data viz', 'Custom reports', 'Team collaboration']
    },
    {
      title: 'ConnectSphere - Social Media App',
      description: 'Modern social platform with real-time messaging, story features, content discovery, and advanced privacy controls. Built with React Native for cross-platform compatibility.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tags: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
      category: 'mobile',
      liveUrl: 'https://connectsphere.app',
      githubUrl: 'https://github.com/patansahilkhan/connectsphere',
      stats: { users: '25K+', rating: 4.7, duration: '12 months' },
      featured: true,
      icon: Smartphone,
      highlights: ['Real-time messaging', 'Story features', 'Cross-platform']
    },
    {
      title: 'Portfolio Studio',
      description: 'Responsive portfolio website with anime-inspired design, smooth animations, and interactive elements. Features dark/light mode and multi-language support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tags: ['React', 'Framer Motion', 'Tailwind', 'ShadCN'],
      category: 'web',
      liveUrl: 'https://portfolio-studio.dev',
      githubUrl: 'https://github.com/patansahilkhan/portfolio-studio',
      stats: { users: '2K+', rating: 4.9, duration: '2 months' },
      featured: false,
      icon: Code2,
      highlights: ['Anime-inspired design', 'Smooth animations', 'Multi-language']
    },
    {
      title: 'TaskFlow - Project Management',
      description: 'Collaborative project management tool with Kanban boards, time tracking, team chat, and automated reporting. Supports agile workflows and integrates with popular dev tools.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tags: ['Vue.js', 'Vuex', 'Firebase', 'PWA', 'WebRTC'],
      category: 'web',
      liveUrl: 'https://taskflow.pro',
      githubUrl: 'https://github.com/patansahilkhan/taskflow',
      stats: { users: '5K+', rating: 4.6, duration: '10 months' },
      featured: false,
      icon: Users,
      highlights: ['Kanban boards', 'Time tracking', 'Team chat']
    },
    {
      title: 'WeatherWise - Weather App',
      description: 'Beautiful weather application with location-based forecasts, weather maps, severe weather alerts, and historical data. Features offline support and widget customization.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
      tags: ['React', 'OpenWeather API', 'PWA', 'Offline Support'],
      category: 'mobile',
      liveUrl: 'https://weatherwise.app',
      githubUrl: 'https://github.com/patansahilkhan/weatherwise',
      stats: { users: '15K+', rating: 4.5, duration: '3 months' },
      featured: false,
      icon: Globe,
      highlights: ['Location-based forecasts', 'Weather maps', 'Offline support']
    },
    {
      title: 'CryptoTracker Pro',
      description: 'Real-time cryptocurrency tracking app with portfolio management, price alerts, news aggregation, and technical analysis tools. Supports 1000+ cryptocurrencies.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      tags: ['React', 'WebSocket', 'Chart.js', 'CoinGecko API'],
      category: 'web',
      liveUrl: 'https://cryptotracker-pro.app',
      githubUrl: 'https://github.com/patansahilkhan/cryptotracker',
      stats: { users: '8K+', rating: 4.4, duration: '4 months' },
      featured: false,
      icon: TrendingUp,
      highlights: ['Real-time tracking', 'Portfolio management', 'Price alerts']
    },
    {
      title: 'FitnessHub - Health Tracker',
      description: 'Comprehensive fitness tracking mobile app with workout plans, nutrition tracking, progress analytics, and social challenges. Integrates with wearable devices.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      tags: ['React Native', 'HealthKit', 'Firebase', 'ML Kit'],
      category: 'mobile',
      liveUrl: 'https://fitnesshub.health',
      githubUrl: 'https://github.com/patansahilkhan/fitnesshub',
      stats: { users: '12K+', rating: 4.7, duration: '9 months' },
      featured: false,
      icon: Zap,
      highlights: ['Workout plans', 'Nutrition tracking', 'Wearable integration']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length, icon: Globe },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length, icon: Code2 },
    { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length, icon: Smartphone },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length, icon: Star }
  ]

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true
    if (filter === 'featured') return project.featured
    return project.category === filter
  })

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
          <Badge className="bg-purple-100 text-purple-800 border-2 border-purple-300 px-4 py-2 rounded-full poppins-semibold">
            Portfolio Showcase
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black comic-title poppins-bold">
            My Work
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed poppins-regular max-w-4xl mx-auto">
          A showcase of projects that demonstrate my expertise in frontend development, 
          from simple landing pages to complex enterprise applications serving thousands of users.
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-2 border-blue-200 bg-blue-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-blue-600">50+</div>
          <div className="text-sm text-blue-700 poppins-medium">Projects</div>
        </Card>
        <Card className="border-2 border-green-200 bg-green-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-green-600">75K+</div>
          <div className="text-sm text-green-700 poppins-medium">Users</div>
        </Card>
        <Card className="border-2 border-yellow-200 bg-yellow-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-yellow-600">4.7</div>
          <div className="text-sm text-yellow-700 poppins-medium">Avg Rating</div>
        </Card>
        <Card className="border-2 border-purple-200 bg-purple-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-purple-600">4+</div>
          <div className="text-sm text-purple-700 poppins-medium">Years</div>
        </Card>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`border-2 border-black poppins-semibold gap-2 px-4 py-2 transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-500 text-white comic-shadow-blue hover:bg-blue-600'
                  : 'bg-white text-black comic-shadow hover:bg-gray-50 hover:scale-105'
              }`}
            >
              <IconComponent size={16} />
              {category.label} 
              <Badge 
                variant="secondary" 
                className="ml-1 text-xs border border-gray-300"
              >
                {category.count}
              </Badge>
            </Button>
          )
        })}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={`${filter}-${index}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 comic-shadow hover:shadow-lg bg-white overflow-hidden">
                  <div className="relative">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-yellow-400 text-black border-2 border-yellow-600 poppins-bold gap-1">
                          <Star size={12} fill="currentColor" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 backdrop-blur-sm border-2 border-gray-800 hover:bg-white text-gray-800 comic-shadow"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 backdrop-blur-sm border-2 border-gray-800 hover:bg-white text-gray-800 comic-shadow"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github size={14} />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full border-2 border-blue-300">
                        <IconComponent size={20} className="text-blue-600" />
                      </div>
                      <CardTitle className="text-lg text-black poppins-bold group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed poppins-regular">
                      {project.description}
                    </p>
                    
                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-xs poppins-semibold text-gray-800 flex items-center gap-1">
                        <Award size={12} className="text-orange-500" />
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            <span className="text-xs text-gray-600 poppins-regular">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 py-3 border-t border-gray-200">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                          <Users size={12} className="text-blue-500" />
                          <span className="poppins-semibold">{project.stats.users}</span>
                        </div>
                        <div className="text-xs text-gray-500 poppins-regular">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                          <Star size={12} className="text-yellow-500" />
                          <span className="poppins-semibold">{project.stats.rating}</span>
                        </div>
                        <div className="text-xs text-gray-500 poppins-regular">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                          <Calendar size={12} className="text-green-500" />
                          <span className="poppins-semibold">{project.stats.duration}</span>
                        </div>
                        <div className="text-xs text-gray-500 poppins-regular">Duration</div>
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-xs poppins-semibold text-gray-800">Tech Stack</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="border border-gray-300 text-xs poppins-medium hover:border-blue-400 hover:bg-blue-50 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Call to Action */}
      <motion.div
        variants={itemVariants}
        className="text-center space-y-6"
      >
        <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 comic-shadow rounded-2xl">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto border-2 border-blue-300">
              <Award size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl lg:text-3xl poppins-bold text-black">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 poppins-regular max-w-2xl mx-auto">
              I'm always excited to work on new projects and bring creative ideas to life. 
              Let's collaborate and create something extraordinary together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-600 gap-2 poppins-semibold hover-lift comic-shadow-blue"
              >
                <ExternalLink size={18} />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-gray-50 gap-2 poppins-semibold hover-lift comic-shadow"
              >
                <Github size={18} />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}