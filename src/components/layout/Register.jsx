import { useForm } from 'react-hook-form';
import { Container, Form, Button, FormGroup} from 'react-bootstrap'
import '../styles/Register.css'

const Register = () => {
  const {register, handleSubmit, formState:{ errors }, reset} = useForm()
  
  const onSubmit = async (data) => {
    const fullData = {...data, role: 'client'}
    console.log(fullData);
    const response = await fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify(fullData)
    })
    const responseData = await response.json();
    console.log(responseData);

    reset();
  }

  return(
    <>
      <Container className='login-box'>
        <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <h1 className='text-light text-center'>Registrate!</h1>
          <FormGroup className='user-box mt-5 mb-3'>
            <Form.Label className='m-0'>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa tu nombre...'
              {...register('Name', {
                required: 'Este campo es Obligatorio',
                minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                maxLength: {value: 35, message: 'Este campo no puede contener mas de 35 caracteres'}
              })}
              isInvalid={!!errors.Name}
            />
            <Form.Control.Feedback type='invalid'>{errors.Name?.message}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className='user-box mt-5 mb-3'>
            <Form.Label className='m-0'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Ingresa tu email...'
              {...register('email', {
                required: 'Este campo es Obligatorio',
                minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
              })}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup className='user-box mb-5'>
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control
              type='password'
              placeholder="Ingresa tu contraseña..."
              {...register('password', {
                required: 'Este campo es Obligatorio',
                minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
              })
              }
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
          </FormGroup>
          <Button type='submit' className='mx-auto btn-login'>
            Login
          </Button>
          <p className='text-center text-light my-2'>Ya tienes una cuenta? <a>Ingresa aqui!</a></p>
        </Form>
      </Container>
    </>
  )
}

export default Register