import { useState, useEffect } from 'react'
import { INTRO_MESSAGES } from '../../data/messages'
import './Intro.css'

interface IntroProps {
  onOpen: () => void
}

export function Intro({ onOpen }: IntroProps) {
  const [visibleMessages, setVisibleMessages] = useState<boolean[]>([false, false, false])
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const timings = [1500, 4500, 8000, 11500]
    
    const t1 = setTimeout(() => setVisibleMessages([true, false, false]), timings[0])
    const t2 = setTimeout(() => setVisibleMessages([true, true, false]), timings[1])
    const t3 = setTimeout(() => setVisibleMessages([true, true, true]), timings[2])
    const t4 = setTimeout(() => setShowButton(true), timings[3])

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4)
    }
  }, [])

  return (
    <div className="intro-container">
      <div className="intro-content">
        {INTRO_MESSAGES.map((message, index) => (
          visibleMessages[index] && (
            <p className="intro-text fade-in-up" key={index}>
              {message}
            </p>
          )
        ))}
        
        {showButton && (
          <button 
            className="open-button fade-in-up" 
            onClick={onOpen}
            key="button"
          >
            Abrir mi regalo 🌼
          </button>
        )}
      </div>
      
      <div className="intro-bg">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="intro-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}