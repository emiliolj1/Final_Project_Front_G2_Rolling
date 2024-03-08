import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


const Canchacard = () => {

  const [canchas, setCancha] = useState([])

  const getCancha = async () => {
    const response = await fetch ("https://backend-68i-salefulbo.onrender.com/admin/getCanchas",{
        method:'GET',
        headers:{'Content-type':'application/json'},
        credentials:'include'
    })
    const responseData = await response.json();

    const mappedCanchas = responseData.map(cancha => ({
      Title: cancha.Title,
      Description: cancha.Description,
      Url: cancha.Url
    }))

    setCancha(mappedCanchas);
    }
    useEffect(() => {
      getCancha();
    }, []);
    useEffect(() => {
      console.log(canchas)
    }, [canchas])

  return (
    <>
      <Container className='my-5 py-1' >
      <h2 className='fw-bold text-light text-center text-decoration-underline my-5'>Nuestras Canchas</h2>
      { 
        canchas.map((cancha, index) => (
          <Container className='rounded border border-success bg-success mb-5 g-0' key={index}>
            <Row>
              <Col xs={12} sm={6} className='my-auto'>
                <Image src={cancha.Url}  className='court my-4 mx-4' rounded/>
              </Col>
              <Col sm={6} className='my-auto'> 
                <h2 className='text-decoration-underline text-light text-center mt-5 fw-bold'>{cancha.Title}</h2>
                <h5 className='fw-light text-light text-center p-5'>{cancha.Description}</h5>
              </Col>
            </Row>
          </Container>
        ))
      }
      </Container>
    </>
  );
}

export default Canchacard;