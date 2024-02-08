import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductCard = () => {

  const [products, setProduct] = useState([])

  const getProduct = async () => {
    const response = await fetch ("http://localHost:4000/admin/getCanchas",{
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
      console.log(products)
    }, [products])

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