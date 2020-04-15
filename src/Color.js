import React, { Component } from 'react'
import './Color.css'

import { CopyToClipboard } from 'react-copy-to-clipboard'

export default class Color extends Component {
  render() {
    return (
      <div
        className="Color"
        style={{
          background: this.props.backgroundColor.color,
          width: '20%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          padding: '0.1rem',
        }}
      >
        <span
          style={{
            alignSelf: 'flex-end',
            justifySelf: 'start',
            overflow: 'hidden',
          }}
        >
          {this.props.backgroundColor.name.toUpperCase()}
        </span>
        <div style={{ alignSelf: 'center', justifySelf: 'center' }}>
          <CopyToClipboard text={this.props.backgroundColor.color}>
            <button className="copyBtn btn btn-light">Copy</button>
          </CopyToClipboard>
        </div>
        <span style={{ alignSelf: 'flex-end', justifySelf: 'end' }}>More</span>
      </div>
    )
  }
}
