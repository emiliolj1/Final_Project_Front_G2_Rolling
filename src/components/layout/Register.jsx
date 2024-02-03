import { useForm } from 'react-hook-form';
import '../styles/Register.css'
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
    <Container>
      <Row>
        <Col>
        <Form className='p-0' onSubmit={handleSubmit((data) => onSubmit(data))}>
          {/* set the handleSubmit for the control.*/}
          <h2 className='mt-5'>Crea tu cuenta</h2>
          <Form.Group className='m-2'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className='ms-0 me-5 pe-5' 
              type='text'
              placeholder='Ingrese su nombre...'
              isInvalid={!!errors.email}
              // the method register allows you to register an input or select element and apply validations rules
              // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
              {...register('name', {required:'este campo es requerido'}, {maxLength: 20}, {minLength: 4})}
              />
              <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='m-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              className='ms-0 me-5 pe-5' 
              type='email'
              placeholder='Ingrese su email...'
              isInvalid={!!errors.email}
              // the method register allows you to register an input or select element and apply validations rules
              // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
              {...register('email', {required:'este campo es requerido'}, {maxLength: 25}, {minLength: 5})}
              />
            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='m-2'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              className='ms-0 me-5 pe-5' 
              type='text'
              placeholder='Ingrese una contrasena...'
              isInvalid={!!errors.password}
              // the method register allows you to register an input or select element and apply validations rules
              // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
              {...register('password', {required:'este campo es requerido'}, {maxLength: 25}, {minLength: 5})}
              />
            <Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
          </Form.Group>
            {/* className was used for css styles, check it in the ther folder styles/stylesLogin.css */}
            {/* there is a bug in the button, we need to fix it. */}
            <Button className='IngresarBtn'>
              Registrarse
            </Button>
          </Form>
        </Col>
        <Col>
        <div className = 'toggle-container'>
          <div className = 'toggle'>
            <div className='toggle-panel toggle-right'>
              <h1>Bienvenido.</h1>
              <p>Ya tienes una cuenta creada?, si la tienes por favor presiona el siguiente boton.</p>
              {/* there is a bug in the button, we need to fix it. */}
              <Button>
              Ingresar
              </Button>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RegisterComponent