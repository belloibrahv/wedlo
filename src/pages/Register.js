import Grid from "@mui/material/Grid"
import LeftSide from "../components/LeftSide"
import Register from "../components/Register"
import RightSide from "../components/RightSide"

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    margin: '0 auto'
  }
} 

const RegisterPage = () => {
  return (
    <Grid container spacing={0} sx={styles.container}>
      <LeftSide />

      <RightSide>
        <Register />
      </RightSide>
    </Grid>
  ) 
}

export default RegisterPage
