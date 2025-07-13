'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LoadingScreen } from './components/LoadingScreen'
import { Sidebar } from './components/Sidebar'
import { TopNavBar } from './components/TopNavBar'
import { HeroSection } from './components/HeroSection'
import { Biography } from './components/Biography'
import { Portfolio } from './components/Portfolio'
import { Resume } from './components/Resume'
import { Contact } from './components/Contact'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [screenSize, setScreenSize] = useState('desktop')

  // Screen size detection with optimized performance
  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      let newSize: string
      if (width < 768) {
        newSize = 'mobile'
      } else if (width < 1024) {
        newSize = 'tablet'
      } else {
        newSize = 'desktop'
      }
      
      // Only update if size actually changed
      if (newSize !== screenSize) {
        setScreenSize(newSize)
      }
    }

    updateScreenSize()
    
    // Throttle resize events for better performance
    let timeoutId: NodeJS.Timeout
    const throttledResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(updateScreenSize, 100)
    }
    
    window.addEventListener('resize', throttledResize, { passive: true })
    return () => {
      window.removeEventListener('resize', throttledResize)
      clearTimeout(timeoutId)
    }
  }, [screenSize])

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  // Optimized navigation handler
  const handleSectionChange = (section: string) => {
    if (section !== activeSection) {
      setActiveSection(section)
    }
  }

  // Optimized transition variants
  const pageTransition = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.3 },
        y: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.25,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  // Component renderer with optimized animations
  const renderSection = () => {
    const sections = {
      home: <HeroSection />,
      biography: <Biography />,
      portfolio: <Portfolio />,
      resume: <Resume />,
      contact: <Contact />
    }

    const SectionComponent = sections[activeSection as keyof typeof sections]

    if (!SectionComponent) {
      return (
        <motion.div 
          key="default"
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full flex items-center justify-center will-change-transform"
        >
          <div className="text-center p-8">
            <h2 className="text-2xl poppins-bold text-black mb-4">Section Not Found</h2>
            <p className="text-gray-600">Active section: {activeSection}</p>
          </div>
        </motion.div>
      )
    }

    return (
      <motion.div 
        key={activeSection}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full h-full will-change-transform"
      >
        {SectionComponent}
      </motion.div>
    )
  }

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  // Main application with optimized animations
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 will-change-opacity"
    >
      {/* Responsive Layout Container */}
      <div className={`
        ${screenSize === 'mobile' 
          ? 'flex flex-col h-screen overflow-hidden' 
          : 'flex flex-row h-screen overflow-hidden'
        }
      `}>
        
        {/* Sidebar with optimized entrance animation */}
        <motion.div 
          initial={{ 
            x: screenSize === 'mobile' ? 0 : -100, 
            y: screenSize === 'mobile' ? -50 : 0,
            opacity: 0 
          }}
          animate={{ 
            x: 0, 
            y: 0, 
            opacity: 1 
          }}
          transition={{ 
            duration: 0.5, 
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
            x: { type: "spring", stiffness: 100, damping: 15 },
            y: { type: "spring", stiffness: 100, damping: 15 }
          }}
          className={`
            ${screenSize === 'mobile' 
              ? 'flex-shrink-0 w-full h-auto' 
              : 'flex-shrink-0 w-auto h-full'
            } will-change-transform
          `}
        >
          <Sidebar 
            activeSection={activeSection} 
            setActiveSection={handleSectionChange}
            screenSize={screenSize}
          />
        </motion.div>
        
        {/* Main Content Area */}
        <div className={`
          ${screenSize === 'mobile' 
            ? 'flex-1 flex flex-col min-h-0 overflow-hidden' 
            : 'flex-1 flex flex-col min-w-0 overflow-hidden'
          }
        `}>
          
          {/* Top Navigation Bar - ONLY shown on tablet and desktop */}
          {screenSize !== 'mobile' && (
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
                y: { type: "spring", stiffness: 100, damping: 15 }
              }}
              className="flex-shrink-0 will-change-transform"
            >
              <TopNavBar 
                activeSection={activeSection}
                screenSize={screenSize}
              />
            </motion.div>
          )}
          
          {/* Main Content with optimized animations */}
          <motion.main 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
              scale: { type: "spring", stiffness: 100, damping: 15 }
            }}
            className="flex-1 overflow-auto will-change-transform mobile-scroll-container"
          >
            <div className={`
              h-full w-full
              ${screenSize === 'mobile' 
                ? 'p-2 sm:p-3' 
                : screenSize === 'tablet'
                  ? 'p-4 lg:p-6' 
                  : 'p-4 lg:p-6 xl:p-8'
              }
            `}>
              {/* Content Area with Smooth Transitions */}
              <div className="h-full w-full">
                <AnimatePresence 
                  mode="wait"
                  initial={false}
                  onExitComplete={() => {
                    // Cleanup any pending animations
                    if (window.requestIdleCallback) {
                      window.requestIdleCallback(() => {
                        // Force layout recalculation after transition
                        document.body.offsetHeight
                      })
                    }
                  }}
                >
                  {renderSection()}
                </AnimatePresence>
              </div>
            </div>
          </motion.main>
        </div>
      </div>
    </motion.div>
  )
}