import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { PersonCircle } from 'react-bootstrap-icons';
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Header = ({user, setUser}) => {

  const userResult = user;

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    const response = await fetch('https://backend-68i-salefulbo.onrender.com/logout')
    if(response.status === 400){
      console.log('Hubo un error en el procesamiento de la peticion');
    }
    if(response.status === 200){
      const data = await response.json();
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
          <Navbar.Brand className='fw-bold'><Link to='/home' className='text-light text-decoration-none'>Sale Fulbo'?</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className='mt-2 me-3 text-light text-decoration-none' to="/home">Home</NavLink>
              {
                user && userResult.isLogged ?
                <NavLink to='/alquiler' className='mt-2 me-3 text-light text-decoration-none'>Alquila tu Cancha!</NavLink>
                :
                <NavLink className='mt-2 me-3 text-light text-decoration-none' onClick={handleShowModal}>Alquila tu Cancha!</NavLink>
              }
              <NavDropdown className='me-3' title="+Más" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink className='mt-2 text-light text-decoration-none' to='/aboutUs'>Nosotros</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <NavLink className='mt-2 text-light text-decoration-none' to='/contacto'>Contacto</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className='mt-2 text-light text-decoration-none' to="/galeria">Galeria de Imagenes</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {
              user && userResult.isLogged ? 
              <>
                  <Button className='btn-login1' onClick={handleShow}>
                      <PersonCircle className='m-0 p-0 me-2'/> Bienvenido
                    </Button> 
                    <Offcanvas show={show} onHide={handleClose} placement='end' className='navColor'>
                      <Offcanvas.Header closeButton>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav defaultActiveKey="/home" className="flex-column fs-6 fw-bold">
                          {
                            user && userResult.userInfo.Role !== 'client'
                            ? 
                              <>
                                <NavLink className='mt-2 text-light text-decoration-none' to='/misReservas'>Mis Reservas</NavLink>
                                <NavLink className='mt-2 text-light text-decoration-none' to='/admin'>Administracion</NavLink>
                                <hr/>
                                <Button variant='danger' onClick={handleLogout}>Cerrar Sesion</Button>
                              </>
                            : 
                              <>
                                <NavLink className='mt-2 text-light text-decoration-none' to='/misReservas'>Mis Reservas</NavLink>
                                <hr/>
                                <Button variant='danger' onClick={handleLogout}>
                                  Cerrar Sesion
                                </Button>
                              </>
                          }
                        </Nav>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </>
              :
              <Link to='/login'>
                <Button className='btn-login1'>
                    Login
                </Button>
              </Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
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
            <Button className='btn-login1' onClick={handleCloseModal}>
              Login
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header