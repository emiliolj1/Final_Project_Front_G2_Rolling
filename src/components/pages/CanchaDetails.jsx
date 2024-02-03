import { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const CardDetails = () => {

  const [cancha, setCancha] = useState({})
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
                <Form onSubmit={handleSubmit((data) => (data))}>
                <Form.Group className='m-2'>
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='ingrese un titulo...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('title', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                    as="textarea" 
                    type='text'
                    placeholder='ingrese una descricion'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('description', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='m-2'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                    className='ms-0 me-5 pe-5' 
                    type='number'
                    placeholder='Enter your name...'
                    isInvalid={!!errors.email}
                    // the method register allows you to register an input or select element and apply validations rules
                    // operator (...) allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 value is expected. 
                    {...register('number', {required:'this field is required'})}
                    />
                <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
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