import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Logo from "../components/Logo"
import Register from "../components/Register"

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    margin: '0 auto'
  },
  leftContainer: {
    backgroundColor: '#008aab', 
    color: '#fff',
  },
  leftContents: {
    margin: '240px auto',
    textAlign: 'center'
  },
  box: {
    padding: '0 30px'
  }
} 

const RegisterPage = () => {
  return (
   
    <Grid container spacing={0} sx={styles.container}>
      <Grid item xs={3.8} sx={styles.leftContainer}>
        <Container maxWidth="sm" sx={styles.leftContents}>
          <Logo />
          <Box sx={styles.box}>
            Codementor is a mentorship platform related to the Arc brand that helps you get better at coding. You can use the same account to log into both Codementor and Arc.
          </Box>
        </Container>
      </Grid>

      <Grid item xs={8.2}>
        <Register />
      </Grid>
    </Grid>
  ) 
}

export default RegisterPage
