import { useState, useCallback } from 'react'
import { Intro } from './components/intro/Intro'
import { BouquetScene } from './components/bouquet/BouquetScene'
import { FinalMessage } from './components/messages/FinalMessage'
import { AudioPlayer } from './components/audio/AudioPlayer'

type Stage = 'intro' | 'opening' | 'bouquet' | 'complete'

function App() {
  const [stage, setStage] = useState<Stage>('intro')
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [showBouquetAgain, setShowBouquetAgain] = useState(false)
  const [audioEnabled, setAudioEnabled] = useState(false)

  const handleOpenGift = useCallback(() => {
    setStage('opening')
    setTimeout(() => setStage('bouquet'), 2000)
  }, [])

  const handleBouquetComplete = useCallback(() => {
    setStage('complete')
    setTimeout(() => setShowFinalMessage(true), 1500)
    // Después de 6 segundos, ocultar mensaje y mostrar flores de nuevo
    setTimeout(() => {
      setShowFinalMessage(false)
      setShowBouquetAgain(true)
    }, 7500)
  }, [])

  const toggleAudio = useCallback(() => {
    setAudioEnabled(prev => !prev)
  }, [])

  return (
    <>
      {stage === 'intro' && <Intro onOpen={handleOpenGift} />}
      
      {(stage === 'opening' || stage === 'bouquet' || stage === 'complete') && (
        <BouquetScene 
          onComplete={handleBouquetComplete}
          stage={stage}
          showAgain={showBouquetAgain}
        />
      )}
      
      {showFinalMessage && <FinalMessage />}
      
      <AudioPlayer enabled={audioEnabled} onToggle={toggleAudio} />
    </>
  )
}

export default App