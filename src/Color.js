import React, { Component } from 'react'
import './Color.css'

import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class Color extends Component {
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
  handleMoreClick(color) {}
  render() {
    return (
      <div
        className={`Color ${this.state.copied}`}
        style={{
          background: this.props.backgroundColor,
          width: '20%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '0.1rem',
        }}
      >
        <div className="Copied">
          <h1>Copied:{this.props.backgroundColor}</h1>
        </div>
        <span className="ColorName">{this.props.color.shadeName}</span>
        <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
          <CopyToClipboard
            text={this.props.backgroundColor}
            onCopy={this.handleCopy}
          >
            <button className="copyBtn btn btn-light">Copy</button>
          </CopyToClipboard>
        </div>
        <button
          className="More btn btn-dark"
          style={{ padding: '0 0.2rem', opacity: '0.5', fontSize: '0.7rem' }}
          onClick={this.handleMoreClick(this.props.color)}
        >
          More
        </button>
      </div>
    )
  }
}
