import { useState, useEffect, useRef } from 'react'
import { GrowingFlower } from '../flowers/GrowingFlower'
import { Leaf } from '../flowers/Leaf'
import { Ground } from '../ground/Ground'
import { InteractionMessage } from '../messages/InteractionMessage'
import { PetalFall } from '../effects/PetalFall'
import { GoldenParticles } from '../effects/GoldenParticles'
import { FLOWER_POSITIONS, LEAF_POSITIONS, EXTRA_FLOWERS } from '../../data/flowers'
import { INTERACTION_MESSAGES } from '../../data/messages'
import './BouquetScene.css'

interface BouquetSceneProps {
  onComplete: () => void
  stage: 'opening' | 'bouquet' | 'complete'
  showAgain?: boolean
}

interface PopupMessage {
  id: string
  text: string
  flowerX: number
  flowerY: number
}

export function BouquetScene({ onComplete, stage }: BouquetSceneProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [messages, setMessages] = useState<PopupMessage[]>([])
  const [lastMessageText, setLastMessageText] = useState<string | null>(null)
  const lastMessageTimeRef = useRef<number>(0)

  useEffect(() => {
    if (stage === 'bouquet') {
      const revealTimer = setTimeout(() => setIsRevealed(true), 1500)
      const zoomTimer = setTimeout(() => setIsZoomed(true), 3500)
      const completeTimer = setTimeout(onComplete, 8000)

      return () => {
        clearTimeout(revealTimer)
        clearTimeout(zoomTimer)
        clearTimeout(completeTimer)
      }
    }
  }, [stage, onComplete])

  const handleFlowerInteract = (flowerId: number, x: number, y: number) => {
    const now = Date.now()
    const timeSinceLastMessage = now - lastMessageTimeRef.current
    let message: string
    
    // Si pasaron menos de 3 segundos desde el último mensaje y es el mismo, no mostrar
    if (timeSinceLastMessage < 3000) {
      let attempts = 0
      const maxAttempts = 10
      
      // Intentar seleccionar un mensaje diferente al anterior
      do {
        const randomIndex = Math.floor(Math.random() * INTERACTION_MESSAGES.length)
        message = INTERACTION_MESSAGES[randomIndex]
        attempts++
      } while (message === lastMessageText && attempts < maxAttempts)
      
      // Si no encontró uno diferente después de 10 intentos, no mostrar
      if (message === lastMessageText && attempts >= maxAttempts) {
        return
      }
    } else {
      // Si pasaron más de 3 segundos, puede ser cualquier mensaje
      const randomIndex = Math.floor(Math.random() * INTERACTION_MESSAGES.length)
      message = INTERACTION_MESSAGES[randomIndex]
    }
    
    setLastMessageText(message)
    lastMessageTimeRef.current = now
    
    const messageId = `${flowerId}-${now}`
    
    setMessages(prev => [...prev, {
      id: messageId,
      text: message,
      flowerX: x,
      flowerY: y
    }])
  }

  const handleMessageClose = (messageId: string) => {
    setMessages(prev => prev.filter(m => m.id !== messageId))
  }

  return (
    <div className={`bouquet-scene ${isRevealed ? 'revealed' : ''}`}>
      <Ground />
      <div className={`bouquet-container ${isZoomed ? 'zoomed' : ''}`}>
        <div className={`bouquet-wrapper ${isZoomed ? 'zoomed' : ''}`}>
          {/* Hojas */}
          {LEAF_POSITIONS.map((leaf, index) => (
            <Leaf
              key={`leaf-${index}`}
              x={leaf.x}
              y={leaf.y}
              rotation={leaf.rotation}
              scale={leaf.scale}
              delay={leaf.delay}
              isVisible={stage === 'opening' || stage === 'bouquet' || stage === 'complete'}
            />
          ))}

          {/* Flores principales - crecen con tallos desde el suelo */}
          {FLOWER_POSITIONS.map(flower => (
            <GrowingFlower
              key={flower.id}
              flower={flower}
              isVisible={stage === 'opening' || stage === 'bouquet' || stage === 'complete'}
              onInteract={handleFlowerInteract}
              stemDelay={0}
              bloomDelay={1200}
            />
          ))}

          {/* Flores adicionales - crecen una a una */}
          {EXTRA_FLOWERS.map((flower, index) => {
            // Calcular delays progresivos para que crezcan una a una
            // Grupo 1 (3 segundos): índices 0-3
            // Grupo 2 (5 segundos): índices 4-7
            // Grupo 3 (7 segundos): índices 8-12
            const groupIndex = Math.floor(index / 4)
            const groupStartTime = 3000 + groupIndex * 2000 // 3s, 5s, 7s
            const delayWithinGroup = (index % 4) * 250 // 0ms, 250ms, 500ms, 750ms dentro del grupo
            const totalStemDelay = groupStartTime + delayWithinGroup

            return (
              <GrowingFlower
                key={flower.id}
                flower={flower}
                isVisible={stage === 'bouquet' || stage === 'complete'}
                onInteract={handleFlowerInteract}
                stemDelay={totalStemDelay}
                bloomDelay={1200}
              />
            )
          })}
        </div>
      </div>

      {/* Efectos */}
      <PetalFall isActive={stage === 'bouquet' || stage === 'complete'} />
      <GoldenParticles 
        isActive={stage === 'bouquet' || stage === 'complete'} 
        intensity={stage === 'complete' ? 1.5 : 1}
      />

      {/* Mensajes de interacción - múltiples y posicionados dinámicamente */}
      {messages.map(msg => (
        <InteractionMessage
          key={msg.id}
          text={msg.text}
          flowerX={msg.flowerX}
          flowerY={msg.flowerY}
          onClose={() => handleMessageClose(msg.id)}
          duration={3500}
        />
      ))}
    </div>
  )
}
