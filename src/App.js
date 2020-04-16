import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Palette from './Palette'
import { colorShades } from './ColorShades'
import DefaultColorPalette from './DefaultColorPalette'
import PaletteCollection from './PaletteCollection'

import { withStyles } from '@material-ui/styles'

const styles = {
  App: {
    background:
      "url('https://wallpapershome.com/images/pages/pic_h/21288.jpg')center/cover fixed no-repeat",
    height: '100vh',
  },
}

class App extends Component {
  findPalette(id) {
    return DefaultColorPalette.find((palette) => palette.id === id)
  }
  handleCardClick(routeprops, id) {
    routeprops.history.push(`palette/${id}`)
  }
  render() {
    return (
      <div className={this.props.classes.App}>
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => {
              return (
                <PaletteCollection
                  paletteArray={DefaultColorPalette}
                  handleCardClick={this.handleCardClick.bind(this, routeProps)}
                />
              )
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

export default withStyles(styles)(App)
