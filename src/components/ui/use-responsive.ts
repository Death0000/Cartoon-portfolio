'use client'

import { useState, useEffect } from 'react'

export interface ResponsiveConfig {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLarge: boolean
  screenSize: 'mobile' | 'tablet' | 'desktop' | 'large'
  width: number
  height: number
}

export function useResponsive(): ResponsiveConfig {
  const [config, setConfig] = useState<ResponsiveConfig>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false,
    screenSize: 'desktop',
    width: 0,
    height: 0
  })

  useEffect(() => {
    const updateConfig = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024 && width < 1440
      const isLarge = width >= 1440

      let screenSize: 'mobile' | 'tablet' | 'desktop' | 'large' = 'desktop'
      
      if (isMobile) screenSize = 'mobile'
      else if (isTablet) screenSize = 'tablet'
      else if (isDesktop) screenSize = 'desktop'
      else if (isLarge) screenSize = 'large'

      setConfig({
        isMobile,
        isTablet,
        isDesktop,
        isLarge,
        screenSize,
        width,
        height
      })
    }

    // Initial call
    updateConfig()

    // Add event listener
    window.addEventListener('resize', updateConfig)

    // Cleanup
    return () => window.removeEventListener('resize', updateConfig)
  }, [])

  return config
}

export default useResponsive