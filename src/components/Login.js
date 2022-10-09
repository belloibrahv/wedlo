import Box from "@mui/material/Box"
import Field from "./Field"
import { FormButton } from "./Button"
import { useState } from "react"
import FormHeader from "./FormHeader"
import FormNav from "./FormNav"

const styles = {
  form: {
    height: '600px',
    margin: '0 350px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left'
  },
}

const initialData = {
  email: '',
  password: ''
}

const Login = () => {
  const [fields, setfields] = useState(initialData)

  const handleChange = (e) => {
    setfields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fields)
  }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={styles.form}>
      <FormHeader text='Log in to continue to Codementor' />
      <Field type='email' name='email' label='Email *' value={fields.email} onChange={handleChange}/>
      <Field type='password' name='password' label= 'Password *' value={fields.password} onChange={handleChange}/>
      <FormButton btnType='submit' btnText='sign in'/>
      <FormNav href='/register' text="Don't have an account?" navText='Sign up'/>
    </Box>
  )
}

export default Login
