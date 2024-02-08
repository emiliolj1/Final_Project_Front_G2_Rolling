import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Galeria = () => {
  return (
    <>
      <Container className='mt-5 py-5'>
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
        </Carousel>
      </Container>
    </>
  )
}

export default Galeria