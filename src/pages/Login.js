import Grid from "@mui/material/Grid"
import LeftSide from "../components/LeftSide"
import Login from "../components/Login"
import RightSide from "../components/RightSide"

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    textAlign: 'center',
    margin: '0 auto'
  },
} 

const LoginPage = () => {
  return (
    <Grid container spacing={0} sx={styles.container}>
      <LeftSide />

      <RightSide>
        <Login />
      </RightSide>
    </Grid>
  ) 
}

export default LoginPage
