import { Box, Link } from "@mui/material"

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    color: '#ccc',
    fontSize: '14px',
    marginTop: '10px' 
  },
  link: {
    marginLeft: '5px',
    textDecoration: 'none'
  }
}

const FormNav = ({href, text, navText}) => {
  return (
    <Box sx={styles.container}>
      <Box>{text}</Box>
      <Link href={href} sx={styles.link}>{navText}</Link>
    </Box>
  )
} 

export default FormNav
