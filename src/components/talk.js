import React, { Component } from 'react'
import text from '../affirmations'

export default class Talk extends Component {
  render() {

    return(
      <div>
      <h1>Make JS Talk</h1>
      {text.map((data) => {
          return <div>{data}</div>
        })}
      </div>
    )
  }
}
