'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text: string
  className?: string
  duration?: number
  delay?: number
}

export function TypingAnimation({
  text,
  className,
  duration = 0.1,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1))
          i++
        } else {
          clearInterval(typingEffect)
        }
      }, duration * 1000)

      return () => {
        clearInterval(typingEffect)
      }
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [text, duration, delay])

  return (
    <h1
      className={cn(
        'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className
      )}
    >
      {displayedText}
    </h1>
  )
}
