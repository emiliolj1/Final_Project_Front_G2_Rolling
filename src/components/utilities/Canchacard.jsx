import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Canchacard = ({id, name, image, description}) => {

  const [canchas, setCancha] = useState([])

//   const getUsers = async () => {
//     const response = await fetch ("http://localHost:4000/admin/getCanchas",{
//         method:'GET',
//         headers:{'Content-type':'application/json'},
//         credentials:'include'
//     })
//     const responseData = await response.json();
//     console.log(responseData);

//     const mappedCanchas = responseData.map(cancha => ({
//         id: cancha.id,
//         Name: cancha.Name,
//         Email: cancha.email,
//         Rol: cancha.role
//     }))
//     console.log(mappedCanchas)
//     setCancha(responseData); // Aquí asigna responseData directamente
//     console.log(canchas);
// }
// useEffect(() => {
//     getCanchas();
// }, []);

  return (
    <>
    <Container className='pt-5 pb-5 mb-5'>
      <Row  className='pt-5 pb-5 mb-5 mt-5'>
        <Col className='border border-success rounded-4 box-shadow bg-success shadow-lg'>

        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Canchacard;