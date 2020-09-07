import React, { useState } from 'react'
import text from '../affirmations'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

function speak (message, v = 7) {
    const msg = new SpeechSynthesisUtterance(message)
    const voices = window.speechSynthesis.getVoices()
    msg.voice = voices[v]
    window.speechSynthesis.speak(msg)
  }

export default () => {

  const [ affirmation, setAffirmation ] = useState(null)

  function handleClick() {
    let message = text[getRandomInt(text.length)]
    let voice = getRandomInt(60)
    speak(message, voice)
    setAffirmation(message)
  }
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'url("https://www.thehappycatsite.com/wp-content/uploads/2017/11/kitten-tabby.jpg")', minHeight: '93vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {affirmation && <p style={{padding: '2rem', fontSize: "2rem", background: 'rgba(255,255,255,.8)', margin: "4rem 2rem"}}>{affirmation}</p>}
        <button style={{padding: '1.5rem', backgroundColor: '#191966', color: '#fff', fontSize: '18px', top: 'calc(100vh - 10rem)', border: '0', position: 'fixed', borderRadius: '50px', textTransform: 'uppercase'}} onClick={handleClick}>tell me something nice</button>
      </div>
    )

}
