import React from 'react'
import './App.css'

import DefaultColorPalette from './DefaultColorPalette'
import Palette from './Palette'

function App() {
  return (
    <div className="App">
      <Palette palette={DefaultColorPalette[2]} />
    </div>
  )
}

export default App
