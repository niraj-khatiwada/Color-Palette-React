import React, { Component } from 'react'
import Color from './Color'

import { withStyles } from '@material-ui/styles'
import Slider from '@material-ui/core/Slider';



class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderValue: 900,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt) {
    this.setState({ sliderValue: evt.target.value })
    console.log(this.state)
  }
  render() {
    const colorArray = this.props.palette.colors[
      this.state.sliderValue
    ].map((color) => <Color backgroundColor={color} />)
    return (
      <div className="Palette container-fluid" style={{ height: '100%' }}>
        <nav>
        <Slider
        defaultValue={80}
        // getAriaValueText=
        aria-labelledby="discrete-slider-always"
        step={10}
        // marks={}
        valueLabelDisplay="on"
      />
          <input
            className="slider"
            type="range"
            min="100"
            max="900"
            step="100"
            value={this.state.sliderValue}
            onChange={this.handleChange}
          />
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
