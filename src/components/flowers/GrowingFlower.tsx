import { useState, useEffect } from 'react'
import { FlowerData } from '../../data/flowers'
import './GrowingFlower.css'

interface GrowingFlowerProps {
  flower: FlowerData
  isVisible: boolean
  onInteract: (flowerId: number, x: number, y: number) => void
  stemDelay?: number
  bloomDelay?: number
}

export function GrowingFlower({ flower, isVisible, onInteract, stemDelay = 0, bloomDelay = 1200 }: GrowingFlowerProps) {
  const [stemGrowing, setStemGrowing] = useState(false)
  const [stemComplete, setStemComplete] = useState(false)
  const [bloomed, setBloomed] = useState(false)
  const [windOffset, setWindOffset] = useState(0)
  const [particles, setParticles] = useState<{id: number, x: number, y: number, rotation: number}[]>([])

  const stemLength = 100 - flower.y // La altura del tallo es desde el suelo hasta la flor
  const totalStemDelay = flower.delay + stemDelay

  useEffect(() => {
    if (!isVisible) return

    // Paso 1: Inicia crecimiento del tallo
    const startGrowthTimer = setTimeout(() => {
      setStemGrowing(true)
    }, totalStemDelay)

    // Paso 2: El tallo termina de crecer (después de bloomDelay ms)
    const completeGrowthTimer = setTimeout(() => {
      setStemComplete(true)
    }, totalStemDelay + bloomDelay)

    // Paso 3: La flor florece (después de que el tallo termine + pequeña pausa)
    const bloomTimer = setTimeout(() => {
      setBloomed(true)
    }, totalStemDelay + bloomDelay + 100)

    return () => {
      clearTimeout(startGrowthTimer)
      clearTimeout(completeGrowthTimer)
      clearTimeout(bloomTimer)
    }
  }, [isVisible, totalStemDelay, bloomDelay])

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
    
    // Coordenadas globales de la pantalla
    const globalX = rect.left + rect.width / 2
    const globalY = rect.top + rect.height / 2
    
    // Coordenadas locales para partículas
    const localX = rect.width / 2
    const localY = rect.height / 2
    
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: localX + (Math.random() - 0.5) * 30,
      y: localY + (Math.random() - 0.5) * 30,
      rotation: Math.random() * 360
    }))
    setParticles(prev => [...prev, ...newParticles])
    setTimeout(() => setParticles([]), 600)
    
    // Pasar coordenadas globales para el mensaje
    onInteract(flower.id, globalX, globalY)
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
          transitionDelay: `${0.1}s`,
        }}
      />
    )
  })

  return (
    <>
      {/* Tallo que crece desde el suelo - SOLO si stemGrowing es true */}
      {stemGrowing && (
        <div
          className="growing-stem"
          style={{
            left: `${flower.x}%`,
            bottom: '0',
            height: `${stemComplete ? stemLength : 0}%`,
            opacity: 1,
            transition: `height ${bloomDelay}ms ease-out`,
            transitionDelay: `0s`,
          }}
        >
          <svg 
            viewBox="0 0 10 100" 
            width="10" 
            height="100%"
            preserveAspectRatio="none"
          >
            <path
              d="M5 0 Q 3 30 5 50 Q 7 70 5 100"
              stroke="#059669"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Flor que florece - SOLO aparece después de que stemComplete es true */}
      {stemComplete && (
        <div
          className="growing-flower"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            transform: `translate(-50%, -50%) scale(${flower.scale}) rotate(${flower.rotation + windOffset}deg)`,
            opacity: 1,
            transition: `opacity 0.5s ease-out`,
          }}
          onClick={handleClick}
          onTouchEnd={handleClick}
        >
          <div 
            className="flower-center" 
            style={{ 
              transform: `translate(-50%, -50%) scale(${bloomed ? 1 : 0})`,
              transition: `transform 0.3s ease-out 0.1s`
            }} 
          />
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
      )}
    </>
  )
}
