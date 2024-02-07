import React from 'react'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';

const Galeria = () => {
  return (
    <>
      <Container>
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