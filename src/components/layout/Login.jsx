import './components/styles/styleLogin.css'
import { useForm } from 'react-hook-form';
import '../styles/Login.css'
import { Container, Row, Col, Form, Button,} from 'react-bootstrap'

function Login({ setUser }) {

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

  return (
    <>
      <Container className='p-0'>
      <Row>
        <Col>
        <div className = 'toggle-container'>
          <div className = 'toggle'>
            <div className='toggle-panel toggle-right'>
              <h2>¡Crea tu cueta!</h2>
              <p>¿No tienes una cuenta creada?, ¡presione el siguiente boton!</p>
              <Button>
              Ingresar
              </Button>
            </div>
          </div>
        </div>
        </Col>
        <Col>
        <Form className='p-0' onSubmit={handleSubmit((data) => onSubmit(data))}>
        {/* set the handleSubmit for the control.*/}
        <h1 className='mt-5'>Ingresar</h1>
        <Form.Group className='m-2'>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
          className='ms-0 me-5 pe-5' 
          type='text'
          placeholder='Enter your name...'
          isInvalid={!!errors.email}
          // the method register allows you to register an input or select element and apply validations rules
          // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
          {...register('name', {required:'this field is required'})}
          />
          <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className='m-2'>
          <Form.Label>Correo</Form.Label>
          <Form.Control
          className='ms-0 me-5 pe-5' 
          type='email'
          placeholder='Enter your email...'
          isInvalid={!!errors.email}
          // the method register allows you to register an input or select element and apply validations rules
          // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
          {...register('email', {required:'this field is required'})}
          />
            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='m-2'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              className='ms-0 me-5 pe-5' 
              type='text'
              placeholder='Enter a Password...'
              isInvalid={!!errors.password}
              // the method register allows you to register an input or select element and apply validations rules
              // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
              {...register('password', {required:'this field is required'})}
              />
            <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
          </Form.Group>
          <Button className='m-3'>
          Loguearse
          </Button>
        </Form>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login
