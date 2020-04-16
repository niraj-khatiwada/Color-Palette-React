import React from 'react'
import { withStyles } from '@material-ui/styles'

import Color from './Color'
import NavBar from './NavBar'

const styles = {
  More: {
    height: '100%',
  },
  allShades: {
    height: '86%',
  },
}

let levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

function More(props) {
  let allColor = []
  for (let level of levels) {
    allColor.push(
      props.allShades[level].find(
        (indColor) => indColor.id === props.routeProps.match.params.colorName
      )
    )
  }
  const shades = allColor.map((color) => {
    return <Color color={color} backgroundColor={color.hex} />
  })
  return (
    <div className={`${props.classes.More} container-fluid`}>
      <NavBar />
      <div className={`${props.classes.allShades} row`}>{shades}</div>
      <div className="footer"></div>
    </div>
  )
}

export default withStyles(styles)(More)
