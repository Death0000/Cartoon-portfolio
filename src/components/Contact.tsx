'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react'
import { toast } from "sonner"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast("Message sent successfully! I'll get back to you soon.")
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prathik.p@example.com',
      href: 'mailto:prathik.p@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, Karnataka, India',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/prathikp',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/prathikp',
      color: 'text-gray-800'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/prathikp',
      color: 'text-blue-400'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl text-black mb-4 comic-title poppins-bold border-b-4 border-black pb-2 inline-block">
          Get In Touch
        </h1>
        <p className="text-gray-700 text-lg poppins-regular">
          Let's discuss your next project or collaboration opportunity
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="lg:col-span-2"
        >
          <Card className="border-3 border-black comic-shadow bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-black poppins-semibold">
                <Send size={24} />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-black poppins-medium">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-black focus:ring-blue-500 focus:border-blue-500 poppins-regular"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black poppins-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-2 border-black focus:ring-blue-500 focus:border-blue-500 poppins-regular"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-black poppins-medium">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-black focus:ring-blue-500 focus:border-blue-500 poppins-regular"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-black poppins-medium">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-2 border-black focus:ring-blue-500 focus:border-blue-500 resize-none poppins-regular"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full border-3 border-black comic-shadow-blue bg-blue-500 hover:bg-blue-600 text-white hover-lift poppins-semibold"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          {/* Contact Details */}
          <Card className="border-3 border-black comic-shadow bg-white">
            <CardHeader>
              <CardTitle className="text-black poppins-semibold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group"
                  >
                    <IconComponent size={20} className="text-blue-500 group-hover:text-blue-600" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide poppins-medium">{info.label}</p>
                      <p className="text-sm text-black poppins-regular">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-3 border-black comic-shadow bg-white">
            <CardHeader>
              <CardTitle className="text-black poppins-semibold">Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 border-2 border-black rounded-lg comic-shadow hover-lift bg-white hover:bg-gray-50 ${social.color}`}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}