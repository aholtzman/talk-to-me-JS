import React, { Component } from 'react'
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

export default class Talk extends Component {

  handelClick() {
    let message = text[getRandomInt(text.length)]
    let voice = getRandomInt(60)
    speak(message, voice)
    console.log(message)
    console.log(voice)
  }

  render() {
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'url("https://www.thehappycatsite.com/wp-content/uploads/2017/11/kitten-tabby.jpg")', minHeight: '90vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <button style={{padding: '1.5rem', backgroundColor: '#191966', color: '#fff', fontSize: '18px', top: 'calc(100vh - 200px)', border: '0', position: 'fixed', borderRadius: '50px', textTransform: 'uppercase'}} onClick={this.handelClick}>tell me something nice</button>
        <p style={{top: 'calc(100vh - 260px)', position: 'fixed'}}>(press the button, make sure your sound is on.)</p>
      </div>
    )
  }

}
