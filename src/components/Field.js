import Box from "@mui/material/Box"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"

const styles = {
  container: {marginLeft: '30px'},
  textField: {
    backgroundColor: '#fafafa',
    maxWidth: '550px',
    width: '100%',
    margin: '5px auto 15px',
    fontSize: '15px',
    padding: '4px 0 4px 15px',
    lineHeight: '1.43'
  },
  label: {
    fontSize: '12px',
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
