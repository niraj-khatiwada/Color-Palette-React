import React, { Component } from 'react'

import './PaletteCollection.css'

import { Link } from 'react-router-dom'

export default class PaletteCollection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const styles = {
      card: {
        margin: '1rem',
      },
    }
    const palette = this.props.paletteArray.map((palette) => {
      return (
        <div key={palette.id} className={`card col-md-3`}>
          <div className="card-body cardBody">
            <div className="paletteColors row">
              {palette.colors.map((color) => {
                return (
                  <div
                    key={`${color.name}`}
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
            <Link
              to={`/palette/${palette.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="paletteBrief">
                <span className="card-text">{palette.paletteName}</span>
                <span className="card-text">{palette.emoji}</span>
              </div>
            </Link>
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
