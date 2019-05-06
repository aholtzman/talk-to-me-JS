import React, { Component } from 'react'
import text from '../affirmations'

function getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max))
    }
function speak (message, v = 7) {
    var msg = new SpeechSynthesisUtterance(message)
    var voices = window.speechSynthesis.getVoices()
    msg.voice = voices[v]
    window.speechSynthesis.speak(msg)
  }

export default class Talk extends Component {

   handelClick() {
    let message = text[getRandomInt(text.length)]
    speak(message, 7)
    console.log(message)
  }

  render() {
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundImage: 'url("https://www.thehappycatsite.com/wp-content/uploads/2017/11/kitten-tabby.jpg")', minHeight: '90vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <button style={{padding: '1rem', backgroundColor: 'black', color: '#fff', fontSize: '18px', top: 'calc(100vh - 200px)', border: '0', position: 'fixed', borderRadius: '50px'}} onClick={this.handelClick}>tell me something nice</button>
      </div>
    )
  }
}
