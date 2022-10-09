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
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

const Register = () => {
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
    setfields(initialData)
  }

  return (
    <Box component='form' onSubmit={handleSubmit} sx={styles.form}>
      <FormHeader text='Create an account to continue to Codementor' />
      <Field name='firstname' label='First name*' value={fields.firstname} onChange={handleChange}/>
      <Field name='lastname' label='Last name *' value={fields.lastname} onChange={handleChange}/>
      <Field type='email' name='email' label='Email *' value={fields.email} onChange={handleChange}/>
      <Field type='password' name='password' label='Password *' value={fields.password} onChange={handleChange}/>
      <FormButton btnType='submit' btnText='Log in'/>
      <FormNav href='/' text="Already have an account?" navText='Log in'/>
    </Box>
  )
}

export default Register
