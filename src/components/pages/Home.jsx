import { useState } from 'react';
import { useEffect } from 'react';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
import Card from '../layout/Card'

const Home = ({user}) => {

  const [products, setProduct] = useState([])
  const userResult = user

  const getProduct = async () => {
    const response = await fetch ("https://backend-68i-salefulbo.onrender.com/admin/getProducts",{
        method:'GET',
        headers:{'Content-type':'application/json'},
        credentials:'include'
    })
    const responseData = await response.json();

    const mappedProduct = responseData.map(product => ({
      Title: product.Title,
      description: product.description,
      Url:product.Url
    }))
    setProduct(mappedProduct);
    }
    useEffect(() => {
      getProduct();
    }, []);
    useEffect(() => {
    }, [products])

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Container fluid className="mt-5 py-4 ">
        <Row className="mx-auto p-3 cont-carrousel">
          <Col xs={12} md={8} className="p-2">
            <Carousel>
              <Carousel.Item interval={5000}>
                <Image src="https://images.unsplash.com/photo-1556056504-dc77ff4d11b0?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <Image src="https://images.unsplash.com/photo-1635400759226-a93fdb204ba1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <Image src="https://images.unsplash.com/photo-1521579971123-1192931a1452?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} md={4} className="text-center my-auto">
            <h2>¿Queres alquilar una cancha como estas?</h2>
            {
              user && userResult.isLogged
              ?
              <Link to='/alquiler'>
                <Button className='btn-login1  my-3'>
                  <h4>Alquila tu Cancha!</h4>
                </Button>
              </Link>
              :
              <Link>
                <Button onClick={handleShowModal} className='btn-login1  my-3'>
                  <h4>Alquila tu Cancha!</h4>
                </Button>
              </Link>
            }
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-4">
        <Row className="mx-auto container-fluid py-3 faceHome">
          <Col xs={12} md={6}>
            <Image src="https://images.unsplash.com/photo-1494177310973-4841f7d5a882?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   fluid rounded/>
          </Col>
          <Col xs={12} md={6} className="text-center py-2 my-auto">
            <h1 className="fw-bold mb-4">Sale Fulbo?</h1>
            <h5 className="fw-light">Tu destino para vivir la pasión del fútbol. Ofrecemos canchas de primera calidad para partidos emocionantes con amigos o competiciones serias. Nuestro ambiente acogedor y nuestras instalaciones modernas te garantizan una experiencia inigualable en cada visita.</h5>
            <Link to='/canchas'>
              <Button className="my-4 btn-home">Conoce nuestras canchas!</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className='mb-4' fluid>
        <h3 className='text-light mb-3 mx-3'>Esto y mucho mas vas a poder conseguir en el predio!</h3>
        <Row>
          {
            products.map((product, index) => (
              <Card key={index} title={product.Title}
              url={product.Url}/>
            ))
          }
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
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

export default Home