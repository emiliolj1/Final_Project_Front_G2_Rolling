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



const Footer = ({user, setUser}) => {

  const userResult = user;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                          src='img/newLogo.png'
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
                        <NavLink to='/error' className='text-light text-decoration-none my-2 py-auto'><Instagram/> Instagram</NavLink>
                        <NavLink to='/error' className='text-light text-decoration-none my-2 py-auto'><Facebook/> Facebook</NavLink>
                        <NavLink to='/error' className='text-light text-decoration-none my-2 py-auto'><TwitterX className='me-1'/> Twitter</NavLink>
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
              <Form className='text-light'>
                <h4>Suscribite a nuestro newsletter!</h4>
                <p className='mb-1'>Suscribete para informarte acerca de promociones y novedades!</p>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='fw-bold'>Correo Electronico</Form.Label>
                  <Row >
                    <Col xs={8} sm={9} >
                      <Form.Control 
                        type="email" 
                        placeholder="nombre@ejemplo.com"
                        required
                      />
                    </Col>
                    <Col xs={4} sm={3}>
                      <Button className='fw-bold btn-login1 pt-0 px-2 fs-5' type='submit'><CheckSquare/></Button>
                    </Col>
                  </Row>
                </Form.Group>
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
            <Button className='btn-login1' onClick={handleClose}>
              Login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Footer