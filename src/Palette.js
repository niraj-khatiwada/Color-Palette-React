import React, { Component } from 'react'

class Palette extends Component {
  render() {
    const paletteArray = this.props.palette.map((palette) =>
      palette.colors.map((color) => (
        <div
          style={{
            backgroundColor: color.color,
            width: '200px',
            height: '200px',
          }}
        ></div>
      ))
    )
    return <div className="Palette">{paletteArray}</div>
  }
}

export default Palette
