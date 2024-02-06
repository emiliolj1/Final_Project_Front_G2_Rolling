import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PersonCircle } from 'react-bootstrap-icons';

import { useState } from 'react';


const Header = ({user, setUser}) => {

  const userResult = user;
  console.log(userResult);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    const response = await fetch('http://localhost:4000/logout')
    if(response.status === 400){
      console.log('esta mal la funcion loco');
    }
    if(response.status === 200){
      const data = await response.json();
      console.log(data);
      console.log('crack de las tinieblas');
      localStorage.clear();
      setUser({
        token: null, 
        userInfo: null, 
        isLogged: false 
      });
      return
    }
  }

  return (
    <>
      <Navbar expand="lg" className="navColor" data-bs-theme="dark" fixed='top'>
        <Container className=''>
          <Nav.Item>
            
          </Nav.Item>
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
              user && userResult.isLogged ? 
              <>
                  <Button className='btn-login1' onClick={handleShow}>
                      <PersonCircle className='m-0 p-0 me-2'/> Bienvenido
                    </Button> 
                    <Offcanvas show={show} onHide={handleClose} placement='end' className='navColor'>
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Hola!</Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav defaultActiveKey="/home" className="flex-column fs-6 fw-bold">
                          <Nav.Link href="/home">Mi cuenta</Nav.Link>
                          <Nav.Link href="/home">Mis Reservas</Nav.Link>
                          {
                            user && userResult.userInfo.role === 'admin'
                            ? 
                            <>
                                <Nav.Link >Administracion</Nav.Link>
                                <hr/>
                                <Nav.Link >Cerrar Sesion</Nav.Link>
                              </>
                            : 
                              <>
                                <hr/>
                                <Button onClick={() => handleLogout}>Cerrar Sesion</Button>
                              </>
                          }
                        </Nav>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
              :
              <Button href='/login' className='btn-login1'>
                    Login
              </Button>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header