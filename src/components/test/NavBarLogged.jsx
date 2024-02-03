import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { PersonCircle } from 'react-bootstrap-icons';

//ESTO NO VA A FUNCIONAR HASTA QUE HAGAMOS EL ENLACE CON LA BASE DE DATOS Y SE PUEDAN EXTRAER LOS DATOS PARA LAS VALIDACIONES, PERO ASI QUEDARIA EL MODELO DEL NAVBAR REACTIVO A CUALQUIER CIRCUNSTANCIA

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let user = {
    logged: true,
    admin: true
  }

  return (
    <>
      <Navbar expand="lg" className="navColor" data-bs-theme="dark" fixed='top'>
        <Container className=''>
          <Navbar.Brand href="#home" className='fw-bold'>Sale Fulbo'?</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Alquila tu Cancha!</Nav.Link>
              <NavDropdown title="+Más" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Nosotros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Contacto
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Galeria de Imagenes
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Productos</Nav.Link>
            </Nav>
            {
              !user.logged
                ? <Button href='#' className='btn-login'>
                    Login
                  </Button>
                : <>
                    <Button className='btn-login' onClick={handleShow}>
                      <PersonCircle className='m-0 p-0'/> Bienvenido
                    </Button> 
                    <Offcanvas show={show} onHide={handleClose} placement='end' className='navColor'>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Hola Emilio!</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav defaultActiveKey="/home" className="flex-column fs-6 fw-bold">
                          <Nav.Link href="/home">Mi cuenta</Nav.Link>
                          {
                            !user.admin
                            ? <>
                                <hr/>
                                <Nav.Link >Cerrar Sesion</Nav.Link>
                              </>
                            : <>
                                <Nav.Link >Administracion</Nav.Link>
                                <hr/>
                                <Nav.Link >Cerrar Sesion</Nav.Link>
                              </>
                          }
                        </Nav>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar