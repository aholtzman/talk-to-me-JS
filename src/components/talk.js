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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>..for Zack</h1>
        <button onClick={this.handelClick}>tell me something nice</button>
      </div>
    )
  }
}
