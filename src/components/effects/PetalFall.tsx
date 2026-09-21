import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  duration: number
  delay: number
  color: string
}

export function PetalFall({ isActive }: { isActive: boolean }) {
  const [petals, setPetals] = useState<Particle[]>([])

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        const newPetal: Particle = {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          y: -5,
          rotation: Math.random() * 360,
          scale: 0.3 + Math.random() * 0.4,
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 0.5,
          color: Math.random() > 0.5 ? '#FCD34D' : '#FEF3C7'
        }
        setPetals(prev => [...prev.slice(-30), newPetal])
      }, 400)

      return () => clearInterval(interval)
    }
  }, [isActive])

  useEffect(() => {
    if (!isActive) {
      const timer = setTimeout(() => setPetals([]), 1000)
      return () => clearTimeout(timer)
    }
  }, [isActive])

  return (
    <div className="petal-fall-container">
      {petals.map(p => (
        <div
          key={p.id}
          className="falling-petal"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            background: p.color,
          }}
        />
      ))}
    </div>
  )
}