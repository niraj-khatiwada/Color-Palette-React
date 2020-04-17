import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Palette from './Palette'
import { colorShades } from './ColorShades'
import DefaultColorPalette from './DefaultColorPalette'
import PaletteCollection from './PaletteCollection'

import { withStyles } from '@material-ui/styles'

import DiamondSunset from './DiamondSunset.svg'
import More from './More'

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

  handleDelete(id) {
    this.setState({
      defaultPalette: this.state.defaultPalette.filter(
        (item) => item.id !== id
      ),
    })
  }
  findColor(routeProps) {
    const selectedPalete = colorShades(
      this.state.defaultPalette.find((palette) => {
        return palette.id === routeProps.match.params.id
      })
    )
    return selectedPalete.colors
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
                routeProps={routeProps}
                more={true}
              />
            )}
          />
          <Route
            exact
            path="/palette/:id/:colorName"
            render={(routeProps) => (
              <More
                routeProps={routeProps}
                allShades={this.findColor(routeProps)}
                more={false}
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
