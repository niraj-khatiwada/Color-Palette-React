import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import './App.css'
import Palette from './Palette'
import { colorShades } from './ColorShades'
import DefaultColorPalette from './DefaultColorPalette'
import PaletteCollection from './PaletteCollection'

class App extends Component {
  findPalette(id) {
    return DefaultColorPalette.find((palette) => palette.id === id)
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <PaletteCollection paletteArray={DefaultColorPalette} />
            }}
          />
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
              <Palette
                palette={colorShades(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route render={() => <h1>404 Error</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
