import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

const Sobrenosotros = () => {
  return (
    <>
      <Container fluid className="py-5">
        <Row className="text-light mb-5">
          <div className="fw-bolder text-center mb-3 "><h1>Sale fulbo'?</h1></div>
          <p className="px-5 fst-italic text-center">
            Tu destino para el juego perfecto. Ofrecemos canchas de fútbol de primera calidad en un ambiente familiar y acogedor. Desde partidos amistosos hasta competiciones emocionantes, en nuestro complejo deportivo encontrarás el espacio ideal para disfrutar del deporte que amas.
          </p>
          <p className="px-5 fst-italic text-center">
            ¡Únete a nuestra comunidad futbolística y haz de cada partido una experiencia inolvidable en Sale fulbo'!"
          </p>
        </Row>
        <Row className="mx-auto p-3 cont-carrousel">
          <Col xs={12} md={8} className="p-2">
            <Image src="img/f5.jpg" rounded fluid/>   
          </Col>
          <Col xs={12} md={4} className="text-center my-auto">
            <h2 className="link-success p-3 fw-bolder">Sale Fulbo?</h2>
            <h5 className="fw-light fst-italic">
              Sale fulbo es una pagina con el fin de ofrecerle a los amantes de futbol una experiencia rapida y comoda para alquilar la cancha que mas te guste.
            </h5>
          </Col>
        </Row>
        <Row className="text-light mx-4 mt-5"> 
        <Col className="pe-2" xs={12} md={6}>
          <h2 className="text-center mb-4">Valores de nuestra empresa</h2>
          <p className="text-center">Los valores de "sale fulbo'?" se centran en la pasión por el fútbol, la calidad del servicio y el compromiso con la comunidad.</p>
          <ul className="fw-bold text-center list-unstyled">
            <li>Pasion por el futbol</li>
            <li>Calidad del servicio</li>
            <li>Compromiso con la comunidad</li>
          </ul>
        </Col>
        <Col className="pe-2 text-center" xs={12} md={6}>
          <h2 className="mb-4">Nuestro equipo de trabajo!</h2>
          <p className="mb-4">Nuesto grupo de trabajo se compone de estudiantes que se dedican al desarrollo web!</p>
          <p className="mb-4">Link del repositorio Front: <a className="green-text" href="https://github.com/emiliolj1/Final_Project_Back_G2_Rolling">Clickea aqui!</a></p>
          <p >link del repositorio Back: <a className="green-text" href="https://github.com/emiliolj1/Final_Project_Back_G2_Rolling">Clickea aqui!</a></p>
        </Col>
        </Row>
      </Container>
    </>
  )
}

export default Sobrenosotros