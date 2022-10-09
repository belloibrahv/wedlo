import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"

const styles = {
  container: {marginLeft: '30px'},
  textField: {
    backgroundColor: '#fafafa',
    width: '100%',
    maxWidth: '300px',
    margin: '5px auto',
    fontSize: '15px'
  },
  label: {
    fontSize: '14px',
  }
}

const Field = ({type, name, label, value, onChange }) => {
  return (
    <Box component='container' sx={styles.container}>
      <InputLabel sx={styles.label}>{label}</InputLabel>
      <Input
        name={name}
        type={type}
        value={value}
        onChange={onChange}  
        autoComplete='true'
        sx={styles.textField}       
        />
    </Box>
  ) 
}

export default Field
