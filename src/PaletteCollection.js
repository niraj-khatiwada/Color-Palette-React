import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Styles/PaletteCollectionStyles'

class PaletteCollection extends Component {
  handleCardClick(id) {
    this.props.handleCardClick(id)
  }
  handleDelete(id, evt) {
    evt.stopPropagation()
    this.props.handleDelete(id)
  }
  render() {
    const { classes } = this.props
    const palette = this.props.paletteArray.map((palette) => {
      return (
        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
          <MiniPalette
            key={palette.id}
            palette={palette}
            handleDelete={this.handleDelete.bind(this, palette.id)}
            handleCardClick={this.handleCardClick.bind(this, palette.id)}
          />
        </CSSTransition>
      )
    })
    return (
      <div className="PaletteCollection">
        <nav className={`container-fluid p-2 ${this.props.classes.navBar}`}>
          <h3>React Colors</h3>
        </nav>
        <div className="container">
          <TransitionGroup className="row justify-content-center m-0">
            {palette}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteCollection)
