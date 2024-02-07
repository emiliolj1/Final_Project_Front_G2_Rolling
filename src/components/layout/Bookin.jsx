import { useForm } from 'react-hook-form';
import { Container, Form, Button, FormGroup, Col, Row} from 'react-bootstrap';





const Bookin = () => {
  const {register, handleSubmit, formState:{ errors }}  = useForm()

  

  // const onSubmit = async(data) =>{
  //   console.log(data)
  //   const response = await fetch(`http://localhost:4000/bookins`,{
  //     method:'POST',
  //     headers:{'Content-type':'application/json'},
  //     credentials:'include'
  //   })
  //   const responseData = await response.json();
  //   console.log(responseData);
  // }
  
  return (
    <>
    <Container className='pt-5 pb-5 mb-5'>
      <Row className='pt-5 pb-5 mb-5 mt-5'>
        <Col className='border border-success rounded-4 box-shadow bg-success shadow-lg'>
        <Form>
          <FormGroup>
            <h1 className='mt-5 text-light text-center'>¡Reserva tu cancha!</h1>
            <Form.Label className='mt-4 text-light'><h4>Fecha de la reserva:</h4></Form.Label>
            <Form.Control 
              type='date'
              {...register('date')}
            />
            <Form.Control.Feedback type='invalid'>{errors.date?.message}</Form.Control.Feedback>
          </FormGroup>
          <FormGroup>
            <Form.Label className='mt-5 pb-3 pe-4 text-light'><h4>Hora de la reserva:</h4></Form.Label>
            <Form.Control 
              type='time'
              {...register('time')}
            />
          </FormGroup>
          <FormGroup>
          <Form.Label className='mt-5 text-light'><h4>Email:</h4></Form.Label>
          <Form.Control 
            className='mt-1'
            type='email'
            value={''}
            placeholder='Ingrese su email...'
            {...register('email', {required: ' ',
            minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
            maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}})}
            isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
          </FormGroup>
          
          <FormGroup>
          <Form.Label className='mt-5 text-light'><h4>Nombre:</h4></Form.Label>
          <Form.Control 
            className='mt-1'
            type='text'
            placeholder='Ingrese su nombre...'
            {...register('name', {required: ' ',
            minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
            maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}})}
            isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
          </FormGroup>
          
          <Button type='submit' className='mx-auto btn-login mb-3 border border-0' onClick={() => enviarMail()}>Crear reserva</Button>
        </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Bookin