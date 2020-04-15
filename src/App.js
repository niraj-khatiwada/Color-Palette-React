import React, { Component } from 'react'

import './App.css'

import DefaultColorPalette from './DefaultColorPalette'
import Palette from './Palette'

import { colorShades } from './ColorShades'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={colorShades(DefaultColorPalette[5])} />
      </div>
    )
  }
}

export default App
