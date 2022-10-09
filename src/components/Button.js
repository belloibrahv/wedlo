import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const styles = {
  container: {marginLeft: '30px', marginTop: '20px',},
  btn: {
    width: '100%',
    maxWidth: '300px',
    backgroundColor: '#009fc6',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#008aab'
    }
  }
}

export const FormButton = ({btnText , btnType}) => {
  return (
    <Box sx={styles.container}>
      <Button sx={styles.btn} type={btnType} variant="contained" disableElevation>
        {btnText}
      </Button>
    </Box>
  ) 
}
