import React, { Component } from 'react'
import styles from './Styles/PageStyles'
import { withStyles } from '@material-ui/styles'

function Page(props) {
  return <div className={props.classes.page}>{props.children}</div>
}

export default withStyles(styles)(Page)
