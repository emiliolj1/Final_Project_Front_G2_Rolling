import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container'
import FormGroup from 'react-bootstrap/FormGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Contacto = () => {
  
  const {register, handleSubmit, reset, formState:{errors}} = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:4000/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      const responseData = await response.json();

      if(response.ok){
        console.log(responseData.message);
      } else {
        console.log('Error al enviar el correo:', responseData.message);
      }
    } catch (error) {
      console.log('Error al enviar el correo:', error);
    }
  }
  
  return (
    <>
      <Container className='mt-4 py-5'>
        <Container className='my-5'>
          <h1 className='text-light text-center my-5 text-decoration-underline'>Envianos tu consulta!</h1>
          <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <FormGroup className='mt-2 mb-3'>
              <Form.Label className='m-0 text-light'>Nombre</Form.Label>
              <Form.Control
                type='text'
                placeholder='Ingresa tu nombre...'
                {...register('name', {
                  required: 'Este campo es Obligatorio',
                  minLength: {value: 3, message: 'Este campo no puede contener menos de 3 caracteres'},
                  maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
                })}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type='invalid'>{errors.name?.message}</Form.Control.Feedback>
            </FormGroup>
            <FormGroup className='mb-3'>
              <Form.Label className='m-0 text-light'>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Ingresa tu email...'
                {...register('email', {
                  required: 'Este campo es Obligatorio',
                  minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                  maxLength: {value: 25, message: 'Este campo no puede contener mas de 25 caracteres'}
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
            </FormGroup>
            <FormGroup className='mb-3'>
              <Form.Label className='m-0 text-light'>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                type='text'
                placeholder='Ingresa tu mensaje...'
                {...register('message', {
                  required: 'Este campo es Obligatorio',
                  minLength: {value: 5, message: 'Este campo no puede contener menos de 5 caracteres'},
                })}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type='invalid'>{errors.message?.message}</Form.Control.Feedback>
            </FormGroup>
            <Button type='submit' className='btn-login1'>
              Enviar!
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  )
}

export default Contacto