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
  }
  handleSnackBarClose() {
    this.setState({ open: false })
  }
  render() {
    const colorArray = this.props.palette.colors[
      this.state.sliderValue
    ].map((color) => <Color backgroundColor={color[this.state.colorFormat]} />)
    return (
      <div className="Palette container-fluid" style={{ height: '100%' }}>
        <NavBar
          sliderValue={this.state.sliderValue}
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
        />
        <div className="Palette-row row" style={{ height: '90%' }}>
          {colorArray}
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
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
