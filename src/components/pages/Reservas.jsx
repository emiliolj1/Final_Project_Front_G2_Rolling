import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Trash } from 'react-bootstrap-icons';

const Reservas = ({user}) => {

  const [canchas, setCanchas] = useState([])

  const getCanchas = async () => {
    try {
      const response = await fetch(`http://localHost:4000/admin/getCanchas`,{
        method:'GET',
        headers: { 'Content-type': 'application/json' },
        credentials: 'include',
      })
      const responseData = await response.json()

      const mappedCanchas = responseData.map(cancha   => ({
        id: cancha._id,
        Title: cancha.Title,
        Url: cancha.Url,
        Description: cancha.Description,
        Array: cancha.Array
      }))
      setCanchas(mappedCanchas)
    } catch (error) {
      console.log('error en el pedido de los canchas', error);
    }
  }
  useEffect(() => {
    getCanchas();
  }, []);
  useEffect(() => {
  }, [canchas]);

  const BookinDelete = async (data) => {
    console.log(data);
    try {
      const response = await fetch(`http://localhost:4000/deleteBookin`,{
          method:'DELETE',
          headers:{'Content-type':'application/json'},
          credentials:'include',
          body: JSON.stringify(data)
      })
      const responseData = await response.json();
      console.log(responseData);
      getCanchas();
      handleClose();
    } catch (error) {
      console.log('error catch')
    }
  }

  return (
    <Container className='mt-4 py-5'>
      <div className='text-light fw-bolder text-center mb-3'><h2>Mis reservas!</h2></div>
      <Row className='bg-light'>
        <Table  bordered responsive="sm" className='text-center'>
          <thead>
            <tr>
              <th className='align-middle'>Cancha</th>
              <th className='align-middle'>Fecha</th>
              <th className='align-middle'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              canchas.map(cancha => (
                <>
                  {
                    cancha.Array.filter( reserva => ( reserva.name === user.userInfo.Name)).map( reserva => (
                      <>
                        <tr>
                          <td className='fw-bolder align-middle'>{cancha.Title}</td>
                          <td className='align-middle'>{reserva.date}</td>
                          <td className='align-middle'>
                            <Button className='fs-4 text-danger transparent' onClick={() => BookinDelete({id: reserva._id, canchaName: cancha.Title})}>
                              <Trash/>
                            </Button>
                          </td>
                        </tr>
                      </>
                    ))
                  }
                </>
              ))
            }
          </tbody>
        </Table>
      </Row>
    </Container>
  )
}

export default Reservas