import React, { Component } from 'react'
import './Color.css'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/styles'

import chroma from 'chroma-js'

const styles = {
  ColorName: {
    color: (props) =>
      chroma(props.backgroundColor).luminance() < 0.15 ? 'white' : 'black',
  },
}

class Color extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      copied: false,
    }
    this.handleCopy = this.handleCopy.bind(this)
    this.handleMoreClick = this.handleMoreClick.bind(this)
  }
  handleCopy() {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 1000)
  }
  handleMoreClick() {
    this.props.handleMoreClick(this.props)
  }
  render() {
    return (
      <div
        className={`Color ${this.state.copied}`}
        style={{
          background: this.props.backgroundColor,
        }}
      >
        <div className="Copied">
          <h1 className={this.props.classes.ColorName}>
            Copied:{this.props.backgroundColor}
          </h1>
        </div>
        <span className={`${this.props.classes.ColorName} ColorName`}>
          {this.props.color.shadeName}
        </span>
        <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
          <CopyToClipboard
            text={this.props.backgroundColor}
            onCopy={this.handleCopy}
          >
            <button className="copyBtn btn btn-light">Copy</button>
          </CopyToClipboard>
        </div>
        {this.props.more === true ? (
          <button
            className="More btn btn-dark"
            style={{ padding: '0 0.2rem', opacity: '0.5', fontSize: '0.7rem' }}
            onClick={this.handleMoreClick}
          >
            More
          </button>
        ) : null}
      </div>
    )
  }
}

export default withStyles(styles)(Color)
