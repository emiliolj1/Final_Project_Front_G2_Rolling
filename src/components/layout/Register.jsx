import { useForm } from 'react-hook-form';
import { Container, Form, Button, FormGroup} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import '../styles/Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  const {register, handleSubmit, formState:{ errors }, reset} = useForm()
  const [showLogged, setShowLogged] = useState(false);
  const [showError, setShowError] = useState(false);

  
  const handleCloseLogged = () => {setShowLogged(false)};
  const handleCloseError = () => {setShowError(false)}

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
    if(response.status === 200){
      console.log(responseData);
      setShowLogged(true);
    }
    if(response.status === 400){
      setShowError(true);
    }
    
  }

  return(
    <>
      <Container className='loginContainer'>
        <Container className='login-box'>
          <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <h1 className='text-light text-center'>Registrate!</h1>
            <FormGroup className='user-box mt-5 mb-1'>
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
            <FormGroup className='user-box mb-1'>
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
            <FormGroup className='user-box'>
              <Form.Label className='m-0'>
                Contraseña
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
            <Button type='submit' className='my-4 mx-auto btn-login'>
              Registrarse
            </Button>
            <p className='text-center text-light'>Ya tienes una cuenta? <Link to='/login' className='green-text'>Ingresa aqui!</Link></p>
          </Form>
        </Container>
      </Container>
      <Modal
        show={showLogged}
        onHide={handleCloseLogged}
        backdrop="static"
        keyboard={false}
        aria-labelledby="registrado"
      >
        <Modal.Header closeButton>
          <Modal.Title id="registrado">
            Creaste el usuario Correctamente!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A continuacion logueate!
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-login1' onClick={() => {window.location.href='/login'}}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showError}
        onHide={handleCloseError}
        backdrop="static"
        keyboard={false}
        aria-labelledby="Error"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Error">
            Error al crear el usuario!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Comunicate con Soporte!
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn-login1' onClick={() => {window.location.href='/contacto'}}>
            Contactanos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Register