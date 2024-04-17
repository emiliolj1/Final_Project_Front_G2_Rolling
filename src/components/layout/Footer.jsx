import { CheckSquare, Facebook, Instagram, TwitterX} from 'react-bootstrap-icons'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const Footer = ({user, setUser}) => {
  const {register, handleSubmit, formState:{ errors }, reset} = useForm()

  const userResult = user;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [sub, setSub] = useState(false);
  const handleCloseSub = () => setSub(false);
  const handleShowSub = () => setSub(true);

  const onSubmit = (data) => {
    handleShowSub()
    reset()
  }

  return (
    <>
      <Navbar expand="lg" className="navColor" data-bs-theme='dark'>
        <Container fluid className='justify-content-around'>
          <Row className='container-fluid justify-content-center'>
            <Col xxl={8} xl={8} lg={8}> 
              <Nav>
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={4}>
                      <Nav className='flex-column text-center'>
                      <Link to='/home'>
                        <Image
                          fluid
                          src='https://i.imgur.com/3XsTeJc.png'
                          alt="logo sale fulbo'!"
                          height="120"
                          className="mb-3 col-12 col-xs d-flex align-items-center"
                        />
                      </Link>
                      <p className='text-light text-center copyRight mb-0'>Copyright © 2024 Sale Fulbo'</p>
                      <p className='text-light text-center copyRight'>Rolling Team.</p>
                      </Nav>
                    </Col>
                    <Col xs={5} sm={2} className='my-auto'>
                      <Nav className='flex-column text-center'>
                        <Link className='text-light text-decoration-none my-2 py-auto' to='/error'><Instagram/> Instagram</Link>
                        <Link className='text-light text-decoration-none my-2 py-auto' to='/error'><Facebook/> Facebook</Link>
                        <Link className='text-light text-decoration-none my-2 py-auto' to='/error'><TwitterX className='me-1'/>Twitter</Link>
                      </Nav>
                    </Col>
                    <Col xs={7} sm={6} className='my-auto'>
                      <Nav className='flex-column text-center'>
                        {
                          user && userResult.isLogged ?
                          <NavLink to='/alquiler' className='text-light text-decoration-none my-1  py-auto fw-bold'>Alquila tu cancha!</NavLink>
                          :
                          <NavLink className='text-light text-decoration-none my-2 py-auto fw-bold' onClick={handleShow}>Alquila tu cancha!</NavLink>
                        }
                        <NavLink to='/galeria' className='text-light text-decoration-none my-2 py-auto'>Galeria de Imagenes</NavLink>
                        <NavLink to='/contacto' className='text-light text-decoration-none my-2 py-auto'>Contacto</NavLink>
                        <NavLink to='/aboutUs' className='text-light text-decoration-none my-2 py-auto'>Sobre Nosotros</NavLink>
                      </Nav>
                    </Col>
                  </Row>
                </Container>
              </Nav>
            </Col>
            <Col xxl={4} xl={4} lg={4} className='my-auto'>
              <Form className='text-light' onSubmit={handleSubmit((data) => onSubmit(data))}>
                <h4>Suscribite a nuestro newsletter!</h4>
                <p className='mb-1'>Suscribete para informarte acerca de promociones y novedades!</p>
                <Row >
                  <Col xs={8} sm={9} >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label className='fw-bold'>Correo Electronico</Form.Label>
                          <Form.Control 
                            type="email" 
                            placeholder="nombre@ejemplo.com"
                            required
                            {...register('email', {
                              required: 'Este campo es Obligatorio',
                              minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'}
                            })
                            }
                            isInvalid={!!errors.email}
                          />
                      <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xs={4} sm={3} className='pt-2'>
                    <Button className='mt-4 fw-bold btn-login1 pt-0 px-2 fs-5' type='submit'><CheckSquare/></Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Debes loguearte para alquilar!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A continuacion logueate!
        </Modal.Body>
        <Modal.Footer>
          <Link to='/login'>
            <Button className='btn-login1' onsClick={handleClose}>
              Login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <Modal
        show={sub}
        onHide={handleCloseSub}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Te acabas de suscribir al Newsletter
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Vas a recibir novedades y ofertas de nuestra pagina!
        </Modal.Body>
        <Modal.Footer>
          <Link to='/'>
            <Button variant='success' onClick={handleCloseSub}>
              Volver a la pagina principal!
            </Button>
          </Link>
          <Button variant='danger' onClick={handleCloseSub}>
              Cerrar!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Footer