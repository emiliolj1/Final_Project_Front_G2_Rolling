import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardProductos = ({title, url}) => {
  return (
    <Col className="py-2 d-flex justify-content-center" md={4} lg={4} xl={2}>
      <Card className='cardXD'>
        <Card.Body className='bg'>
          <Card.Img variant="top" src= {url} />
          <Card.Title>{title}</Card.Title>
          <Button className='btn-login1'>Ver mas!</Button>
        </Card.Body>
        <div className='blob'/>
      </Card>
    </Col>
  )
}

export default CardProductos