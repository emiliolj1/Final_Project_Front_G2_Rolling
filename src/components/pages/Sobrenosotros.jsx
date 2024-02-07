import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import CardProductos from "../layout/Card";


const Sobrenosotros = () => {
  return (
    <>
    <Container fluid className="my-4">
        <Row className="mx-auto p-3 cont-carrousel">
        <Col xs={12} md={8} className="p-2">
           <Image src="img/f5.jpg" rounded fluid/>   
          </Col>
          <Col xs={12} md={4} className="text-center my-auto">
            <h2 className=" link-success p-3">Sale Fulbo?</h2>
              <h4>Sale fulbo es una pagina con el fin de ofrecerle a los amantes de futbol una experiencia rapida y comoda para alquilar la cancha que mas te guste.</h4>
            
          </Col>
          
        </Row>
      </Container>

    

   
    </>
  )
}

export default Sobrenosotros