import React, { Component } from 'react'

import Slider from '@material-ui/core/Slider'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import { withStyles } from '@material-ui/styles'

const styles = {
  title: {
    cursor: 'pointer',
    fontSize: '2rem',
  },
}

class NavBar extends Component {
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
        <div
          className={this.props.classes.title}
          onClick={() => this.props.handleTitleClick()}
        >
          Color Shades
        </div>
        {this.props.slider ? (
          <div className="slider">
            <h6 style={{ marginRight: '1rem' }}>Level </h6>
            <Slider
              defaultValue={900}
              min={100}
              step={100}
              max={900}
              onChange={this.props.handleChange}
              valueLabelDisplay="on"
            />
          </div>
        ) : null}
        <div className="convert">
          <Select value={this.state.format} onChange={this.handleSelectChange}>
            <MenuItem value="hex">Hexadecimal #fff</MenuItem>
            <MenuItem value="rgb">RGB (255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA (255, 255, 255, 1)</MenuItem>
          </Select>
        </div>
      </nav>
    )
  }
}

export default withStyles(styles)(NavBar)
