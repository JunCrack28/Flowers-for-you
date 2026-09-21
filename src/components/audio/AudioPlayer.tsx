import { useAudio } from '../../hooks/useAudio'
import './AudioPlayer.css'

interface AudioPlayerProps {
  enabled: boolean
  onToggle: () => void
}

export function AudioPlayer({ enabled, onToggle }: AudioPlayerProps) {
  const { canPlay } = useAudio(enabled)

  const handleToggle = () => {
    onToggle()
  }

  return (
    <div className="audio-container">
      {canPlay && (
        <div className="audio-info">
          Reproduciendo: God Willing
        </div>
      )}
      <button
        className={`audio-button ${!enabled ? 'muted' : ''}`}
        onClick={handleToggle}
        title={enabled ? 'Silenciar música' : 'Activar música'}
      >
        <span className="music-icon">🎵</span>
        <span className="mute-icon">🔇</span>
      </button>
    </div>
  )
}