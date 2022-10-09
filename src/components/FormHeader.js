import { Box } from "@mui/material"

const styles = {
  header: {
    fontSize: '23px',
    fontWeight: '600',
    marginBottom: '30px',
    textAlign: 'center'
  }
}
const FormHeader = ({text}) => {
  return (
    <Box sx={styles.header}>
      {text}
    </Box>
  ) 
}

export default FormHeader
