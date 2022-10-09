import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

const styles = {
  container: {marginLeft: '30px', marginTop: '10px',},
  btn: {
    width: '100%',
    maxWidth: '550px',
    backgroundColor: 'primary.main',
    color: 'common.white',
    '&:hover': {
      backgroundColor: 'primary.light'
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
