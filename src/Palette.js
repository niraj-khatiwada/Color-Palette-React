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
    this.handleMoreClick = this.handleMoreClick.bind(this)
    this.handleTitleClick = this.handleTitleClick.bind(this)
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
  handleMoreClick(color) {
    this.props.routeProps.history.push(
      `/palette/${this.props.routeProps.match.params.id}/${color.color.id}`
    )
  }
  handleTitleClick() {
    console.log('Clicked')
    this.props.routeProps.history.push('/')
  }
  render() {
    const colorArray = this.props.palette.colors[
      this.state.sliderValue
    ].map((color) => (
      <Color
        backgroundColor={color[this.state.colorFormat]}
        color={color}
        key={color.id}
        handleMoreClick={this.handleMoreClick}
        more={this.props.more}
      />
    ))
    return (
      <div className="Palette container-fluid" style={{ height: '100%' }}>
        <NavBar
          sliderValue={this.state.sliderValue}
          handleChange={this.handleChange}
          handleSelectChange={this.handleSelectChange}
          handleTitleClick={this.handleTitleClick}
          slider={true}
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
