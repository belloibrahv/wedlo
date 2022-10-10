import { FormButton } from "./Button"
import { useState } from "react"
import Form from "./Form"
import FormNav from "./FormNav"
import Field from "./Field"
import FormHeader from "./FormHeader"

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
    <Form component='form' onSubmit={handleSubmit}>
      <FormHeader text='Log in to continue to Codementor' />
      <Field type='email' name='email' label='Email *' value={fields.email} onChange={handleChange}/>
      <Field type='password' name='password' label= 'Password *' value={fields.password} onChange={handleChange}/>
      <FormButton btnType='submit' btnText='Log in'/>
      <FormNav href='/signup' text="Don't have an account?" navText='Sign up'/>
    </Form>
  )
}

export default Login
