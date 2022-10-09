import { createTheme, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/Login"
import RegisterPage from "../pages/Register"

const theme = createTheme({
  palette: {
    primary: {
      main: '#009fc6',
      light: '#008aab',
      dark: '#005672'
    },
    secondary: {
      main: '#999999',
      dark: '#fafafa'
    }
  }
})

const UrlRoutes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/register' element={<RegisterPage />}/>
      </Routes>
    </ThemeProvider>
  )
}

export default UrlRoutes
