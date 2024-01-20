// It has to be a simple navbar. It has to return to the beginning with its name or also include a HOME button.
// it must have two buttons, one to create the Sing in account, and one to change password. (Note this may change throughout the project)
// Must follow the trello color palette. 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const Header = ({user, setUser}) => {

  // if the user is register or login, we show the button logout, if the user isnt register or logged, we show the button Register or login

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
            </Nav>
            <Button href='#' className='btn-login'>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header