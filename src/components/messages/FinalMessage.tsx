import { FINAL_MESSAGES } from '../../data/messages'
import './FinalMessage.css'

export function FinalMessage() {
  return (
    <div className="final-message">
      <div className="message-overlay" />
      <div className="message-container">
        {FINAL_MESSAGES.map((message, index) => (
          <div className="message-line" key={index}>
            {message.includes('❤️') ? (
              <>
                {message.split('❤️')[0]}
                <span className="flower-icon">❤️</span>
                {message.split('❤️')[1]}
              </>
            ) : (
              message
            )}
          </div>
        ))}
      </div>
    </div>
  )
}