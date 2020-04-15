import React, { Component } from 'react'

import Slider from '@material-ui/core/Slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      format: 'hex',
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }
  handleSelectChange(evt) {
    this.setState({ format: evt.target.value })
    this.props.handleSelectChange(evt.target.value)
  }
  render() {
    return (
      <nav className="navBar row">
        <div className="title">Color Shades</div>
        <div className="slider">
          <h6>Change level</h6>
          <Slider
            defaultValue={this.props.sliderValue}
            min={100}
            step={100}
            max={900}
            onChange={this.props.handleChange}
            valueLabelDisplay="on"
          />
        </div>
        <div className="convert">
          <Select value={this.state.format} onChange={this.handleSelectChange}>
            <MenuItem value="hex">Hex #fff</MenuItem>
            <MenuItem value="rgb">RGB (255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA (255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
      </nav>
    )
  }
}
