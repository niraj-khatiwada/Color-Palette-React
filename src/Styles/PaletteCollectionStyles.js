export default {
  paletteBrief: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '2rem',
    alignItems: 'center',
    color: 'black',
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  },
  card: {
    margin: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:hover svg': {
      visibility: 'visible',
      cursor: 'default',
    },
  },

  navBar: {
    '& h3': {
      color: 'white',
      fontFamily:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    },
  },
  deleteIcon: {
    position: 'absolute',
    zIndex: '1',
    right: '0.3rem',
    backgroundColor: 'red',
    padding: '0.5rem 0.6rem',
    visibility: 'hidden',
    fontSize: '2.5rem',
  },
  cardBody: {
    position: 'relative',
  },
}
