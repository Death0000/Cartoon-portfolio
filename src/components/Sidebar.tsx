'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Briefcase, FileText, Mail, Instagram, Linkedin, Github, Twitter, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet'
import { Button } from './ui/button'

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  screenSize?: string
}

// Memoized social links component to prevent re-renders
const SocialLinks = React.memo(({ compact = false }: { compact?: boolean }) => {
  const socialLinks = useMemo(() => [
    { icon: Instagram, href: 'https://instagram.com/patansahilkhan', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rehan-ghanchi-586463227/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/patansahilkhan', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/patansahilkhan', label: 'Twitter' }
  ], [])

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex justify-center gap-${compact ? '2' : '3'} mb-4`}
    >
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
            transition={{ delay: index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`text-black hover:text-blue-500 transition-colors duration-200 p-${compact ? '1.5' : '2'} border-2 border-black rounded-lg comic-shadow hover-lift bg-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
            aria-label={social.label}
          >
            <IconComponent size={compact ? 14 : 16} />
          </motion.a>
        )
      })}
    </motion.div>
  )
})

SocialLinks.displayName = 'SocialLinks'

export function Sidebar({ activeSection, setActiveSection, screenSize = 'desktop' }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const menuItems = useMemo(() => [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'biography', label: 'Biography', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ], [])

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  // Track window width for responsive behavior
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  const handleNavClick = useCallback((sectionId: string) => {
    console.log('Navigation clicked:', {
      from: activeSection,
      to: sectionId,
      screenSize,
      windowWidth,
      timestamp: new Date().toISOString()
    })
    
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
    
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false) // Always close mobile menu after navigation
  }, [activeSection, screenSize, windowWidth, setActiveSection])

  // Navigation buttons component for desktop/tablet
  const NavigationButtons = useCallback(({ isMobileSheet = false }: { isMobileSheet?: boolean }) => (
    <nav className={
      isMobileSheet 
        ? "space-y-3 py-4" 
        : isTablet
          ? "space-y-2"
          : "space-y-3"
    }>
      {menuItems.map((item) => {
        const IconComponent = item.icon
        const isActive = activeSection === item.id
        
        return (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              onClick={() => handleNavClick(item.id)}
              variant={isActive ? "default" : "outline"}
              className={`
                ${isMobileSheet
                  ? 'w-full flex items-center justify-start gap-4 h-14 px-4 text-left text-base'
                  : isTablet
                    ? 'w-full flex items-center justify-start gap-3 h-10 px-3 text-sm'
                    : 'w-full flex items-center justify-start gap-3 h-12 px-4 text-sm'
                }
                border-2 border-black poppins-medium rounded-md transition-all duration-300 ease-out
                ${isActive 
                  ? 'bg-blue-500 text-white comic-shadow-blue hover:bg-blue-600 transform hover:translate-y-[-1px]' 
                  : 'bg-white text-black comic-shadow hover:bg-gray-50 hover:transform hover:translate-y-[-1px]'
                }
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                active:transform active:translate-y-0
              `}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Navigate to ${item.label}`}
            >
              <IconComponent size={isMobileSheet ? 20 : 18} />
              <span>{item.label}</span>
            </Button>
          </motion.div>
        )
      })}
    </nav>
  ), [menuItems, activeSection, isTablet, handleNavClick])

  // Current section indicator for mobile
  const getCurrentSectionLabel = useCallback(() => {
    const currentItem = menuItems.find(item => item.id === activeSection)
    return currentItem ? currentItem.label : 'Home'
  }, [menuItems, activeSection])

  // Mobile layout (< 768px) - SINGLE NAVIGATION BAR
  if (isMobile) {
    return (
      <div className="w-full bg-white border-b-4 border-black shadow-lg">
        <div className="flex items-center justify-between p-3 sm:p-4">
          {/* Left side - Brand + Current Section */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <h1 className="poppins-bold text-black comic-title text-base sm:text-lg">
              Pick One
            </h1>
            <div className="h-4 w-px bg-gray-300"></div>
            <span className="text-sm sm:text-base poppins-medium text-gray-600 truncate">
              {getCurrentSectionLabel()}
            </span>
          </div>
          
          {/* Right side - Hamburger Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="p-2 sm:p-2.5 border-2 border-black comic-shadow bg-white hover:bg-gray-50 flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 max-w-[90vw] p-0 border-r-4 border-black">
              <div className="h-full flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate between different sections of the portfolio
                </SheetDescription>
                
                {/* Header */}
                <div className="p-6 border-b-2 border-gray-200">
                  <h2 className="text-2xl poppins-bold text-black border-b-4 border-black pb-2">
                    Pick One
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 poppins-regular">
                    Navigate to any section
                  </p>
                </div>
                
                {/* Navigation */}
                <div className="flex-1 p-6">
                  <NavigationButtons isMobileSheet />
                </div>
                
                {/* Footer */}
                <div className="p-6 border-t-2 border-gray-200 bg-gray-50">
                  <SocialLinks />
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-black text-xs text-center poppins-light leading-relaxed"
                    style={{ fontFamily: 'cursive, Poppins' }}
                  >
                    © {currentYear} Designed And Developed By - Rehan Ghanchi
                  </motion.p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    )
  }

  // Desktop layout (>= 1024px)
  if (isDesktop) {
    return (
      <div className="w-64 xl:w-72 2xl:w-80 bg-white border-r-4 border-black shadow-lg h-screen flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col min-h-0">
          <div className="p-6 xl:p-8 flex-shrink-0">
            {/* Logo/Title */}
            <div className="mb-8">
              <h1 className="text-2xl xl:text-3xl poppins-bold text-black border-b-4 border-black pb-2 comic-title">
                Pick One
              </h1>
            </div>
          </div>

          {/* Navigation Menu - Scrollable if needed */}
          <div className="flex-1 px-6 xl:px-8 overflow-y-auto">
            <NavigationButtons />
          </div>

          {/* Footer Section - Fixed at bottom */}
          <div className="p-6 xl:p-8 border-t-2 border-gray-200 bg-gray-50 flex-shrink-0">
            <SocialLinks />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-black text-xs xl:text-sm text-center poppins-light leading-relaxed"
              style={{ fontFamily: 'cursive, Poppins' }}
            >
              © {currentYear} Designed And Developed By - Rehan Ghanchi
            </motion.p>
          </div>
        </div>
      </div>
    )
  }

  // Tablet layout (768px - 1023px)
  return (
    <div className="w-56 bg-white border-r-4 border-black shadow-lg h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col min-h-0">
        <div className="p-4 flex-shrink-0">
          {/* Logo/Title */}
          <div className="mb-6">
            <h1 className="text-xl poppins-bold text-black border-b-4 border-black pb-2 comic-title">
              Rehan Ghanchi
            </h1>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 px-4 overflow-y-auto">
          <NavigationButtons />
        </div>

        {/* Compact Footer */}
        <div className="p-4 border-t-2 border-gray-200 bg-gray-50 flex-shrink-0">
          <SocialLinks compact />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-black text-xs text-center poppins-light leading-tight"
            style={{ fontFamily: 'cursive, Poppins' }}
          >
            © {currentYear} Rehan Ghanchi
          </motion.p>
        </div>
      </div>
    </div>
  )
}