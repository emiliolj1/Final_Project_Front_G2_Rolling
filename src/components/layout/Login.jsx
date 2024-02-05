import { useForm } from 'react-hook-form';
import { Container, Form, Button, FormGroup} from 'react-bootstrap'
import { Link } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import '../styles/login.css'


function Login({setUser}) {

  const { register, handleSubmit, formState:{errors}} = useForm()

  const onSubmit = async (data) => {
    const response = await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      credentials:'include',
      body: JSON.stringify(data)
    })

    if(response.status === 400){
      return
    }

    if(response.status === 200){
      const responseData = await response.json();

      const decoded = jwtDecode(responseData.accessToken);

      localStorage.setItem('token', responseData.accessToken);
      localStorage.setItem('isUserLogged', true);
      setUser({
        token: responseData.accessToken,
        userInfo: decoded,
        isLogged: true
      })
      console.log(decoded);
    }
  }



  return (
    <Container className='login-box'>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <h1 className='text-light text-center'>Logueate</h1>
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
        <p className='text-center text-light my-2'>No tienes cuenta? <a>Registrate!</a></p>
      </Form>
    </Container>
  )
}

export default Login
