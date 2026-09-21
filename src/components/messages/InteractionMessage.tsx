import { useEffect, useState } from 'react'
import './InteractionMessage.css'

interface InteractionMessageProps {
  text: string
  flowerX: number
  flowerY: number
  onClose?: () => void
  duration?: number
}

export function InteractionMessage({ 
  text, 
  flowerX, 
  flowerY, 
  onClose, 
  duration = 3500 
}: InteractionMessageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // Calcular posición óptima
  const calculatePosition = (fx: number, fy: number): { x: number; y: number } => {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const groundHeight = viewportHeight * 0.35
    const messageWidth = 220
    const messageHeight = 60
    const offset = 40
    const margin = 20

    // Prioridad: arriba > arriba-derecha > arriba-izquierda > derecha > izquierda > fallback
    
    // Arriba
    if (fy - offset - messageHeight > margin) {
      return {
        x: Math.max(margin, Math.min(fx - messageWidth / 2, viewportWidth - messageWidth - margin)),
        y: fy - offset - messageHeight
      }
    }

    // Arriba-derecha
    if (fx + offset + messageWidth < viewportWidth - margin && fy - offset - messageHeight > margin) {
      return {
        x: fx + offset,
        y: fy - offset - messageHeight
      }
    }

    // Arriba-izquierda
    if (fx - offset - messageWidth > margin && fy - offset - messageHeight > margin) {
      return {
        x: fx - offset - messageWidth,
        y: fy - offset - messageHeight
      }
    }

    // Derecha
    if (fx + offset + messageWidth < viewportWidth - margin) {
      return {
        x: fx + offset,
        y: Math.max(margin, Math.min(fy - messageHeight / 2, groundHeight - messageHeight - 20))
      }
    }

    // Izquierda
    if (fx - offset - messageWidth > margin) {
      return {
        x: fx - offset - messageWidth,
        y: Math.max(margin, Math.min(fy - messageHeight / 2, groundHeight - messageHeight - 20))
      }
    }

    // Fallback: arriba del ramo (garantizado)
    return {
      x: Math.max(margin, Math.min(fx - messageWidth / 2, viewportWidth - messageWidth - margin)),
      y: Math.max(margin, Math.min(fy - 120, groundHeight - messageHeight - 20))
    }
  }

  // Calcular posición al montar y mostrar
  useEffect(() => {
    const newPos = calculatePosition(flowerX, flowerY)
    setPosition(newPos)
    
    // Pequeño delay para que se renderice, luego mostrar
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 20)

    return () => clearTimeout(showTimer)
  }, [flowerX, flowerY])

  // Timer para cerrar
  useEffect(() => {
    if (!isVisible) return
    
    const closeTimer = setTimeout(() => {
      setIsVisible(false)
      const removeTimer = setTimeout(() => {
        onClose?.()
      }, 300)
      return () => clearTimeout(removeTimer)
    }, duration)

    return () => clearTimeout(closeTimer)
  }, [isVisible, duration, onClose])

  // SIEMPRE renderizar - el mensaje siempre existe en el DOM
  return (
    <div
      className={`interaction-message ${isVisible ? 'visible' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="message-bubble">
        <div className="message-content">{text}</div>
        <div className="message-pointer" />
      </div>
    </div>
  )
}
