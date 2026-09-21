import { useState, useEffect, useRef } from 'react'

export function useAudio(enabled: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/god-willing.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
      audioRef.current.preload = 'metadata'
      
      audioRef.current.addEventListener('canplay', () => {
        setCanPlay(true)
      })
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !canPlay) return

    if (enabled && !isPlaying) {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.log('Audio playback prevented:', error)
          })
      }
    } else if (!enabled && isPlaying) {
      audio.pause()
      setIsPlaying(false)
    }
  }, [enabled, canPlay, isPlaying])

  const togglePlay = () => {
    if (canPlay) {
      const newEnabled = !enabled
      if (audioRef.current) {
        audioRef.current.volume = newEnabled ? 0.5 : 0
      }
      return newEnabled
    }
    return enabled
  }

  const cleanup = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
  }

  return { togglePlay, canPlay, cleanup }
}