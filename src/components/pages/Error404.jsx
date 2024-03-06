import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom'


const Error404 = () => {
  return (
    <>
      <Container className="error">
        <h1 className=" mb-5 text-light text-decoration-underline fw-bold errorTitle">Error 404</h1>
        <h5 className="text-light">Lo sentimos, pero no se pudo encontrar la página que solicitó.</h5>
        <Link className="green-text" to='7home'>Vuelve a la pagina principal!</Link>
      </Container>
    </>
  )
}

export default Error404