'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const loadingSteps = [
    { icon: Code2, text: "Initializing Portfolio", color: "text-blue-500" },
    { icon: Palette, text: "Loading Creative Assets", color: "text-purple-500" },
    { icon: Zap, text: "Powering Up Experience", color: "text-green-500" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1
        
        // Update current step based on progress
        if (newProgress <= 33) {
          setCurrentStep(0)
        } else if (newProgress <= 66) {
          setCurrentStep(1)
        } else {
          setCurrentStep(2)
        }

        // Complete loading at 100%
        if (newProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onLoadingComplete()
          }, 500) // Small delay for smooth transition
          return 100
        }
        
        return newProgress
      })
    }, 30) // Adjust speed as needed (30ms = ~3 seconds total)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center z-50 p-4"
      >
        {/* Perfect Center Container */}
        <div className="flex items-center justify-center min-h-screen w-full">
          <div className="text-center space-y-6 sm:space-y-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
            {/* Main Logo/Brand */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              {/* Animated Logo */}
              <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-xl comic-shadow-blue"
                  animate={{ 
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, -180, -360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code2 size={24} className="text-blue-600 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </motion.div>
                </div>
              </div>

              {/* Brand Text */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl poppins-bold text-black comic-title"
              >
                Pick One
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-600 poppins-medium text-sm sm:text-base"
              >
                Frontend Developer Portfolio
              </motion.p>
            </motion.div>

            {/* Loading Steps */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              {loadingSteps.map((step, index) => {
                const IconComponent = step.icon
                const isActive = currentStep === index
                const isCompleted = currentStep > index

                return (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-lg border-2 transition-all duration-300 ${
                      isActive 
                        ? 'border-blue-400 bg-blue-50 comic-shadow-blue' 
                        : isCompleted
                          ? 'border-green-400 bg-green-50'
                          : 'border-gray-200 bg-white'
                    }`}
                    animate={isActive ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg ${
                      isActive 
                        ? 'bg-blue-500 text-white' 
                        : isCompleted
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                    }`}>
                      <IconComponent size={14} className="sm:w-4 sm:h-4" />
                    </div>
                    <span className={`poppins-medium text-xs sm:text-sm ${
                      isActive 
                        ? 'text-blue-700' 
                        : isCompleted
                          ? 'text-green-700'
                          : 'text-gray-500'
                    }`}>
                      {step.text}
                    </span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm poppins-medium text-gray-600">Loading Progress</span>
                <span className="text-xs sm:text-sm poppins-bold text-blue-600">{progress}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 sm:h-3 border-2 border-black comic-shadow overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex justify-center gap-1.5 sm:gap-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="text-xs sm:text-sm text-gray-500 poppins-light space-y-1"
            >
              <p>Optimizing for the best experience...</p>
              <p className="text-blue-600 poppins-medium">Thank you for your patience!</p>
            </motion.div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-200 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}