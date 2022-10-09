import Grid from "@mui/material/Grid"

const styles = {
  rightSide: {
    width: '100%',
    maxWidth: '630px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
  }
}

const RightSide = ({children}) => {
  return (
    <Grid item xs={8.2} sx={styles.rightSide}>{children}</Grid>
  )
}

export default RightSide
