import React, { Component } from 'react'
import Color from './Color'

import { withStyles } from '@material-ui/styles'

class Palette extends Component {
  render() {
    const colorArray = this.props.palette.colors.map((color) => (
      <Color backgroundColor={color} />
    ))
    return (
      <div className="Palette container-fluid" style={{ height: '100%' }}>
        {/* Nav */}
        <div className="Palette-row row" style={{ height: '90%' }}>
          {colorArray}
        </div>
        {/* Footer */}
      </div>
    )
  }
}

export default Palette
