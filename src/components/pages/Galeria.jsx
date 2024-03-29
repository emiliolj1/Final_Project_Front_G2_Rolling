import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Galeria = () => {
  return (
    <>
      <Container className='mt-5 py-5'>
        <h2 className='text-light text-decoration-underline fw-bold text-center pb-4'>Galeria de Imagenes</h2>
        <h5 className='text-light text-center fw-light pb-4 px-5'>Estas son algunas fotos capturadas por el fotografo de nuestro equipo de trabajo y recopilacion de redes sociales de nuestros clientes disfrutando de un emocionante momento en nuestro predio</h5>
        <Container className='bg-light rounded p-4'>
          <Carousel>
            <Carousel.Item>
              <Image src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>              
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://images.unsplash.com/photo-1504305754058-2f08ccd89a0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://images.unsplash.com/photo-1629977010057-6c5086645098?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://images.unsplash.com/photo-1571080096581-53aefc318ac3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" rounded fluid/>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </>
  )
}

export default Galeria