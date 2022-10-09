import Box from "@mui/material/Box"

const styles = {
  form: {
    width: '360px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItem: 'center',
    textAlign: 'left'
  },
}

const Form = ({ component, onSubmit, children }) => {
  return (
    <Box component={component} onSubmit={onSubmit} sx={styles.form}>{children}</Box>
  )
}

export default Form
