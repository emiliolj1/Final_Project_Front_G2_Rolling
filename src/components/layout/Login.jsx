import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Container, Form, Button, FormGroup, Modal} from 'react-bootstrap'
import { jwtDecode } from "jwt-decode"
import '../styles/Login.css'
import { Link } from 'react-router-dom';


function Login({setUser}) {

  const [activeShow, setActive] = useState(false);
  const handleCloseActive = () => setActive(false);
  const handleShowActive = () => setActive(true);

  const [existeShow, setExiste] = useState(false);
  const handleCloseExiste = () => setExiste(false);
  const handleShowExiste = () => setExiste(true);

  const [passwordShow, setPassword] = useState(false);
  const handleClosePassword = () => setPassword(false);
  const handleShowPassword = () => setPassword(true);

  const { register, handleSubmit, formState:{errors}} = useForm()

  const onSubmit = async (data) => {
    const response = await fetch('https://backend-68i-salefulbo.onrender.com/login',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      credentials:'include',
      body: JSON.stringify(data)
    })

    if(response.status === 404){
      handleShowExiste()
      return
    }

    if(response.status === 400){
      handleShowPassword() //No funciona
      return
    }

    if(response.status === 401){
      handleShowActive()
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
    }
  }

  return (
    <>
      <Container className='loginContainer pt-5'>
        <div className='cont-login'>
          <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <h1 className='text-light text-center'>Logueate</h1>
            <FormGroup className='label-login mt-5 mb-2'>
              <Form.Label className='m-0'>Email</Form.Label>
              <Form.Control
                className='input-login'
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
            <FormGroup className='label-login'>
              <Form.Label className='m-0'>
                Contraseña
              </Form.Label>
              <Form.Control
                className='input-login'
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
            <Button type='submit' className='my-4 mx-auto loginBtn'>
              Login
            </Button>
            <p className='text-light fw-light fs-6'>Olvidaste tu contraseña? <Link to='/change' className='green-text'>Cambiala!</Link></p>
            <p className='text-center text-light my-2'>No tienes cuenta? <Link to='/register' className='green-text'>Registrate!</Link></p>
          </Form>
        </div>
      </Container>

      <Modal
        show={activeShow}
        onHide={() => setActive(false)}
        aria-labelledby="inactive"
      >
        <Modal.Header>
          <Modal.Title id="inactive">
            Tu usuario se encuentra Inhabilitado!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Comunicate con soporte!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseActive}>
            Cerrar
          </Button>
          <Link to='/contacto'>
            <Button className='btn-login1' onClick={handleCloseActive}>
              Soporte
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

      <Modal
        show={existeShow}
        onHide={() => setExiste(false)}
        aria-labelledby="noExiste"
      >
        <Modal.Header>
          <Modal.Title id="noExiste">
            El usuario ingresado no existe!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Verifica bien los datos e intenta nuevamente!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseExiste}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={passwordShow}
        onHide={() => setPassword(false)}
        aria-labelledby="password"
      >
        <Modal.Header>
          <Modal.Title id="password">
            La contraseña ingresada no es correcta!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Verifica bien los datos e intenta nuevamente!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClosePassword}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login
