import React, { Component } from 'react'
import Color from './Color'

import './Palette.css'

import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'

import { NavLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderValue: 900,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt, sliderValue) {
    this.setState({ sliderValue })
  }
  render() {
    const colorArray = this.props.palette.colors[
      this.state.sliderValue
    ].map((color) => <Color backgroundColor={color} />)
    return (
      <div className="Palette container-fluid" style={{ height: '100%' }}>
        <nav className="navBar row">
          <div className="title">Color Shades</div>
          <div className="slider">
            <Slider
              defaultValue={this.state.sliderValue}
              min={100}
              step={100}
              max={900}
              onChange={this.handleChange}
              valueLabelDisplay="on"
            />
          </div>
          <div className="covertCode"></div>
        </nav>
        <div className="Palette-row row" style={{ height: '90%' }}>
          {colorArray}
        </div>
        {/* Footer */}
      </div>
    )
  }
}

export default Palette
