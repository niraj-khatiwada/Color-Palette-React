import React, { Component } from 'react'
import Color from './Color'

import './Palette.css'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import NavBar from './NavBar'

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderValue: 900,
      colorFormat: 'hex',
      open: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSnackBarClose = this.handleSnackBarClose.bind(this)
  }
  handleChange(evt, sliderValue) {
    this.setState({ sliderValue })
  }
  handleSelectChange(value) {
    this.setState({ colorFormat: value, open: true })
    setTimeout(() => {
      this.setState({ open: false })
    }, 3000)
  }
  handleSnackBarClose() {
    this.setState({ open: false })
  }
  render() {
    const colorArray = this.props.palette.colors[
      this.state.sliderValue
    ].map((color) => (
      <Color
        backgroundColor={color[this.state.colorFormat]}
        color={color}
        key={color.id}
      />
    ))
    return (
      <div className="Palette container-fluid" style={{ height: '100%' }}>
        <NavBar
          sliderValue={this.state.sliderValue}
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          handleTitleClick={() => this.props.handleTitleClick()}
        />
        <div className="Palette-row row">{colorArray}</div>
        <div className="footer p-2">
          <h5>
            {this.props.palette.emoji} {this.props.palette.paletteName}
          </h5>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          message={`Changed to ${this.state.colorFormat.toUpperCase()} format`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleSnackBarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    )
  }
}

export default Palette
