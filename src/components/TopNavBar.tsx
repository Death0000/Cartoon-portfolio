'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Share2, Copy, Mail, MessageSquare, ChevronDown, MoreHorizontal, Linkedin, Github } from 'lucide-react'
import { toast } from "sonner"

interface TopNavBarProps {
  activeSection?: string
  screenSize?: string
}

export function TopNavBar({ activeSection = 'home', screenSize = 'desktop' }: TopNavBarProps) {
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  // Track window width for responsive behavior
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isSmallMobile = windowWidth < 480

  const shareOptions = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      action: () => 
        window.open('https://www.linkedin.com/in/rehan-ghanchi-586463227/', '_blank')
    },
    {
      icon: Github,
      label: 'GitHub',
      action: () => {
        window.open('https://github.com/rehanghanchi', '_blank')
        setIsShareOpen(false)
      }
    },
    {
      icon: MessageSquare,
      label: 'Share Portfolio',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Rehan Ghanchi - Frontend Developer',
            text: 'Check out this amazing portfolio!',
            url: window.location.href,
          })
        } else {
          navigator.clipboard.writeText(window.location.href)
          toast("Portfolio link copied to clipboard!")
        }
        setIsShareOpen(false)
      }
    }
  ]

  const getSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      home: 'Frontend Developer Portfolio',
      biography: 'My Journey & Biography',
      portfolio: 'Portfolio & Projects',
      resume: 'Resume & Skills',
      contact: 'Contact Information'
    }
    return titles[section] || 'Frontend Developer Portfolio'
  }

  const getShortTitle = (section: string) => {
    const shortTitles: Record<string, string> = {
      home: 'Portfolio',
      biography: 'Biography',
      portfolio: 'Projects',
      resume: 'Resume',
      contact: 'Contact'
    }
    return shortTitles[section] || 'Portfolio'
  }

  return (
    <div className="bg-white border-b-4 border-black shadow-lg relative z-40">
      <div className={`${
        isMobile ? 'px-3 py-3' : isTablet ? 'px-4 py-3' : 'px-4 lg:px-6 py-4'
      }`}>
        <div className="flex justify-between items-center max-w-none">
          {/* Left side - Current section */}
          <div className="flex-1 min-w-0 mr-2 sm:mr-4">
            <motion.h2 
              key={activeSection}
              className={`${
                isSmallMobile 
                  ? 'text-sm' 
                  : isMobile 
                    ? 'text-base' 
                    : isTablet 
                      ? 'text-lg' 
                      : 'text-lg lg:text-xl'
              } poppins-semibold text-black truncate`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobile ? getShortTitle(activeSection) : getSectionTitle(activeSection)}
            </motion.h2>

          </div>

          {/* Right side - Share My Work */}
          <div className="relative flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={() => setIsShareOpen(!isShareOpen)}
                className={`border-3 border-black comic-shadow-blue bg-blue-500 hover:bg-blue-600 text-white gap-2 poppins-semibold ${
                  isSmallMobile 
                    ? 'h-8 px-2 text-xs' 
                    : isMobile 
                      ? 'h-9 px-3 text-sm' 
                      : isTablet 
                        ? 'h-10 px-3 text-sm'
                        : 'h-10 px-3 lg:px-4 text-sm'
                }`}
              >
                {isSmallMobile ? (
                  <MoreHorizontal size={14} />
                ) : (
                  <>
                    <Share2 size={isMobile ? 14 : 16} />
                    <span className={isTablet ? "hidden xl:inline" : "hidden sm:inline"}>
                      Share My Work
                    </span>
                    <span className={isTablet ? "xl:hidden" : "sm:hidden"}>
                      Share
                    </span>
                    <motion.div
                      animate={isShareOpen ? { rotate: 180 } : { rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={isMobile ? 12 : 14} />
                    </motion.div>
                  </>
                )}
              </Button>
            </motion.div>

            {/* Share Dropdown */}
            <AnimatePresence>
              {isShareOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  className={`absolute right-0 top-full mt-2 bg-white border-3 border-black comic-shadow-blue rounded-lg overflow-hidden z-50 ${
                    isMobile ? 'min-w-40' : 'min-w-48'
                  }`}
                >
                  {shareOptions.map((option, index) => {
                    const IconComponent = option.icon
                    return (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={option.action}
                        className={`w-full flex items-center gap-3 p-${isMobile ? '2' : '3'} text-left hover:bg-blue-50 border-b border-gray-200 last:border-b-0 transition-colors duration-200 poppins-medium focus:outline-none focus:bg-blue-50 ${
                          isMobile ? 'text-sm' : 'text-sm'
                        }`}
                      >
                        <IconComponent size={isMobile ? 14 : 16} />
                        <span>{option.label}</span>
                      </motion.button>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Backdrop to close dropdown */}
            {isShareOpen && (
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setIsShareOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}