import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const Canchacard = () => {

  const [canchas, setCancha] = useState([])

  const getCancha = async () => {
    const response = await fetch ("http://localHost:4000/admin/getCanchas",{
        method:'GET',
        headers:{'Content-type':'application/json'},
        credentials:'include'
    })
    const responseData = await response.json();

    const mappedCanchas = responseData.map(cancha => ({
      Title: cancha.Title,
      description: cancha.description,
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
    {/* <div className='text-light text-center'>hola</div> */}
    { 
      canchas.map((cancha, index) => (
      <Container className='pt-5 pb-5 ' key={index}>
        <Row  className='pb-5 mt-0 g-0'>
          <Col className='border border-success bg-success col-sm-6 rounded-start'>
          <Image src={cancha.Url}  className='aling-items-center justify-content-center mt-4 pt-5 ps-3 mb-4 pb-4 ' fluid/>
          </Col>
          <Col className='border border-success box-shadow bg-success rounded-end col-sm-6'>
          <h2 className='text-light text-center mt-5'>{cancha.Title}</h2>
          <h5 className='text-light text-center ps-3'>{cancha.description}</h5>
          </Col>
        </Row>
      </Container>
      )
      )
    }
    </>
  );
}

export default Canchacard;