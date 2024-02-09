// Must include a button or a link that leads to another page detailing the repository used, GITHUB.
// Must include a button or a link that leads to a page to report problems, etc.
// It must be the color palette used in the trello.
import { CheckSquare, Facebook, Instagram, Twitter } from 'react-bootstrap-icons'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'


const Footer = () => {
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
                      <img
                       alt=""
                       src="img/logo_transparent.png"
                       width="20"
                       height="120"
                       className="col-12 col-xs d-flex align-items-center"
                      />
                      <p className='text-light text-center copyRight mb-0'>Copyright © 2024 Sale Fulbo'</p>
                      <p className='text-light text-center copyRight'>Rolling Team.</p>
                      </Nav>
                    </Col>
                    <Col xs={5} sm={2} className='my-auto'>
                      <Nav className='flex-column text-center'>
                        <NavLink className='text-light text-decoration-none my-2 py-auto'><Instagram/> Instagram</NavLink>
                        <NavLink className='text-light text-decoration-none my-2 py-auto'><Facebook/> Facebook</NavLink>
                        <NavLink className='text-light text-decoration-none my-2 py-auto'><Twitter/> X (Twitter)</NavLink>
                      </Nav>
                    </Col>
                    <Col xs={7} sm={6}>
                      <Nav className='flex-column text-center'>
                        <NavLink to='/alquiler' className='text-light text-decoration-none my-1  py-auto fw-bold'>Alquila tu cancha!</NavLink>
                        <NavLink to='/galeria' className='text-light text-decoration-none my-1 py-auto'>Galeria de Imagenes</NavLink>
                        <NavLink to='/productos' className='text-light text-decoration-none my-1 py-auto'>Productos</NavLink>
                        <NavLink to='/contacto' className='text-light text-decoration-none my-1 py-auto'>Contacto</NavLink>
                        <NavLink to='/aboutUs' className='text-light text-decoration-none my-1 py-auto'>Sobre Nosotros</NavLink>
                      </Nav>
                    </Col>
                  </Row>
                </Container>
              </Nav>
            </Col>
            <Col xxl={4} xl={4} lg={4}>
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
    </>
  )
}

export default Footer