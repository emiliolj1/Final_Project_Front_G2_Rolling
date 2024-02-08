import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../layout/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ProductCard = () => {

  const [products, setProduct] = useState([])

  const getProduct = async () => {
    const response = await fetch ("http://localHost:4000/admin/getProducts",{
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
    <>
      <Container className='mt-5 py-4' fluid>
        <h3 className='text-center text-light mb-5 mt-3'>Todos los productos podras adquirirlo de manera fisica en nuestras instalaciones :) </h3>
        <Row>
          {
            products.map((product, index) => (
              <Card key={index} title={product.Title}
              url={product.Url}/>
            ))
          }
        </Row>
      </Container>
    </>
  );
}

export default ProductCard;