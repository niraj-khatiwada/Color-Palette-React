import React, { Component } from 'react'

import './PaletteCollection.css'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

export default class PaletteCollection extends Component {
  render() {
    const palette = this.props.paletteArray.map((palette) => {
      return (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <p className="card-text"></p>
          </div>
        </div>
      )
    })
    return (
      <div className="container PaletteCollection">
        <h1>{palette}</h1>
      </div>
    )
  }
}
