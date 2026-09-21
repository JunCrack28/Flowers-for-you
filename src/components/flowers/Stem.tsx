interface StemProps {
  x: number
  height: number
  delay: number
  isVisible: boolean
}

export function Stem({ x, height, delay, isVisible }: StemProps) {
  return (
    <div
      className="stem"
      style={{
        left: `${x}%`,
        height: `${height}%`,
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.4s ease-out ${delay / 1000}s`,
      }}
    >
      <svg viewBox="0 0 10 100" width="10" height="100%" preserveAspectRatio="none">
        <path
          d="M5 0 Q 3 30 5 50 Q 7 70 5 100"
          stroke="#059669"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}