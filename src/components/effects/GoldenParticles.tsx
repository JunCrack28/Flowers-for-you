import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function GoldenParticles({ isActive, intensity = 1 }: { isActive: boolean; intensity?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (isActive) {
      const count = Math.floor(25 * intensity)
      const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 2,
      }))
      setParticles(newParticles)
    } else {
      setParticles([])
    }
  }, [isActive, intensity])

  if (!isActive || particles.length === 0) return null

  return (
    <div className="golden-particles">
      {particles.map(p => (
        <div
          key={p.id}
          className="golden-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}