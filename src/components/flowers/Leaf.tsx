interface LeafProps {
  x: number
  y: number
  rotation: number
  scale: number
  delay: number
  isVisible: boolean
}

export function Leaf({ x, y, rotation, scale, delay, isVisible }: LeafProps) {
  return (
    <div
      className="leaf"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`,
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.6s ease-out ${delay / 1000}s`,
      }}
    >
      <svg viewBox="0 0 40 60" width="40" height="60">
        <defs>
          <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
        </defs>
        <path
          d="M20 55 Q 5 40 10 20 Q 20 5 30 20 Q 35 40 20 55"
          fill="url(#leafGradient)"
        />
        <path
          d="M20 55 Q 15 35 20 15"
          stroke="#047857"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}