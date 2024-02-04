// It has to be a simple navbar. It has to return to the beginning with its name or also include a HOME button.
// it must have two buttons, one to create the Sing in account, and one to change password. (Note this may change throughout the project)
// Must follow the trello color palette. 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const Header = ({setUser}) => {

  const { isLogged }  = setUser()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              !user.logged
                ? <Button href='#' className='btn-login1'>
                    Login
                  </Button>
                : <>
                    <Button className='btn-login1' onClick={handleShow}>
                      <PersonCircle className='m-0 p-0 me-2'/> Bienvenido
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

export default Header