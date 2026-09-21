import './Ground.css'

export function Ground() {
  return (
    <div className="ground-container">
      <svg 
        viewBox="0 0 1000 300" 
        preserveAspectRatio="xMidYMid slice"
        className="ground-svg"
      >
        {/* Sombra suave */}
        <defs>
          <radialGradient id="groundGradient" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="50%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </radialGradient>
          
          <filter id="groundShadow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>

        {/* Colina principal - forma suave curvada */}
        <path
          d="M 0 200 Q 250 50 500 80 T 1000 200 L 1000 300 L 0 300 Z"
          fill="url(#groundGradient)"
          opacity="1"
        />

        {/* Segunda capa - más clara y suave */}
        <path
          d="M 0 220 Q 200 120 400 140 T 800 220 Q 900 200 1000 240 L 1000 300 L 0 300 Z"
          fill="#10B981"
          opacity="0.8"
        />

        {/* Textura sutil - pequeñas ondulaciones */}
        <path
          d="M 0 200 Q 100 190 200 200 T 400 200 T 600 200 T 800 200 T 1000 200"
          stroke="#059669"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />

        {/* Detalles de luz - highlights */}
        <ellipse
          cx="250"
          cy="120"
          rx="150"
          ry="80"
          fill="#34D399"
          opacity="0.2"
        />

        <ellipse
          cx="750"
          cy="150"
          rx="120"
          ry="60"
          fill="#34D399"
          opacity="0.15"
        />
      </svg>
    </div>
  )
}
