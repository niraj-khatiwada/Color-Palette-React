import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'

import Palette from './Palette'
import { colorShades } from './ColorShades'
import DefaultColorPalette from './DefaultColorPalette'
import PaletteCollection from './PaletteCollection'
import Page from './Page'

import { withStyles } from '@material-ui/styles'

// Transitions
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import DiamondSunset from './DiamondSunset.svg'
import More from './More'

const styles = {
  App: {
    backgroundColor: '#c691ff',
    background: `url(${DiamondSunset})center/cover fixed no-repeat`,
    height: '100vh',
  },
  '@global': {
    '.slide-exit': {
      transform: 'translateX(0)',
    },
    '.slide-exit-active': {
      transform: 'translateX(-1000vw)',
      transition: 'transform 700ms ease-in-out',
    },
    '.slide-enter': {
      opacity: 0,
    },
    '.slide-enter-active': {
      opacity: 1,
      transition: 'opacity 300ms ease-in-out',
    },
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
      <Route
        render={({ location }) => (
          <TransitionGroup className={this.props.classes.App}>
            <CSSTransition key={location.key} classNames="slide" timeout={300}>
              <Switch location={location}>
                <Route
                  exact
                  path="(/|/palette)"
                  render={(routeProps) => {
                    return (
                      <Page>
                        <PaletteCollection
                          paletteArray={this.state.defaultPalette}
                          handleCardClick={this.handleCardClick.bind(
                            this,
                            routeProps
                          )}
                          handleDelete={this.handleDelete.bind(this)}
                        />
                      </Page>
                    )
                  }}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={colorShades(
                          this.findPalette(routeProps.match.params.id)
                        )}
                        routeProps={routeProps}
                        more={true}
                      />
                    </Page>
                  )}
                />

                <Route
                  exact
                  path="/palette/:id/:colorName"
                  render={(routeProps) => (
                    <Page>
                      <More
                        routeProps={routeProps}
                        allShades={this.findColor(routeProps)}
                        more={false}
                      />
                    </Page>
                  )}
                />
                <Route render={() => <h1>404 Error</h1>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      ></Route>
    )
  }
}

export default withStyles(styles)(App)
