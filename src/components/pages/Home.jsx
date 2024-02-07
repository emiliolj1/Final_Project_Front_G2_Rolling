import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import CardProductos from "../layout/Card";

const Home = () => {
  return (
    <>
      <Container fluid className="mt-5 pt-3 ">
        <Row className="mx-auto container-fluid py-3 faceHome">
          <Col xs={12} md={6}>
            <Image src="https://picsum.photos/id/26/1200/800" fluid rounded/>
          </Col>
          <Col xs={12} md={6} className="text-center py-2 my-auto">
            <h1 className="fw-bold">Sale Fulbo?</h1>
            <h5 className="fw-light">Mini historia empresa que atrape comercialmente a las personas</h5>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-4">
        <Row className="mx-auto p-3 cont-carrousel">
          <Col xs={12} md={8} className="p-2">
            <Carousel>
              <Carousel.Item interval={2000}>
                <Image src="https://picsum.photos/id/237/1200/700" rounded fluid/>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src="https://picsum.photos/id/237/1200/700" rounded fluid/>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image src="https://picsum.photos/id/237/1200/700" rounded fluid/>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} md={4} className="text-center my-auto">
            <h2>¿Queres alquilar una cancha como estas?</h2>
            <Button className='btn-login1  my-3'>
              <h4>Alquila tu Cancha!</h4>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-3">
        <div>
          <h4 className="text-light">Alguno de nuestros productos...</h4>
        </div>
        <Row>
          <CardProductos title={'titulo 1'} url={'https://picsum.photos/id/237/200'}/>
          <CardProductos title={'titulo 2'} url={'https://picsum.photos/id/238/200'}/>
          <CardProductos title={'titulo 3'} url={'https://picsum.photos/id/239/200'}/>
          <CardProductos title={'titulo 4'} url={'https://picsum.photos/id/236/200'}/>
          <CardProductos title={'titulo 5'} url={'https://picsum.photos/id/235/200'}/>
          <CardProductos title={'titulo 6'} url={'https://picsum.photos/id/234/200'}/>
        </Row>
      </Container>
    </>
  )
}

export default Home