import { useState } from 'react';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductDetail = () => {

  const [products, setProduct] = useState([])
  const key = localStorage.getItem('key')

  const getProduct = async () => {
    const response = await fetch (`http://localHost:4000/admin/getProducts/${key}`,{
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
      <Container>
        {
          <Row  className='pb-5 mt-0 g-0'>
            <Col className='border border-success bg-success col-sm-6 rounded-start'>
              <Image src={products.Url}  className='aling-items-center justify-content-center mt-4 pt-5 ps-3 mb-4 pb-4 ' fluid/>
            </Col>
            <Col className='border border-success box-shadow bg-success rounded-end col-sm-6'>
              <h2 className='text-light text-center mt-5'>{products.Title}</h2>
              <h5 className='text-light text-center ps-3'>{products.description}</h5>
              <h2 className='text-light text-center mt-5'>{products.Price}</h2>
            </Col>
          </Row>
        }
      </Container>
    </>
  )
}

export default ProductDetail