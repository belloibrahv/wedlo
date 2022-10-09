import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/Login"
import RegisterPage from "../pages/Register"

const UrlRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/register' element={<RegisterPage />}/>
    </Routes>
  )
}

export default UrlRoutes
