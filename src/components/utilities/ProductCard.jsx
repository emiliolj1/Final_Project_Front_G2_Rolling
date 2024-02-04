import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({id, name, image, description}) {

  const navigate = useNavigate

  const handleClick = () => {
    navigate(`${id}`)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;