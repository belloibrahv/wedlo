import Field from "./Field"
import { FormButton } from "./Button"
import { useState } from "react"
import FormHeader from "./FormHeader"
import FormNav from "./FormNav"
import Form from "./Form"

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
    <Form component='form' onSubmit={handleSubmit}>
      <FormHeader text='Create an account to continue to Codementor' />
      <Field name='firstname' label='First name*' value={fields.firstname} onChange={handleChange}/>
      <Field name='lastname' label='Last name *' value={fields.lastname} onChange={handleChange}/>
      <Field type='email' name='email' label='Email *' value={fields.email} onChange={handleChange}/>
      <Field type='password' name='password' label='Password *' value={fields.password} onChange={handleChange}/>
      <FormButton btnType='submit' btnText='Sign up'/>
      <FormNav href='/wedlo' text="Already have an account?" navText='Log in'/>
    </Form>
  )
}

export default Register
