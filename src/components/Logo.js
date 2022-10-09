import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import wedlo from '../wedlo.png'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '60px',
    textDecoration: 'none',
  },
  logo: {
    width: '100px',
  },
  wedlo: {
    fontSize: '18px',
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#fff',
    letterSpacing: '13px'
  }
} 

const Logo = () => {
  return (
    <Link href="/" sx={styles.container}>
      <Avatar alt="Wedlo" src={wedlo} sx={styles.logo} />
      <Box style={styles.wedlo}>Wedlo</Box>
    </Link>
  )
}

export default Logo
