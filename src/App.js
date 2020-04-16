import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Palette from './Palette'
import { colorShades } from './ColorShades'
import DefaultColorPalette from './DefaultColorPalette'
import PaletteCollection from './PaletteCollection'

import { withStyles } from '@material-ui/styles'

import DiamondSunset from './DiamondSunset.svg'

const styles = {
  App: {
    backgroundColor: '#c691ff',
    background: `url(${DiamondSunset})center/cover scroll no-repeat`,
    height: '100vh',
    overflow: 'scroll',
  },
}

class App extends Component {
  state = {
    defaultPalette: DefaultColorPalette,
  }
  findPalette(id) {
    return this.state.defaultPalette.find((palette) => palette.id === id)
  }
  handleCardClick(routeprops, id) {
    routeprops.history.push(`palette/${id}`)
  }
  handleTitleClick(routeProps) {
    routeProps.history.push('/')
  }
  handleDelete(id) {
    this.setState({
      defaultPalette: DefaultColorPalette.filter((item) => item.id !== id),
    })
  }
  render() {
    return (
      <div className={this.props.classes.App}>
        <Switch>
          <Route
            exact
            path="(/|/palette)"
            render={(routeProps) => {
              return (
                <PaletteCollection
                  paletteArray={this.state.defaultPalette}
                  handleCardClick={this.handleCardClick.bind(this, routeProps)}
                  handleDelete={this.handleDelete.bind(this)}
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
                handleTitleClick={this.handleTitleClick.bind(this, routeProps)}
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
