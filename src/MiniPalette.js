import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'

import DeleteIcon from '@material-ui/icons/Delete'
import styles from './Styles/MiniPaletteStyles'

class MiniPalette extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={`${classes.card} card col-md-4 col-lg-3 col-sm-5 p-0`}>
        <div className={`card-body ${classes.cardBody} py-1`}>
          <DeleteIcon
            className={classes.deleteIcon}
            onClick={this.props.handleDelete}
          ></DeleteIcon>{' '}
          <div className="paletteColors row">
            {this.props.palette.colors.map((color) => {
              return (
                <div
                  key={`${color.name}`}
                  className="eachColor col-sm-3"
                  style={{
                    backgroundColor: color.color,
                    width: '2rem',
                    height: '2.3rem',
                  }}
                ></div>
              )
            })}
          </div>
          <div className={classes.paletteBrief}>
            <span className="card-text">{this.props.palette.paletteName}</span>
            <span className="card-text">{this.props.palette.emoji}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MiniPalette)
