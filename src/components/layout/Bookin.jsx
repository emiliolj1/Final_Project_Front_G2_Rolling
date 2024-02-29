import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Container, Form, Button, FormGroup, Col, Row, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Bookin = ({user}) => {
  const {register, handleSubmit, formState:{ errors }, reset}  = useForm()
  const [fechaMinima, setFechaMinima] = useState(obtenerFechaActual());

  const [reservaShow, setReserva] = useState(false);
  const handleCloseReserva = () => setReserva(false);
  const handleShowReserva = () => setReserva(true);

  const onSubmit = async(data) =>{
    const fullData = {...data, name: user.userInfo.Name}
    console.log(fullData);
    try {      
      const response = await fetch(`http://localhost:4000/reserva`,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        credentials:'include',
        body: JSON.stringify(fullData)
      })
      const responseData = await response.json();

      if(response.status === 200){
        handleShowReserva()
        reset()
      }
      console.log(responseData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function obtenerFechaActual() {
    const hoy = new Date();
    const año = hoy.getFullYear();
    let mes = hoy.getMonth() + 1;
    let dia = hoy.getDate();

    // Agregar un cero al mes si es necesario para mantener el formato de dos dígitos
    if (mes < 10) {
      mes = `0${mes}`;
    }

    // Agregar un cero al día si es necesario para mantener el formato de dos dígitos
    if (dia < 10) {
      dia = `0${dia}`;
    }

    return `${año}-${mes}-${dia}`;
  }

  return (
    <>
    <Container className='my-5'>
      <Row className='py-5'>
        <Col className='border border-success rounded-4 box-shadow bgBookin shadow-lg'>
          <Form className='px-5' onSubmit={handleSubmit((data) => onSubmit(data))}>
            <h1 className='my-4 text-light text-center text-decoration-underline'>¡Reserva tu cancha!</h1>
            <Form.Group>
              <Form.Label className='mt-3 text-light'>
                <h4>Nombre de la cancha:</h4>
              </Form.Label>
              <Form.Select {...register('cancha')}>
                <option value="Cancha de Futbol 11">Cancha de Futbol 11</option>
                <option value="Cancha de Futbol 7">Cancha de Futbol 7</option>
                <option value="Cancha de Futbol 5">Cancha de Futbol 5</option>
              </Form.Select>
            </Form.Group>
            <FormGroup>
              <Form.Label className='mt-3 text-light'>
                <h4>Fecha de la reserva:</h4>
              </Form.Label>
              <Form.Control 
                type='date'
                isInvalid={!!errors.date}
                {...register('date', {
                  required: 'Por favor, ingresa una fecha de reserva.',
                  min: {
                    value: fechaMinima,
                    message: `La fecha mínima permitida es ${fechaMinima}.`
                  }
                })}
              />
              <Form.Control.Feedback type='invalid'>{errors.date?.message}</Form.Control.Feedback>
            </FormGroup>
            <FormGroup>
              <Form.Label className='mt-3 text-light'>
                <h4>Hora de la reserva:</h4>
              </Form.Label>
              <Form.Control 
                type='time'
                isInvalid={!!errors.time}
                {...register('time', {
                  required: 'Por favor, ingresa una hora de reserva.',
                  min: {
                    value: '08:00', // Hora mínima permitida
                    message: 'La hora mínima permitida es 08:00.'
                  },
                  max: {
                    value: '23:00', // Hora máxima permitida
                    message: 'La hora máxima permitida es 23:00.'
                  }
                })}
              />
              <Form.Control.Feedback type='invalid'>{errors.time?.message}</Form.Control.Feedback>
            </FormGroup>
            <Container className='text-center'>
              <Button type='submit' className='fs-5 fw-bold btnBookin my-4'>Crear reserva</Button>
            </Container>
          </Form>
        </Col>
      </Row>
    </Container>

    <Modal
        show={reservaShow}
        onHide={() => setReserva(false)}
        aria-labelledby="inactive"
      >
        <Modal.Header>
          <Modal.Title id="inactive">
            Reserva creada con exito!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Crea otra o vuelve a la pantalla principal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseReserva}>
            Crear otra!
          </Button>
          <Link to='/'>
            <Button className='btn-login1' onClick={handleCloseReserva}>
              Pagina Principal!
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Bookin