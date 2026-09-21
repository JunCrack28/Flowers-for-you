import { useState, useEffect } from 'react'
import { FlowerData } from '../../data/flowers'
import './Flower.css'

interface FlowerProps {
  flower: FlowerData
  isVisible: boolean
  onInteract: (flowerId: number, x: number, y: number) => void
}

export function Flower({ flower, isVisible, onInteract }: FlowerProps) {
  const [bloomed, setBloomed] = useState(false)
  const [windOffset, setWindOffset] = useState(0)
  const [particles, setParticles] = useState<{id: number, x: number, y: number, rotation: number}[]>([])

  useEffect(() => {
    if (isVisible) {
      const bloomTimer = setTimeout(() => setBloomed(true), flower.delay)
      return () => clearTimeout(bloomTimer)
    }
  }, [isVisible, flower.delay])

  useEffect(() => {
    if (bloomed) {
      const interval = setInterval(() => {
        const time = Date.now() / 1000
        const offset = Math.sin(time * 0.8 + flower.windOffset * 2) * 2
        setWindOffset(offset)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [bloomed, flower.windOffset])

  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation()
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const point = 'changedTouches' in e ? e.changedTouches[0] : e
    const x = point.clientX - rect.left
    const y = point.clientY - rect.top
    
    // Crear partículas al hacer clic
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 30,
      rotation: Math.random() * 360
    }))
    setParticles(prev => [...prev, ...newParticles])
    setTimeout(() => setParticles([]), 600)
    
    onInteract(flower.id, x, y)
  }

  const petals = Array.from({ length: flower.petalCount }, (_, i) => {
    const angle = (360 / flower.petalCount) * i
    return (
      <div
        key={i}
        className="petal"
        style={{
          transform: `rotate(${angle}deg) translateY(${bloomed ? '-12px' : '0'}) scale(${bloomed ? 1 : 0.1})`,
          opacity: bloomed ? 1 : 0.3,
          transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)`,
          transitionDelay: `${flower.delay / 1000 + 0.1}s`,
        }}
      />
    )
  })

  return (
    <div
      className="flower"
      style={{
        left: `${flower.x}%`,
        top: `${flower.y}%`,
        transform: `translate(-50%, -50%) scale(${flower.scale}) rotate(${flower.rotation + windOffset}deg)`,
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.5s ease-out ${flower.delay / 1000}s`,
      }}
      onClick={handleClick}
      onTouchEnd={handleClick}
    >
      <div className="flower-center" style={{ 
        transform: `translate(-50%, -50%) scale(${bloomed ? 1 : 0})`,
        transition: `transform ${0.3}s ease-out ${flower.delay / 1000 + 0.5}s`
      }} />
      {petals}
      
      {particles.map(p => (
        <div
          key={p.id}
          className="petal-particle"
          style={{
            left: p.x,
            top: p.y,
            transform: `rotate(${p.rotation}deg)`,
          }}
        />
      ))}
    </div>
  )
}