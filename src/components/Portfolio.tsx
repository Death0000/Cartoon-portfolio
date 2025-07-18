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
      title: 'MWM Portal – Enterprise AVD Management',
      description: 'Designed and developed the Modern Workplace Management (MWM) Portal for centralized provisioning, configuration, and lifecycle management of Azure Virtual Desktops (AVDs) for thousands of users. Automated AVD deployment, session host scaling, and resource clean-up using Azure APIs and PowerShell scripts. Streamlined user onboarding, application assignment, and policy enforcement, delivering a user-friendly interface for administrators.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      tags: ['Azure', 'PowerShell', 'AVD', 'Automation'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: '1000+', rating: 4.9, duration: 'Ongoing' },
      featured: true,
      icon: Globe,
      highlights: ['Centralized AVD management', 'Automated scaling', 'User-friendly admin interface']
    },
    {
      title: 'Self-Service Multi-Cloud Management App',
      description: 'Built a self-help application enabling customers to provision, configure, and decommission VMs/instances across Azure, AWS, and OCI. Reduced operational overhead and accelerated resource delivery through automation.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tags: ['Azure', 'AWS', 'OCI', 'Automation'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: '500+', rating: 4.8, duration: 'Ongoing' },
      featured: true,
      icon: TrendingUp,
      highlights: ['Multi-cloud provisioning', 'Self-service portal', 'Rapid resource delivery']
    },
    {
      title: 'Multi-Cloud Automation with GitHub Actions & Terraform',
      description: 'Implemented CI/CD pipelines using GitHub Actions to deploy and manage infrastructure across AWS, Azure, and GCP with Terraform. Achieved consistent, centralized automation and access control by integrating GitHub with multiple cloud platforms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['GitHub Actions', 'Terraform', 'AWS', 'Azure', 'GCP'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.9, duration: 'Ongoing' },
      featured: true,
      icon: Code2,
      highlights: ['CI/CD pipelines', 'Multi-cloud automation', 'Centralized access control']
    },
    {
      title: 'Self-Hosted GitHub Runners on Kubernetes',
      description: 'Deployed GitHub self-hosted runners on Amazon EKS and Azure AKS clusters to execute automation scripts at scale. Optimized performance and cost for large-scale automation workloads.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
      tags: ['GitHub Runners', 'Kubernetes', 'EKS', 'AKS'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.8, duration: 'Ongoing' },
      featured: false,
      icon: Users,
      highlights: ['Self-hosted runners', 'Kubernetes integration', 'Cost optimization']
    },
    {
      title: 'Auto Start/Stop of Cloud Resources Based on Tags',
      description: 'Developed serverless solutions (Azure Functions, AWS Lambda) to automatically start and stop resources (Azure VMs, EC2) using tag-based logic. Scheduled operations to optimize cost savings and ensure compliance with usage policies.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop',
      tags: ['Azure Functions', 'AWS Lambda', 'Serverless', 'Automation'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.7, duration: 'Ongoing' },
      featured: false,
      icon: Zap,
      highlights: ['Tag-based automation', 'Serverless scheduling', 'Cost savings']
    },
    {
      title: 'Cloud Landing Zone Automation',
      description: 'Created Terraform-based landing zone frameworks for secure, scalable onboarding of cloud tenants. Included network segmentation, logging, IAM roles, and guardrails for compliance and security.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
      tags: ['Terraform', 'Landing Zone', 'Security', 'IAM'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.8, duration: 'Ongoing' },
      featured: false,
      icon: Star,
      highlights: ['Landing zone automation', 'Network segmentation', 'Security guardrails']
    },
    {
      title: 'Monitoring, Logging, and Custom Metrics',
      description: 'Engineered solutions for collecting CloudWatch custom logs and memory metrics from Windows Servers. Integrated monitoring into automation workflows for real-time visibility and proactive alerts.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      tags: ['CloudWatch', 'Monitoring', 'Logging', 'Automation'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.7, duration: 'Ongoing' },
      featured: false,
      icon: Award,
      highlights: ['Custom metrics', 'Real-time monitoring', 'Proactive alerts']
    },
    {
      title: 'Security, Compliance & Penetration Testing',
      description: 'Conducted Vulnerability and Penetration Testing (VPAT) in AWS environments to identify and resolve security gaps. Applied cloud security best practices for IAM, network access, and data encryption. Managed security configurations for Azure services such as Key Vault, Cosmos DB, and Storage Accounts.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      tags: ['Security', 'Penetration Testing', 'IAM', 'Azure', 'AWS'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.8, duration: 'Ongoing' },
      featured: false,
      icon: Code2,
      highlights: ['VPAT', 'Cloud security', 'Encryption best practices']
    },
    {
      title: 'WordPress Multisite Application on AWS',
      description: 'Designed and deployed a highly scalable WordPress multisite infrastructure on AWS using CloudFormation templates. Configured EC2 instances in an Auto Scaling Group behind an Application Load Balancer (ALB) for optimized performance and availability. Migrated MySQL databases to Amazon RDS, ensuring high availability and reliability. Managed millions of images in Amazon S3 with CloudFront integration for secure, low-latency delivery. Designed and deployed VPCs with public/private subnets, routing tables, and NAT Gateways. Migrated 16 Classic EC2 instances to VPC-based architecture with minimal downtime. Deployed Elastic File System (EFS) for scalable shared storage and migrated legacy data to new RDS instances.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tags: ['AWS', 'CloudFormation', 'EC2', 'RDS', 'S3', 'CloudFront'],
      category: 'web',
      liveUrl: '',
      githubUrl: '',
      stats: { users: 'N/A', rating: 4.9, duration: 'Ongoing' },
      featured: false,
      icon: Globe,
      highlights: ['Scalable WordPress', 'Auto Scaling', 'Cloud migration']
    }
  ]

  const categories = [
    { id: 'all', label: 'All Cloud Projects', count: projects.length, icon: Globe },
    { id: 'iac', label: 'Infrastructure as Code', count: projects.filter(p => p.tags.includes('Terraform')).length, icon: Code2 },
    { id: 'serverless', label: 'Serverless Automation', count: projects.filter(p => p.tags.includes('Serverless') || p.tags.includes('Lambda') || p.tags.includes('Azure Functions')).length, icon: Zap },
    { id: 'multi-cloud', label: 'Multi-Cloud Integrations', count: projects.filter(p => p.tags.includes('Azure') && p.tags.includes('AWS')).length, icon: TrendingUp },
    { id: 'security', label: 'Cloud Security', count: projects.filter(p => p.tags.includes('Security')).length, icon: Award },
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
            Cloud Solutions Portfolio
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black comic-title poppins-bold">
            Infrastructure as Code (IaC) Projects
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed poppins-regular max-w-4xl mx-auto">
          Explore my cloud engineering case studies, featuring multi-cloud automation, serverless computing, CI/CD pipeline automation, and secure cloud architecture across Azure, AWS, and OCI.
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card className="border-2 border-blue-200 bg-blue-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-blue-600">20+</div>
          <div className="text-sm text-blue-700 poppins-medium">Cloud Deployments</div>
        </Card>
        <Card className="border-2 border-green-200 bg-green-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-green-600">1000+</div>
          <div className="text-sm text-green-700 poppins-medium">Automated Workflows</div>
        </Card>
        <Card className="border-2 border-yellow-200 bg-yellow-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-yellow-600">4.9</div>
          <div className="text-sm text-yellow-700 poppins-medium">Cloud Security Rating</div>
        </Card>
        <Card className="border-2 border-purple-200 bg-purple-50 text-center p-4 comic-shadow">
          <div className="text-2xl poppins-bold text-purple-600">4+</div>
          <div className="text-sm text-purple-700 poppins-medium">Years Multi-Cloud Exp</div>
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