import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const Galeria = () => {
  return (
    <>
      <Container className='mt-5 py-5'>
        <Carousel>
          <Carousel.Item>
            <Image src="https://picsum.photos/id/237/1200/700" rounded fluid/>              
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://picsum.photos/id/237/1200/700" rounded fluid/>
          </Carousel.Item>
          <Carousel.Item>
            <Image src="https://picsum.photos/id/237/1200/700" rounded fluid/>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default Galeria