import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'

import { Link } from 'react-router-dom'

const styles = {
  paletteBrief: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '2rem',
    alignItems: 'center',
    color: 'black',
    font: '',
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  card: {
    margin: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  navBar: {
    '& h3': {
      color: 'white',
      fontFamily:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
  },
}

class PaletteCollection extends Component {
  handleCardClick(id) {
    this.props.handleCardClick(id)
  }
  render() {
    const { classes } = this.props
    const palette = this.props.paletteArray.map((palette) => {
      return (
        <div
          key={palette.id}
          className={`${classes.card} card col-md-3 p-0`}
          onClick={this.handleCardClick.bind(this, palette.id)}
        >
          <div className="card-body cardBody py-1">
            <div className="paletteColors row">
              {palette.colors.map((color) => {
                return (
                  <div
                    key={`${color.name}`}
                    className="eachColor col-sm-3"
                    style={{
                      backgroundColor: color.color,
                      width: '2rem',
                      height: '2.3rem',
                    }}
                  ></div>
                )
              })}
            </div>
            <div className={classes.paletteBrief}>
              <span className="card-text">{palette.paletteName}</span>
              <span className="card-text">{palette.emoji}</span>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="PaletteCollection">
        <nav className={`container-fluid p-2 ${this.props.classes.navBar}`}>
          <h3>React Colors</h3>
        </nav>
        <div className="container">
          <div className="row justify-content-center">{palette}</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteCollection)
