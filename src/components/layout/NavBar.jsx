// It has to be a simple navbar. It has to return to the beginning with its name or also include a HOME button.
// it must have two buttons, one to create the Sing in account, and one to change password. (Note this may change throughout the project)
// Must follow the trello color palette. 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = ({user, setUser}) => {

  // if the user is register or login, we show the button logout, if the user isnt register or logged, we show the button Register or login

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="home">Sale Fulbo?</Navbar.Brand>
        <Nav className="me-auto">
          <Link to='home'>Home</Link>
          <Link to='admin'>Admin</Link>
          </Nav>
            {
              user ? (
              <Button variant='warning' onClick={() => {}}>Logout</Button>
              ) : (
              <Button variant='warning' onClick={() => {}}>Register</Button>)
            }
      </Container>
    </Navbar>
    </>
  )
}

export default Header