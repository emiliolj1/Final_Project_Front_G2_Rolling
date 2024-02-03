import { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const CardDetails = () => {

  
  const [BookinShow, setBShow] = useState(false)

  const handleClose = () => {
    setBShow(false)
  }

  // const handleShow = () => {
  //   setBShow(true)
  // }

  const { id } = useParams()
  const navigate = useNavigate()

  const getCancha = async () => {
    const response = await fetch(`https://localHost:4000/canchas/${id}`)
    const data = await response.json()

    console.log(data);
    setCancha(data)
  }
  useEffect(() => {
    getCancha()
  }, [])

  const makeBookin = async () => {
    try {
      const response = await fetch(``, {
        method:'POST'
      })
      const responsedata = await response.json()
      console.log(responsedata);
    } catch (error) {
      console.log('error creando la reserva', error);
    }
  }

  return(
    <>
    <Button variant="primary" onClick={()=> setBShow(true)}>Realizar reserva</Button>
    <Modal 
        show={BookinShow} 
        onHide={handleClose} 
        animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Crear producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit((data) => makeBookin(data))}>
                <Form.Group className='m-2'>
                    <Form.Label>Dia</Form.Label>
                    <Form.Control
                    type='date'
                    placeholder='ingrese un dia...'
                    isInvalid={!!errors.date}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('date', {required:'este campo es obligatorio'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.date?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                    as="textarea" 
                    type='time'
                    placeholder='ingrese una hora...'
                    isInvalid={!!errors.time}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('time', {required:'este campo es obligatorio'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.time?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='email'
                    placeholder='ingrese su email...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('', {required:'este campo es obligatorio'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default CardDetails