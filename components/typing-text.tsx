"use client"

import { useState, useEffect } from "react"

interface TypingTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
  delay?: number
}

export function TypingText({ 
  texts, 
  typingSpeed = 50, 
  deletingSpeed = 30, 
  pauseTime = 2000,
  className = "", 
  delay = 0 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTypingStarted, setIsTypingStarted] = useState(false)

  useEffect(() => {
    // Start typing after delay
    const delayTimeout = setTimeout(() => {
      setIsTypingStarted(true)
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTypingStarted) return

    const currentText = texts[currentTextIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime, isTypingStarted])

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

