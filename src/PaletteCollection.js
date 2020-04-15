import React, { Component } from 'react'

import './PaletteCollection.css'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

export default class PaletteCollection extends Component {
  render() {
    const palette = this.props.paletteArray.map((palette) => {
      return (
        <div className="card col-md-3">
          <div className="card-body cardBody">
            <div className="paletteColors row">
              {palette.colors.map((color) => {
                return (
                  <div
                    className="eachColor col-sm-3"
                    style={{
                      backgroundColor: color.color,
                      width: '3rem',
                      height: '2.7rem',
                    }}
                  ></div>
                )
              })}
            </div>
            <div className="paletteBrief">
              <span className="card-text">{palette.paletteName}</span>
              <span className="card-text">{palette.emoji}</span>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="container PaletteCollection ">
        <div className="row justify-content-center">{palette}</div>
      </div>
    )
  }
}
