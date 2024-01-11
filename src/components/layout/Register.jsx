import { useForm } from 'react-hook-form';
import './components/styles/styleLogin.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const RegisterComponent = () => {
  const { register, handleSubmit, formState:{errors}} = useForm()
  
  // create the function handleSubmit for the fetch of the backend and show the "your account has been created"
  const onSubmit = async() => {
    // with full data we can copy all the properties of the data with the operator spray (...)
    const fulldata = {...data, role:'Client'}
    // we call https post to the fetch's url
    const response = await fetch('https://localhost:4000/users',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      credentials:'include',
      body: JSON.stringify(fulldata)
    })
    const responseData =  await response.json()

    console.log(responseData);
  }

  return(
    <>
    </>
  )
}