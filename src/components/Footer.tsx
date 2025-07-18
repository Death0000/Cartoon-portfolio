'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/patansahilkhan', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rehan-ghanchi-586463227/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/patansahilkhan', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/patansahilkhan', label: 'Twitter' }
  ]

  return (
    <footer className="border-t-4 border-black bg-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Separator line */}
        <div className="w-32 h-1 bg-black mb-6"></div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-black hover:text-blue-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent size={24} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-black text-sm poppins-regular"
            style={{ fontFamily: 'cursive, Poppins' }}
          >
            © {currentYear} Designed And Developed By - Rehan Ghanchi
          </motion.p>
        </div>
      </div>
    </footer>
  )
}