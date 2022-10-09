import { Box, Link } from "@mui/material"

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    color: 'secondary.main',
    fontSize: '12px',
    marginTop: '6px',
    textAlign: 'center',
    lineHeight: '1.5'
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
