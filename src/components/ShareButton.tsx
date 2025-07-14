'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Share2, Copy, Mail, MessageSquare } from 'lucide-react'
import { toast } from "sonner"

export function ShareButton() {
  const [isOpen, setIsOpen] = useState(false)

  const shareOptions = [
    {
      icon: Copy,
      label: 'Copy Link',
      action: () => {
        navigator.clipboard.writeText(window.location.href)
        toast("Link copied to clipboard!")
        setIsOpen(false)
      }
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => {
        window.open(`mailto:?subject=Check out this portfolio&body=${window.location.href}`)
        setIsOpen(false)
      }
    },
    {
      icon: MessageSquare,
      label: 'Share',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Patan Sahil Khan - Frontend Developer',
            text: 'Check out this amazing portfolio!',
            url: window.location.href,
          })
        } else {
          toast("Web Share API not supported")
        }
        setIsOpen(false)
      }
    }
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-2"
          >
            {shareOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    onClick={option.action}
                    variant="outline"
                    size="sm"
                    className="bg-white border-2 border-black comic-shadow hover:bg-gray-50 gap-2 poppins-medium"
                  >
                    <IconComponent size={16} />
                    <span className="hidden sm:inline">{option.label}</span>
                  </Button>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="border-3 border-black comic-shadow-blue bg-blue-500 hover:bg-blue-600 text-white gap-2 h-12 px-4 poppins-semibold"
        >
          <Share2 size={20} />
          <span className="hidden sm:inline">Share My Work</span>
        </Button>
      </motion.div>
    </div>
  )
}