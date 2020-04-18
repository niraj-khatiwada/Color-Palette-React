import React, { Component } from 'react'

import { withStyles } from '@material-ui/styles'
import MiniPalette from './MiniPalette'

// Delete Confirm Dialog
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Styles/PaletteCollectionStyles'

class PaletteCollection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      id: '',
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.closeDialogue = this.closeDialogue.bind(this)
  }
  componentDidMount() {
    document.title = 'React  Colors'
  }
  handleCardClick(id) {
    this.props.handleCardClick(id)
  }
  handleDelete() {
    this.props.handleDelete(this.state.id)
    this.closeDialogue()
  }
  openDialogue(id, evt) {
    evt.stopPropagation()
    this.setState({ open: true, id: id })
  }
  closeDialogue() {
    this.setState({ open: false, id: '' })
  }
  render() {
    const { classes } = this.props
    const palette = this.props.paletteArray.map((palette) => {
      return (
        <CSSTransition key={palette.id} classNames="fade" timeout={500}>
          <MiniPalette
            key={palette.id}
            palette={palette}
            handleCardClick={this.handleCardClick.bind(this, palette.id)}
            openDialogue={this.openDialogue.bind(this, palette.id)}
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
          <Dialog
            onClose={this.closeDialogue}
            aria-labelledby="simple-dialog-title"
            open={this.state.open}
          >
            <DialogTitle id="simple-dialog-title">Confirm Delete</DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar className={classes.deleteAvatar}>
                    <DeleteRoundedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'Delete'} />
              </ListItem>
              <ListItem button onClick={this.closeDialogue}>
                <ListItemAvatar>
                  <Avatar className={classes.cancelAvatar}>
                    <ClearRoundedIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={'Cancel'} />
              </ListItem>
            </List>
          </Dialog>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteCollection)
