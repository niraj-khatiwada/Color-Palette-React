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
  }
  handleCopy() {
    this.setState({ copied: true })
    setTimeout(() => {
      this.setState({ copied: false })
    }, 1000)
  }
  render() {
    return (
      <div
        className={`Color ${this.state.copied}`}
        style={{
          background: this.props.backgroundColor.hex,
          width: '20%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '0.1rem',
        }}
      >
        {' '}
        <div className="Copied">
          <h1>Copied:{this.props.backgroundColor.hex}</h1>
        </div>
        <span className="ColorName">
          {this.props.backgroundColor.shadeName}
        </span>
        <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
          <CopyToClipboard
            text={this.props.backgroundColor.hex}
            onCopy={this.handleCopy}
          >
            <button className="copyBtn btn btn-light">Copy</button>
          </CopyToClipboard>
        </div>
        <span className="More">More</span>
      </div>
    )
  }
}
