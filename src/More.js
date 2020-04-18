import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import Color from './Color'
import NavBar from './NavBar'

const styles = {
  More: {
    height: '100%',
  },
  allShades: {
    height: '90%',
  },
}

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

class More extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorFormat: 'hex',
      open: false,
    }
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSnackBarClose = this.handleSnackBarClose.bind(this)
  }
  handleSelectChange(value) {
    this.setState({ colorFormat: value, open: true })
    if (this.timerID) clearTimeout(this.timerID)
    this.timerID = setTimeout(() => {
      this.setState({ open: false })
    }, 3000)
  }
  handleSnackBarClose() {
    this.setState({ open: false })
  }
  render() {
    let allColor = []
    for (let level of levels) {
      allColor.push(
        this.props.allShades[level].find(
          (indColor) =>
            indColor.id === this.props.routeProps.match.params.colorName
        )
      )
    }
    const shades = allColor.map((color) => {
      return (
        <Color
          color={color}
          backgroundColor={color[this.state.colorFormat]}
          more={this.props.more}
          key={`${color.id}${color.shadeName}`}
        />
      )
    })
    return (
      <div className={`${this.props.classes.More} container-fluid p-0`}>
        <NavBar
          handleTitleClick={() => this.props.routeProps.history.push('/')}
          handleSelectChange={this.handleSelectChange}
        />
        <div className={`${this.props.classes.allShades} Palette-row`}>
          {shades}
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          message={`Changed to ${this.state.colorFormat.toUpperCase()} format`}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.handleSnackBarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </div>
    )
  }
}

export default withStyles(styles)(More)
