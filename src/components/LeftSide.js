import { Box, Container, Grid } from "@mui/material"
import Logo from "./Logo"

const styles = {
  leftContainer: {
    width: '100%',
    maxWidth: '490px',
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: 'primary.dark',
    backgroundImage: "url('https://cdn.arc.dev/images/auth/codementor-background-top.png'),url('https://cdn.arc.dev/images/auth/codementor-background-bottom.png')",
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "left top, right bottom",
    backgroundSize: "266px, 335px",
    color: '#fff',
  },
  leftContents: {
    margin: '240px auto',
  },
  box: {
    padding: '0 30px'
  }
}

const LeftSide = () => {
  return (
    <Grid item xs={3.8} sx={styles.leftContainer}>
      <Container maxWidth="sm" sx={styles.leftContents}>
        <Logo />
        <Box sx={styles.box}>
          Codementor is a mentorship platform related to the Arc brand that helps you get better at coding. You can use the same account to log into both Codementor and Arc.
        </Box>
      </Container>
  </Grid>
  )
}

export default LeftSide